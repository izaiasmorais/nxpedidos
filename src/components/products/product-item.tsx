import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image from "next/image";

export function ProductItem() {
	return (
		<Card className="p-2 shadow-none flex gap-2">
			<Image
				width={150}
				height={150}
				src="/pizza-calabresa.png"
				alt="Pizza de Calabresa"
				className="rounded-md"
			/>

			<div className="p-2 flex justify-between w-full">
				<div className="flex flex-col gap-1">
					<strong className="text-lg font-medium">Pizza de Calabresa</strong>
					<span className="text-xs text-muted-foreground">Grande</span>
					<span className="text-xs text-muted-foreground">350g</span>
				</div>

				<div className="flex flex-col justify-between items-end">
					<strong className="font-normal">R$ 49,99</strong>
					<Button
						className="bg-green-100 hover:bg-green-200 p-0 w-10 h-10 shadow-none
					dark:bg-green-900 text-green-600 dark:text-green-500"
					>
						<Plus className="h-4 w-4 " />
					</Button>
				</div>
			</div>
		</Card>
	);
}
