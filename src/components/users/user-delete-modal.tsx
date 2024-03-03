import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "@/api/delete-user";
import { toast } from "sonner";

interface UserDeleteDialogProps {
	userId?: string;
}

export function UserDeleteDialog({ userId }: UserDeleteDialogProps) {
	const queryClient = useQueryClient();

	const { mutateAsync: deleteUserFn } = useMutation({
		mutationFn: deleteUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
			toast.success("Usuário deletado com sucesso!");
		},
	});

	function handleDeleteUser() {
		if (!userId) return;
		deleteUserFn({ userId });
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					className="w-9 h-9 p-0"
					variant="destructive"
					disabled={!userId}
				>
					<Trash className="h-4 w-4" />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Você tem certeza que quer deletar o usuário?
					</AlertDialogTitle>
					<AlertDialogDescription>
						Essa ação é irreversível e irá deletar todos os dados do usuário.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<AlertDialogAction onClick={() => handleDeleteUser()}>
						Confirmar
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
