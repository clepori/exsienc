import { CarouselContent } from "@/ui/design/carousel/carousel";

export const CarouselWhyExsie = () => {
	return (
		<>
			<CarouselContent slides={WhyExsieCarousel} />
		</>
	);
};

export const WhyExsieCarousel = [
	{
		title: "Audit et analyse des besoins",
		paragraphs: [
			"Notre expertise commence par une compréhension approfondie de votre entreprise.",
			"Nous réalisons un audit complet de vos processus métier, vos objectifs, et vos défis pour vous proposer une solution Sage 100 parfaitement adaptée.",
			"Que ce soit pour optimiser votre comptabilité, automatiser vos ventes, ou améliorer votre gestion RH, nous identifions les modules et configurations qui répondent le mieux à vos attentes",
		],
	},
	{
		title: "Paramétrage personnalisé des modules",
		paragraphs: [
			"Sage 100 est une solution flexible, mais sa véritable puissance réside dans sa capacité à être personnalisée.",
			"Nos experts configurent les modules pour qu’ils s’intègrent parfaitement à vos processus existants. Nous adaptons les fonctionnalités, les rapports, et les workflows pour maximiser la productivité et réduire les tâches répétitives.",
		],
	},
	{
		title: "Formation de vos équipes",
		paragraphs: [
			"Un logiciel performant ne peut délivrer tout son potentiel que si vos équipes sont à l’aise pour l’utiliser. Nous organisons des sessions de formation adaptées aux besoins de vos collaborateurs.",
			"Nos formateurs vous accompagnent dans la prise en main des modules Sage 100, en mettant l’accent sur les fonctionnalités qui impactent directement votre activité.",
			"Cette approche garantit une adoption rapide et une transition fluide.",
		],
	},
	{
		title: "Support technique et assistance continue",
		paragraphs: [
			"Notre engagement ne s’arrête pas à la mise en œuvre. Nous proposons un service d’assistance dédié pour répondre à vos questions et résoudre rapidement tout problème technique.",
			"En outre, nous assurons le suivi des mises à jour logicielles pour que votre solution reste conforme aux réglementations et profite des dernières améliorations.",
			"Grâce à notre support, vous pouvez vous concentrer sur votre activité en toute sérénité.",
		],
	},
];
