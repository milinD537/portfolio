import Image from "next/image"
import HeroTwo from "./components/HeroTwo"
import HeroOne from "./components/HeroOne"
import { useEffect, useRef } from "react"

export default function Home() {
	return (
		<div className="wrapper">
			<section className="hero-section">
				<div className="heroWrapper | h-[200vh] grid *:[grid-area:1/-1]">
					<HeroOne />
					<HeroTwo />
				</div>
			</section>
		</div>
	)
}
