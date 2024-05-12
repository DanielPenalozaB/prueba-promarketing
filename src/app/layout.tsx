import type { Metadata } from "next";
import { Poppins, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const robotoCondensed = Roboto_Condensed({
	subsets: ["latin"],
	weight: ["700"],
	variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
	title: "Prueba Promarketing",
	description: "Prueba de ingreso a Promarketing",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body
				className={`${poppins.className} ${robotoCondensed.variable} flex justify-center p-5`}
			>
				{children}
				<Toaster position="bottom-right" />
			</body>
		</html>
	);
}
