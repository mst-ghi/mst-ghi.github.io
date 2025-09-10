export const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Mostafa Gholami",
	alternateName: "mst-ghi",
	email: "mostafagholamidev@gmail.com",
	telephone: "+989365895522",
	birthDate: "1993-04-02",
	jobTitle: "Backend and Frontend Developer",
	description:
		"I have 8+ years of experience in backend development with PHP and Node.js, using frameworks such as Laravel and NestJS, and frontend development with Vue, Nuxt, React, and Next.js. For the past three years, I have concentrated on building applications with NestJS and Next.js.",
	url: "https://mst-ghi.github.io/",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Esfahan",
		addressCountry: "Iran",
	},
	sameAs: [
		"https://t.me/mostafa_ghi",
		"https://github.com/mst-ghi",
		"https://www.linkedin.com/in/mst-ghi/"
	],
	knowsAbout: [
		"Node.js",
		"NestJS",
		"TypeORM",
		"Prisma",
		"JWT",
		"ACL",
		"Socket.IO",
		"React.js",
		"Next.js",
		"Turborepo",
		"React Query",
		"Redux",
		"Zustand",
		"Docker",
		"Swagger",
		"Redis",
		"Caching",
		"Queue",
		"Microservices",
		"Kafka",
		"Multitenant projects",
		"Socket programming",
	],
	hasOccupation: {
		"@type": "Occupation",
		name: "Software Developer",
		occupationalCategory: "Software Development",
	},
};

export const websiteJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "Mostafa Gholami Portfolio",
	url: "https://mst-ghi.github.io/",
	description:
		"Portfolio and projects of Mostafa Gholami, Backend & Frontend Developer with 8+ years of experience.",
	author: {
		"@type": "Person",
		name: "Mostafa Gholami",
	},
};
