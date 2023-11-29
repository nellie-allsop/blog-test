import Link from "next/link";

export default function Header() {
	return (
		<div className="bg-orange-400 text-white flex flex-col">
			<nav className="flex justify-around m-8 text-2xl">
				<Link className="bg-pink-500 hover:bg-pink-400 font-bold rounded py-3 px-3" href="/">Home </Link>
				<Link className="bg-pink-500 hover:bg-pink-400 font-bold rounded py-3 px-3" href="/patterns">Patterns</Link>
				<Link className="bg-pink-500 hover:bg-pink-400 font-bold rounded py-3 px-3" href="/gallery">Gallery</Link>
				<Link className="bg-pink-500 hover:bg-pink-400 font-bold rounded py-3 px-3" href="/about">About</Link>
			</nav>
		</div>
	);
}
