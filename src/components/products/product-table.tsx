import { ProductItem } from "./product-item";

export function ProductTable() {
	return (
		<div className="flex flex-col p-4 gap-4">
			<h1 className="text-xl font-medium">Destaques</h1>

			<div className="grid grid-cols-3 gap-4">
				{Array.from({ length: 9 }).map((_, index) => {
					return <ProductItem key={index} />;
				})}
			</div>
		</div>
	);
}
