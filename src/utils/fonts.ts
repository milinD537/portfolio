import localFont from "next/font/local"

export const trap = localFont({
	src: [
		{
			path: "../../public/fonts/trap/Trap-Medium.otf",
			weight: "500",
		},
		{
			path: "../../public/fonts/trap/Trap-SemiBold.otf",
			weight: "600",
		},
		{
			path: "../../public/fonts/trap/Trap-Bold.otf",
			weight: "700",
		},
		{
			path: "../../public/fonts/trap/Trap-Light.otf",
			weight: "300",
		},
	],
	variable: "--font-trap",
})

export const revamped = localFont({
	src: [
		{
			path: "../../public/fonts/revamped/Revamped.otf",
		},
	],
	variable: "--font-revamped",
})
