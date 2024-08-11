import Link from "next/link"
import React from "react"

type Project = {
	name: string
	description: string
	img: string[]
	link: {
		github: string
		deployed: string
	}
}
const projects: Project[] = [
	{
		name: "WeatherCase",
		description:
			"Utilizes OpenWeather API for current and 5-day forecast weather data. Weather map layers integrated with React Leaflet, 24-hour forecast graph using Recharts. Automatic day/night theme switching for optimal user experience.",
		img: ["/images/weather-case-day.png", "/images/weather-case-night.png"],
		link: {
			github: "https://github.com/milinD537/WeatherCase",
			deployed: "https://weather-case-nu.vercel.app/",
		},
	},
	{
		name: "ThinQ",
		description:
			"A comprehensive solution for virtual classrooms, providing a wide range of features to enhance the online learning experience. Contributed to the project by building multiple pages delivering consistent experience throughout the user flow. Created sleek and consistent User Interface elements targeting accessibility while maintaining a user-base friendly design language",
		img: ["/images/thinq-2.png", "/images/thinq-1.png"],
		link: {
			github: "https://github.com/milinD537/ThinQ",
			deployed: "https://maam-coders.vercel.app/",
		},
	},
	{
		name: "GameCase",
		description: "Uses Rawg API for game data and display of cards.",
		img: ["/images/game-case-2.png", "/images/game-case-1.png"],
		link: {
			github: "https://github.com/milinD537/GameCase",
			deployed: "https://gamecase-eta.vercel.app/",
		},
	},
]

function ProjectCard({
	title,
	image,
	description,
	link,
}: {
	title: string
	image: string[]
	description: string
	link: {
		github: string
		deployed: string
	}
}) {
	return (
		<div className="projectCard | grid p-6 gap-4 xl:grid-cols-[repeat(2,1fr)] border border-[hsl(0,0%,20%,0.35)] relative overflow-hidden | before:absolute before:-z-10 before:inset-0 before:rounded-full before:bg-[hsl(0,0%,100%,0.14)] before:blur-[90px] before:opacity-0 before:transition-opacity before:duration-300">
			<div className="image | grid *:[grid-area:1/-1] rounded-md overflow-hidden">
				{image.map((item, idx) => (
					<img
						key={idx}
						src={item}
						alt=""
						className={`${title}-img`}
					/>
				))}
			</div>
			<div className="grid grid-rows-[repeat(2,auto)]">
				<h2 className="title | p-1 text-4xl">{title}</h2>
				<div className="description | self-end text-lg font-light">
					{description}
				</div>
			</div>
			<div className="col-span-full flex *:flex-1 gap-4">
				<Link
					href={link.github}
					className="text-center text-lg p-2 rounded-lg bg-[hsl(0,0%,10%)] hover:bg-[hsl(0,0%,15%)] border border-[hsl(0,0%,20%)]"
				>
					GitHub
				</Link>
				<Link
					href={link.deployed}
					className="text-center text-lg p-2 rounded-lg bg-[hsl(0,0%,10%)] hover:bg-[hsl(0,0%,15%)] border border-[hsl(0,0%,20%)]"
				>
					Deployed
				</Link>
			</div>
		</div>
	)
}
export default function Projects() {
	return (
		<section className="projectsSection | text-[hsl(240,8%,85%)] pb-6">
			<div className="projectsWrapper | max-w-[1100px] mx-auto">
				<h1 className="text-[clamp(3.5rem,8.8vw_+_1px,7rem)] font-semibold px-6 py-2">
					Projects
				</h1>
				<div className="projectCardWrapper | mt-5 grid gap-20 px-1">
					{projects.map((item, idx) => (
						<ProjectCard
							key={idx}
							title={item.name}
							image={item.img}
							description={item.description}
							link={item.link}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
