"use client";
import { useForm } from "react-hook-form";
import { DatePicker } from "../ui/date-picker";
import { Input } from "../ui/input";
import { CreateUserModal } from "./user-create-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { z } from "zod";

const userFilterSchema = z.object({
	name: z.string().optional(),
	email: z.string().optional(),
});

type UserFilterSchema = z.infer<typeof userFilterSchema>;

export function UserTableFilters() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const { register, handleSubmit, control, reset } = useForm<UserFilterSchema>({
		resolver: zodResolver(userFilterSchema),
		defaultValues: {
			name: "",
			email: "",
		},
	});

	function handleFilter({ name, email }: UserFilterSchema) {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		if (name) {
			state.set("name", name);
		} else {
			state.delete("name");
		}

		if (email) {
			state.set("email", email);
		} else {
			state.delete("email");
		}

		const search = state.toString();
		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	}

	function handleClearFilters() {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		state.delete("name");
		state.delete("email");

		reset({
			name: "",
			email: "",
		});

		const search = state.toString();
		const query = search ? `?${search}` : "";
		router.push(`${pathname}${query}`);
	}

	return (
		<form className="flex gap-4 py-4" onSubmit={handleSubmit(handleFilter)}>
			<Input
				className="w-full"
				placeholder="Nome do usuário"
				{...register("name")}
			/>

			<Input
				className="w-full"
				placeholder="Email do usuário"
				{...register("email")}
			/>
			<DatePicker />

			<Button type="submit" className="px-8">
				Filtar
			</Button>

			<Button
				type="button"
				variant="outline"
				className="px-8"
				onClick={() => handleClearFilters()}
			>
				Limpar
			</Button>

			<CreateUserModal />
		</form>
	);
}
