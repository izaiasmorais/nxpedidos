"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "./button";

export function ThemeSwitcher() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="w-10 h-10 p-0" variant="outline">
					<Sun size={20} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem
					className="flex items-center gap-2 cursor-pointer"
					onClick={() => setTheme("light")}
				>
					<Sun size={20} />
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					className="flex items-center gap-2 cursor-pointer"
					onClick={() => setTheme("dark")}
				>
					<Moon size={20} />
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					className="flex items-center gap-2 cursor-pointer"
					onClick={() => setTheme("system")}
				>
					<Monitor size={20} />
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
