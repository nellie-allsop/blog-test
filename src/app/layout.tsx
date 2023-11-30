import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "../../src/components/Header";
import Footer from "@/components/Footer";

const work = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "🧶croch-og",
	description: "Your one stop blog for all things crochet-y",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={work.className}>
				<Header />
				<div className="h-screen">{children}</div>

				<Footer />
			</body>
		</html>
	);
}
