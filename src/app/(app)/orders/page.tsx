import { OrderTable } from "@/components/orders/order-table";

export default function Orders() {
	return (
		<main className="flex flex-col gap-4 p-4">
			<h1 className="text-2xl font-semibold">Pedidos</h1>
			<OrderTable />
		</main>
	);
}
