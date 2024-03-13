import { ProductTable } from "@/components/products/product-table";
import { Button } from "@/components/ui/button";
import { CircleDollarSign } from "lucide-react";
import Image from "next/image";

export default function Dashboard() {
	return (
		<main className="flex flex-col">
			<div className="flex items-center justify-between border-b p-4">
				<div className="flex items-center gap-2">
					<Image
						width={60}
						height={60}
						alt="Nossa Pizza Logo"
						src="/nossa-pizza-logo.png"
						className="rounded-full"
					/>
					<h1 aria-label="Nossa Pizza" className="text-3xl">
						Nossa Pizza
					</h1>
				</div>

				<div className="flex items-center gap-4">
					<Button className="text-red-500" variant="link">
						Ver mais
					</Button>

					<div className="flex items-center gap-2 text-muted-foreground">
						<CircleDollarSign className="h-4 w-4" />
						<span className="text-xs">Pedido mínimo: R$ 20,00</span>
					</div>
				</div>
			</div>

			<ProductTable />
		</main>
	);
}
