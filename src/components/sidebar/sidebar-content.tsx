import { ReceiptText, Settings, ShoppingCart, Store } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

export function SidebarContent() {
	return (
		<>
			<div className="flex flex-col gap-1">
				<SidebarItem
					title="Produtos"
					href="/"
					icon={<ShoppingCart size={20} />}
				/>

				<SidebarItem
					title="Pedidos"
					href="/orders"
					icon={<ReceiptText size={20} />}
				/>

				<SidebarItem
					title="Restaurante"
					href="/store"
					icon={<Store size={20} />}
				/>
				<SidebarItem
					title="Configurações"
					href="/settings"
					icon={<Settings size={20} />}
				/>
			</div>
		</>
	);
}
