import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="flex justify-around p-4 bg-pink-500">
			<Link href="https://github.com/nellie-allsop">
				<Image
					src="/github-mark.png"
					width={36}
					height={36}
					alt="github logo"
				/>
			</Link>
		</footer>
	);
}
