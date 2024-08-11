import Link from "next/link"
import React from "react"

export default function HeroOne() {
	const accentColor = "hsl(243,75%,59%)"
	return (
		<div className="heroOne bgGridWrapperOne | grid items-center h-screen sticky top-0">
			<div className="bg-white border-b-4 border-r-4 border-t-4 border-black w-fit px-3 md:px-8 py-16 [clip-path:polygon(0%_0%,calc(100%_-_2.5rem)_0%,100%_2.5rem,100%_100%,0%_100%)]">
				<h2 className="font-bold text-6xl">
					Welcome to the{" "}
					<span className={`text-[hsl(243,75%,59%)]`}>portfolio</span>
				</h2>
				<Link
					href={"https://github.com/milinD537"}
					className="inline-block"
				>
					<p className="mt-2 flex flex-row-reverse gap-2 items-center p-1 w-fit">
						<span className="linkIcon | w-4 h-4 rounded-[2px]"></span>
						<span className="linkUnderline | inline-block relative overflow-hidden | before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-black before:-translate-x-full before:transition-transform">
							GitHub
						</span>
					</p>
				</Link>
				<p className="">yap yap yap</p>
				<div className="mt-4 flex gap-4 items-center">
					<Link href={"https://codepen.io/milind537"}>
						<p
							className={`group bg-[hsl(243,75%,59%)] text-white p-3 relative | before:absolute before:inset-0 before:-z-10 before:bg-black before:translate-x-1 before:translate-y-1 before:group-hover:translate-x-0 before:group-hover:translate-y-0`}
						>
							Checkout CodePen
						</p>
					</Link>
					<Link
						href={
							"https://drive.google.com/file/d/13fTyVKtEX3o-hC24wKJnxQJT1fXjh0Wk/view?usp=sharing"
						}
					>
						<p className="font-semibold p-3 hover:bg-gray-200">
							View Resume
						</p>
					</Link>
				</div>
			</div>
		</div>
	)
}
