import {
	CreditCard,
	ReceiptText,
	Settings,
	ShoppingCart,
	Star,
	Store,
	TicketPercent,
} from "lucide-react";
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
					title="Restaurante"
					href="/store"
					icon={<Store size={20} />}
				/>

				<SidebarItem
					title="Pedidos"
					href="/orders"
					icon={<ReceiptText size={20} />}
				/>

				<SidebarItem
					title="Meus Cupons"
					href="/coupons"
					icon={<TicketPercent size={20} />}
				/>

				<SidebarItem
					title="Pagamento"
					href="/pagamento"
					icon={<CreditCard size={20} />}
				/>

				<SidebarItem
					title="Fidelidade"
					href="/fidelidade"
					icon={<Star size={20} />}
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
