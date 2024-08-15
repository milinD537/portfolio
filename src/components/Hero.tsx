import {
	CatchMeAt,
	Codepen,
	Instagram,
	LinkedIn,
	MouseScroll,
} from "@/svgs/svgs"
import { revamped } from "@/utils/fonts"
import Link from "next/link"
import React from "react"

function Links({
	children,
	href,
	bg,
	grow,
	blank,
}: Readonly<{
	children: React.ReactNode
	href: string
	bg: string
	grow?: boolean
	blank?: boolean
}>) {
	return (
		<Link
			href={href}
			className={`font-bold text-[hsl(0,0%,65%)] p-2.5 rounded-lg text-center ${
				grow && "grow"
			}`}
			style={{ background: bg }}
			target={blank ? "_blank" : "_self"}
		>
			{children}
		</Link>
	)
}

export default function Hero() {
	return (
		<section className="heroSection | min-h-screen grid grid-rows-[auto_repeat(2,1fr)] justify-items-center">
			<h1
				className={`${revamped.variable} flex flex-col sm:gap-12 sm:flex-row justify-center font-revamped py-6 w-fit mx-auto text-center text-[clamp(3.5rem,8.8vw_+_1px,8rem)] text-transparent bg-clip-text bg-gradient-to-b from-[hsl(0,0%,100%,0.14)] to-[hsl(0,0%,0%,0.14)] [-webkit-text-stroke:1px_hsl(0,0%,100%,0.12)] relative | before:absolute before:bg-[hsl(259,100%,75%,0.2)] before:inset-[0_10%] before:-translate-y-0 before:-z-10 before:rounded-full before:blur-[90px]`}
			>
				<span>
					<span>m</span>
					<span>i</span>
					<span>l</span>
					<span>i</span>
					<span>n</span>
					<span>d</span>
				</span>
				<span>
					<span>p</span>
					<span>i</span>
					<span>t</span>
					<span>h</span>
					<span>a</span>
					<span>d</span>
					<span>i</span>
					<span>a</span>
				</span>
			</h1>

			<div className="py-12 sm:p-12">
				<div className="flex items-center gap-2">
					<CatchMeAt />
					<p className="text-white text-xl font-bold">catch me at</p>
				</div>
				<div className="mt-4 flex items-center gap-3">
					<Links
						href="mailto:milindpithadia22@gmail.com"
						bg="hsl(0,0%,100%,0.1)"
					>
						milindpithadia22@gmail.com
					</Links>
					<Links href="#" bg="hsl(0,0%,100%,0.1)">
						<span>.</span>
						<span>.</span>
						<span>.</span>
					</Links>
				</div>
				<div className="mt-4 flex items-center gap-2">
					<Links
						href="https://drive.google.com/file/d/13fTyVKtEX3o-hC24wKJnxQJT1fXjh0Wk/view?usp=sharing"
						bg="white"
						grow
						blank
					>
						<span className="text-black text-lg">resume</span>
					</Links>
					<Links
						href="https://www.linkedin.com/in/milindpithadia/"
						bg="linear-gradient(hsl(0 0% 100% / 18%), hsl(0 0% 100% / 9%))"
						blank
					>
						<LinkedIn />
					</Links>
					<Links
						href="https://codepen.io/milind537"
						bg="linear-gradient(hsl(0 0% 100% / 18%), hsl(0 0% 100% / 9%))"
						blank
					>
						<Codepen />
					</Links>
					<Links
						href="https://www.instagram.com/milind_537/"
						bg="linear-gradient(hsl(0 0% 100% / 18%), hsl(0 0% 100% / 9%))"
						blank
					>
						<Instagram />
					</Links>
				</div>
			</div>

			<div className="flex gap-3">
				{/* <p className="text-white text-xl"></p> */}
				<MouseScroll className="animate-[scrollIconBounce_3s_infinite]" />
			</div>
		</section>
	)
}
