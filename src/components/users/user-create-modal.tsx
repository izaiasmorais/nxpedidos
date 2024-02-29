"use client";
import { CreateUserBody } from "@/@types/user";
import { createUser } from "@/api/create-user";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function CreateUserModal() {
	const queryClient = useQueryClient();

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<CreateUserBody>({
		defaultValues: {
			name: "",
			email: "",
		},
	});

	const { mutateAsync: createUserFn } = useMutation({
		mutationFn: createUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
			toast.success("Usuário criado com sucesso!");
			document.getElementById("closeDialog")?.click();
		},
		onError: () => toast.error("Erro ao criar usuário!"),
	});

	function handleCreateUser(data: CreateUserBody) {
		createUserFn(data);
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Adicionar Usuário</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Adicionar Usuário</DialogTitle>
					<DialogDescription>
						Preencha os campos abaixo para adicionar um novo usuário.
					</DialogDescription>
				</DialogHeader>

				<form
					className="grid gap-4 py-4"
					onSubmit={handleSubmit(handleCreateUser)}
				>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Nome
						</Label>
						<Input
							id="name"
							placeholder="Izaías Lima"
							className="col-span-3"
							required
							{...register("name")}
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="email" className="text-right">
							Email
						</Label>
						<Input
							id="email"
							placeholder="nome@gmail.com"
							className="col-span-3"
							{...register("email")}
							required
						/>
					</div>

					<DialogFooter>
						<DialogClose asChild id="closeDialog">
							<Button variant="outline">Cancelar</Button>
						</DialogClose>

						<Button type="submit" disabled={isSubmitting}>
							Adicionar
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
