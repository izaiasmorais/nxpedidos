"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { Next13ProgressBar } from "next13-progressbar";

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</ThemeProvider>

			<Next13ProgressBar
				height="4px"
				color="#000"
				options={{ showSpinner: true }}
				showOnShallow
			/>
		</>
	);
}
