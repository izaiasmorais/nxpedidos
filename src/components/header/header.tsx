import { ThemeSwitcher } from "../ui/theme-switcher";
import { SearchInput } from "../global/search-input";
import { AlignJustify, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Menu } from "./menu";
import { AddressCard } from "./address-card";

export function Header() {
	return (
		<header className="flex w-full justify-between p-4 border-b">
			<Button variant="outline" className="block md:hidden">
				<AlignJustify size={20} />
			</Button>

			<SearchInput
				placeholder="Buscar..."
				className="hidden md:flex max-w-[350px]"
			/>

			<div className="flex gap-2">
				<AddressCard />
				<Button className="w-10 h-10 p-0" variant="outline">
					<ShoppingCart size={20} />
				</Button>
				<ThemeSwitcher />
				<Menu />
			</div>
		</header>
	);
}
