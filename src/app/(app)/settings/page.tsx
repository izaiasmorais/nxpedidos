import { SettingsTabs } from "@/components/settings/settings-tab";

export default function Settings() {
	return (
		<main className="flex flex-col gap-4 p-4">
			<h1 className="text-2xl font-semibold">Configurações</h1>

			<SettingsTabs />
		</main>
	);
}
