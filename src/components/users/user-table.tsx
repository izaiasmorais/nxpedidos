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

			<div className="rounded-md border">
				<Table>
					<TableHeader className="bg-muted/50">
						<TableRow>
							<TableHead className="min-w-[400px]">Nome</TableHead>
							<TableHead className="w-[400px]">Email</TableHead>
							<TableHead className="w-[400px]">Criação</TableHead>
							<TableHead className="w-[100px]"></TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{result &&
							result.map((user) => {
								return (
									<TableRow key={user.id}>
										<TableCell>{user.name}</TableCell>
										<TableCell>{user.email}</TableCell>
										<TableCell>
											{format(new Date(user.created_at), "dd/MM/yyyy")}
										</TableCell>
										<TableCell>
											<EditUserModal />
										</TableCell>
									</TableRow>
								);
							})}

						{isLoadingUsers && <UserTableSkeleton />}
					</TableBody>
				</Table>
			</div>

			{result && result.length === 0 && !isLoadingUsers && (
				<div className="flex w-full items-center justify-center mt-20 text-muted-foreground">
					Nenhum usuário encontrado.
				</div>
			)}
		</>
	);
}
