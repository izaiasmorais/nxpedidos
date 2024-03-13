"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTab } from "./data-tab";

export function SettingsTabs() {
	return (
		<Tabs defaultValue="data" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="data">Meus Dados</TabsTrigger>
				<TabsTrigger value="addresses">Endereços</TabsTrigger>
			</TabsList>

			<TabsContent value="data">
				<DataTab />
			</TabsContent>

			<TabsContent value="addresses"></TabsContent>
		</Tabs>
	);
}
