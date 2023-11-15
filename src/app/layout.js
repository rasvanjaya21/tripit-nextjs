import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Hello World",
	description: "sic linea codice creatus est",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="flex min-h-screen flex-col items-center justify-between p-24">
					{children}
				</main>
			</body>
		</html>
	);
}