import Providers from "./providers";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NXPedidos",
	description: "NXPedidos - O seu sistema de pedidos online",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<head>
				<link rel="icon" href="/nxpedidos.png" sizes="any" />
			</head>

			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
			<Toaster />
		</html>
	);
}
