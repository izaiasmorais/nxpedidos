"use client";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getUsers } from "@/api/get-users";
import { useQuery } from "@tanstack/react-query";
import { UserTableSkeleton } from "./user-table-skeleton";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";
import { UserTableFilters } from "./user-table-filters";
import { useState } from "react";
import { EditUserModal } from "./user-edit-modal";
import { UserDeleteDialog } from "./user-delete-modal";

export function UserTable() {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const searchParams = useSearchParams();

	const name = searchParams.get("name");
	const email = searchParams.get("email");

	const { data: result, isLoading: isLoadingUsers } = useQuery({
		queryKey: ["users", name, email, date],
		queryFn: () => getUsers({ name, email, created_at: date }),
	});

	return (
		<>
			<UserTableFilters date={date} setDate={setDate} />
			<Table>
				<TableHeader className="bg-muted">
					<TableRow>
						<TableHead className="w-[400px]">Identificador</TableHead>
						<TableHead className="w-[230px]">Nome</TableHead>
						<TableHead className="w-[230px]">Email</TableHead>
						<TableHead className="w-[130px]">Criação</TableHead>
						<TableHead></TableHead>
						<TableHead></TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{result &&
						result.map((user) => {
							return (
								<TableRow key={user.id}>
									<TableCell>{user.id}</TableCell>
									<TableCell>{user.name}</TableCell>
									<TableCell>{user.email}</TableCell>
									<TableCell>
										{format(new Date(user.created_at), "dd/MM/yyyy")}
									</TableCell>
									<TableCell>
										<EditUserModal />
									</TableCell>
									<TableCell>
										<UserDeleteDialog userId={user.id} />
									</TableCell>
								</TableRow>
							);
						})}

					{isLoadingUsers && <UserTableSkeleton />}
				</TableBody>
			</Table>

			{result && result.length === 0 && !isLoadingUsers && (
				<div className="flex w-full items-center justify-center mt-20 text-muted-foreground">
					Nenhum usuário encontrado.
				</div>
			)}
		</>
	);
}
