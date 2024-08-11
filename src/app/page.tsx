import Image from "next/image"
import HeroTwo from "./components/HeroTwo"
import HeroOne from "./components/HeroOne"
import GridBackground from "./components/GridBackground"
import {
	CatchMeAt,
	Codepen,
	Instagram,
	LinkedIn,
	MouseScroll,
} from "@/svgs/svgs"
import Link from "next/link"
import Projects from "./components/Projects"
import { revamped } from "@/utils/fonts"

function Links({
	children,
	href,
	bg,
	grow,
}: Readonly<{
	children: React.ReactNode
	href: string
	bg: string
	grow?: boolean
}>) {
	return (
		<Link
			href={href}
			className={`font-bold text-[hsl(0,0%,65%)] p-2.5 rounded-lg text-center ${
				grow && "grow"
			}`}
			style={{ backgroundColor: bg }}
		>
			{children}
		</Link>
	)
}

function NavLinks({ name }: { name: string }) {
	return (
		<Link href={"#"} className="text-white">
			{name}
		</Link>
	)
}

const navLinksArray = ["Connect", "About me", "Projects", "Achievements"]

export default function Home() {
	return (
		<>
			<GridBackground />
			<div className="gridBgFade | h-screen sticky top-0 bg-[radial-gradient(ellipse_at_50%_0,red,var(--background)_75%)]s z-10"></div>
			<div className="wrapper | z-20 max-w-screen-[1440px] relative">
				<div className="sideNav | z-50 grid grid-cols-[auto_20px_auto] fixed left-1/2 -translate-x-1/2 bottom-4 xl:left-auto xl:translate-x-0 xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2">
					<div></div>
					<div></div>
					<nav className="grid gap-8 grid-flow-col xl:grid-flow-row">
						{navLinksArray.map((item, idx) => (
							<NavLinks key={idx} name={item} />
						))}
					</nav>
				</div>

				<Projects />

				<section className="heroSection | min-h-screen grid grid-rows-[auto_repeat(2,1fr)] justify-items-center">
					<h1
						className={`${revamped.variable} font-revamped py-6 w-fit mx-auto text-center text-[clamp(3.5rem,8.8vw_+_1px,8rem)] text-transparent bg-clip-text bg-gradient-to-b from-[hsl(0,0%,100%,0.5)] to-[hsl(0,0%,0%,0.5)] [-webkit-text-stroke:1px_hsl(0,0%,100%,0.12)] relative | before:absolute before:bg-[hsl(259,100%,75%,0.2)] before:inset-[0_10%] before:-translate-y-0 before:-z-10 before:rounded-full before:blur-[90px]`}
					>
						milind pithadia
					</h1>

					<div className="py-12 sm:p-12">
						<div className="flex items-center gap-2">
							<CatchMeAt />
							<p className="text-white text-xl font-bold">
								catch me at
							</p>
						</div>
						<div className="mt-4 flex items-center gap-3">
							<Links href="#" bg="hsl(0,0%,100%,0.1)">
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
							>
								<span className="text-black text-lg">
									resume
								</span>
							</Links>
							<Links
								href="https://www.instagram.com/milind_537/"
								bg="hsl(0,0%,100%,0.1)"
							>
								<Instagram />
							</Links>
							<Links
								href="https://codepen.io/milind537"
								bg="hsl(0,0%,100%,0.1)"
							>
								<Codepen />
							</Links>
							<Links
								href="https://www.linkedin.com/in/milindpithadia/"
								bg="hsl(0,0%,100%,0.1)"
							>
								<LinkedIn />
							</Links>
						</div>
					</div>

					<div className="flex gap-3">
						<p className="text-white text-xl">scroll</p>
						<MouseScroll className="animate-[scrollIconBounce_3s_infinite]" />
					</div>
				</section>
			</div>
		</>
	)
}
