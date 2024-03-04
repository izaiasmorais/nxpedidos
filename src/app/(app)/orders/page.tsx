import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { CreateUserModal } from "@/components/users/user-create-modal";
import { UserTable } from "@/components/users/user-table";

export default function Orders() {
	return (
		<main className="flex flex-col gap-4">
			<h1 className="text-2xl font-semibold">Pedidos</h1>
			<UserTable />
		</main>
	);
}
