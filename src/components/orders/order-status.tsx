export type OrderStatus =
	| "pending"
	| "processing"
	| "delivering"
	| "canceled"
	| "delivered";

interface OrderStatusProps {
	status: OrderStatus;
}

const orderStatusMap: Record<OrderStatus, string> = {
	pending: "Pendente",
	processing: "Processando",
	delivering: "Em entrega",
	canceled: "Cancelado",
	delivered: "Entregue",
};

export function OrderStatus({ status }: OrderStatusProps) {
	return (
		<div className="flex items-center gap-2">
			{status === "pending" && (
				<div
					className="flex px-2 py-0.5 border bg-yellow-50 border-yellow-200 text-yellow-950 rounded-full
			text-xs font-semibold dark:bg-yellow-950 dark:border-yellow-900 dark:text-yellow-400"
				>
					{orderStatusMap[status]}
				</div>
			)}

			{status === "canceled" && (
				<div
					className="flex px-2 py-0.5 border bg-red-50 border-red-200 text-red-950 rounded-full
			text-xs font-semibold dark:bg-red-950 dark:border-red-900 dark:text-red-400"
				>
					{orderStatusMap[status]}
				</div>
			)}

			{status === "delivered" && (
				<div
					className="flex px-2 py-0.5 border bg-emerald-50 border-emerald-200 text-emerald-950 rounded-full
			text-xs font-semibold dark:bg-emerald-950 dark:border-emerald-900 dark:text-emerald-400"
				>
					{orderStatusMap[status]}
				</div>
			)}

			{status === "delivering" && (
				<div
					className="flex px-2 py-0.5 border bg-purple-50 border-purple-200 text-purple-950 rounded-full
			text-xs font-semibold dark:bg-purple-950 dark:border-purple-900 dark:text-purple-400"
				>
					{orderStatusMap[status]}
				</div>
			)}

			{status === "processing" && (
				<div
					className="flex px-2 py-0.5 border bg-blue-50 border-blue-200 text-blue-950 rounded-full
			text-xs font-semibold dark:bg-blue-950 dark:border-blue-900 dark:text-blue-400"
				>
					{orderStatusMap[status]}
				</div>
			)}
		</div>
	);
}
