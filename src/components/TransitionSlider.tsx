"use client"
import { pathAtom, showSliderAtom } from "@/utils/state/jotai"
import { useAtom } from "jotai"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
// import { useEffect } from "react";

export default function TransitionSlider({
	children,
}: {
	children: React.ReactNode
}) {
	const [showSlider, setShowSlider] = useAtom(showSliderAtom)
	const path = usePathname()
	const [targetPath] = useAtom(pathAtom)
	useEffect(() => {
		// console.log({ showSlider })
		if (showSlider && path === targetPath) {
			setTimeout(() => {
				setShowSlider(false)
			}, 100)
		}
	}, [path])

	return (
		<div
			className={`${
				showSlider ? "opacity-0" : "opacity-100"
			} transition-opacity duration-200`}
		>
			{children}
		</div>
	)
}
