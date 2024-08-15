import React from "react"

export default function Gallery() {
	return (
		<section className="gallerySection | text-[hsl(240,8%,85%)] pb-32">
			<div className="galleryWrapper | max-w-[1100px] mx-auto">
				<div className="galleryBentoGrid | mt-5 grid gap-6 grid-rows-[repeat(8,auto)] xl:grid-cols-[repeat(2,1fr)] px-2">
					<h2 className="text-[clamp(3.5rem,8.8vw_+_1px,7rem)] text-transparent bg-clip-text bg-gradient-to-r from-transparent to-white font-semibold px-6 py-2">
						gallery
					</h2>
					<img
						src="/images/bento-one.png"
						alt=""
						className="w-full h-full object-cover object-center xl:[grid-area:one]"
					/>
					<img
						src="/images/bento-two.png"
						alt=""
						className="w-full h-full object-cover object-center xl:[grid-area:two]"
					/>
					<img
						src="/images/bento-three.png"
						alt=""
						className="w-full h-full object-cover object-center xl:[grid-area:three]"
					/>
					<img
						src="/images/bento-four.png"
						alt=""
						className="w-full h-full object-cover object-center xl:[grid-area:four]"
					/>
					<img
						src="/images/bento-five.png"
						alt=""
						className="w-full h-full object-cover object-center xl:[grid-area:five]"
					/>
					<img
						src="/images/bento-six.png"
						alt=""
						className="w-full h-full object-cover object-center xl:[grid-area:six]"
					/>
					<img
						src="/images/bento-seven.png"
						alt=""
						className="w-full h-full object-cover object-center xl:[grid-area:seven]"
					/>
					<h2 className="xl:[grid-area:bye] text-[clamp(3.5rem,8.8vw_+_1px,7rem)] text-transparent bg-clip-text bg-gradient-to-r from-white to-transparent font-semibold px-6 py-2">
						ok bye...
					</h2>
				</div>
			</div>
		</section>
	)
}
