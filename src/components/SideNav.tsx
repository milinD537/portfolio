"use client"
import { ConnectIcon, GalleryIcon, ProjectsIcon } from "@/svgs/svgs"
import Link from "next/link"
import React, { ReactElement } from "react"
import SliderTogglerBtn from "./SliderTogglerButton"
import { usePathname } from "next/navigation"

function NavLinks({
	name,
	Icon,
	href,
	isActive,
}: {
	name: string
	Icon: React.ReactNode
	href: string
	isActive: boolean
}) {
	return (
		<div className={`flex gap-2 items-center flex-col xl:flex-row`}>
			<SliderTogglerBtn route={href}>
				<div
					className={`grid transition-[grid-template-columns] ${
						isActive ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
					}`}
				>
					<div
						className={`xl:overflow-hidden border-2 rounded-md p-1 ${
							isActive
								? "xl:p-1 border-[hsl(266,100%,64%)] bg-[hsl(266,100%,64%,0.1)] grayscale-0"
								: "xl:p-0 border-transparent grayscale"
						}`}
					>
						{Icon}
					</div>
				</div>
			</SliderTogglerBtn>
			<SliderTogglerBtn
				route={href}
				className={`text-white transition-all hidden xl:block ${
					isActive && "font-bold text-xl uppercase"
				}`}
			>
				{name}
			</SliderTogglerBtn>
		</div>
	)
}
const navLinksArray = [
	{
		name: "Connect",
		icon: <ConnectIcon />,
		href: "/",
	},
	{
		name: "Projects",
		icon: <ProjectsIcon />,
		href: "/projects",
	},
	{
		name: "Gallery",
		icon: <GalleryIcon />,
		href: "/gallery",
	},
]

export default function SideNav() {
	const path = usePathname()

	return (
		<div className="sideNav | z-50 grid xl:grid-cols-[auto_20px_auto] fixed left-1/2 -translate-x-1/2 bottom-4 xl:left-auto xl:translate-x-0 xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2 bg-[hsl(0,0%,5%)] px-8 py-2 rounded-full border border-[hsl(0,0%,18%)] xl:p-0 xl:border-none xl:rounded-none xl:bg-transparent">
			<div className="hidden xl:block"></div>
			<div className="hidden xl:block"></div>
			<nav className="grid items-center gap-4 grid-flow-col xl:grid-flow-row">
				{navLinksArray.map((item, idx) => (
					<NavLinks
						key={idx}
						name={item.name}
						href={item.href}
						Icon={item.icon}
						isActive={path === item.href}
					/>
				))}
			</nav>
		</div>
	)
}
