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
import { OrderTableSkeleton } from "./order-table-skeleton";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";
import { OrderTableFilters } from "./order-table-filters";
import { useState } from "react";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";
import { OrderStatus } from "./order-status";

export function OrderTable() {
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
			<OrderTableFilters date={date} setDate={setDate} />

			<div className="rounded-md border">
				<Table>
					<TableHeader className="bg-muted/50">
						<TableRow>
							<TableHead className="w-[75px]"></TableHead>
							<TableHead>Número do pedido</TableHead>
							<TableHead>Preço</TableHead>
							<TableHead>Data</TableHead>
							<TableHead>Status</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{result &&
							result.map((user) => {
								return (
									<TableRow key={user.id}>
										<TableCell>
											<Button className="p-0 w-10 h-10" variant="outline">
												<Eye size={20} />
											</Button>
										</TableCell>
										<TableCell>
											<div className="w-[120px]">97337</div>
										</TableCell>
										<TableCell>
											<div className="w-[120px]">R$ 49,99</div>
										</TableCell>
										<TableCell>
											<div className="w-[120px]">
												{format(new Date(user.created_at), "dd/MM/yyyy")}
											</div>
										</TableCell>
										<TableCell>
											<div className="w-[120px]">
												<OrderStatus status="pending" />
											</div>
										</TableCell>
									</TableRow>
								);
							})}

						{isLoadingUsers && <OrderTableSkeleton />}
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
