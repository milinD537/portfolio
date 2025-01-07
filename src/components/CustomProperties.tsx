"use client"

export default function CustomProperties() {
	return (
		<style jsx global>{`
			@property --imageHoverColorStop {
				syntax: "<percentage>";
				inherits: false;
				initial-value: 0%;
			}
		`}</style>
	)
}
