import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<div className="bg-orange-400 text-white flex flex-col">
			<nav className="flex justify-around m-4 text-2xl">
			<Link href="/">
				<Image
					src="/logo.png"
					width={64}
					height={64}
					alt="crochog logo"
				/>
			</Link>
				<Link className="bg-pink-500 hover:bg-purple-500 font-bold rounded py-3 px-3" href="/">Home </Link>
				<Link className="bg-pink-500 hover:bg-purple-500 font-bold rounded py-3 px-3" href="/blog">Patterns</Link>
				<Link className="bg-pink-500 hover:bg-purple-500 font-bold rounded py-3 px-3" href="/gallery">Gallery</Link>
				<Link className="bg-pink-500 hover:bg-purple-500 font-bold rounded py-3 px-3" href="/about">About</Link>
			</nav>
		</div>
	);
}
