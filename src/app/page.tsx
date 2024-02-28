import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreateUserModal } from "@/components/user/create-user-modal";
import { UserTable } from "@/components/user/user-table";

export default function Home() {
	return (
		<main className="h-screen w-full bg-slate-100 flex items-center justify-center">
			<Card className="h-[700px]">
				<CardHeader>
					<div className="flex items-center justify-between w-full">
						<CardTitle>Usuários</CardTitle>
						<CreateUserModal />
					</div>
				</CardHeader>

				<CardContent>
					<UserTable />
				</CardContent>
			</Card>
		</main>
	);
}
