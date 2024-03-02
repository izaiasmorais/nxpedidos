import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { CreateUserModal } from "@/components/users/user-create-modal";
import { UserTable } from "@/components/users/user-table";
import { UserTableFilters } from "@/components/users/user-table-filters";

export default function Home() {
	return (
		<main className="h-screen w-full flex items-center justify-center">
			<Card className="h-[700px]">
				<CardHeader>
					<div className="flex items-center justify-between w-full">
						<CardTitle>Usuários</CardTitle>
						<div className="flex items-center gap-2">
							<ThemeSwitcher />
							<CreateUserModal />
						</div>
					</div>
				</CardHeader>

				<CardContent>
					<UserTableFilters />
					<UserTable />
				</CardContent>
			</Card>
		</main>
	);
}
