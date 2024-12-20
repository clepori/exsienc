import { ContainerFree } from "@/ui/components/container/container.free";
import { ContainerIn } from "@/ui/components/container/container.in";
import { Box } from "@/ui/design/box/box";
import { Button } from "@/ui/design/button/button";
import { LogoX } from "@/ui/design/logo/logo-x";
import { Typography } from "@/ui/design/typography/typography";

export const ServicesHeroTopView = () => {
	return (
		<>
			<ContainerFree className="relative">
				<ContainerFree className="absolute -z-50">
					<LogoX height="200px" className="ml-[40vw] mt-16" />
				</ContainerFree>
				<ContainerIn className="z-0">
					<div className="flex items-center gap-5 pt-20 w-full h-full mb-6">
						<div className="flex flex-col items-center justify-center gap-3">
							<Typography
								variant="c1"
								component="h3"
								weigth="semibold"
								theme="gray"
								className="text-center"
							>
								Nos solutions pour optimiser votre
								gestion
							</Typography>
							<Typography
								variant="c1"
								component="div"
								theme="gray"
								className="max-w-2xl text-center"
							>
								Découvrez comment nos services peuvent
								vous aider à rationaliser vos processus
								et améliorer la gestion de votre
								entreprise
							</Typography>
						</div>
					</div>
					<div className="flex flex-col h-full gap-5">
						<Box className="shadow-xl hover:bg-secondary-100 hover:shadow-2xl">
							<Typography
								variant="c1"
								component="h3"
								weigth="semibold"
								theme="primary"
								className="uppercase mb-2"
							>
								Intégration
							</Typography>
							<Typography
								variant="c1"
								component="h2"
								weigth="bold"
								theme="gray"
								className="mb-3"
							>
								Sage 100, la réponse à toutes vos
								questions
							</Typography>
							<div className="border-b-[10px] border-turquoise w-[20vw] mb-3"></div>
							<Typography
								variant="c1"
								component="div"
								weigth="regular"
								theme="gray"
								className="space-y-2 text-justify"
							>
								Nous vous accompagnons dans
								l’intégration de Sage 100, assurant une
								mise en place rapide et sans accrocs
								pour des solutions sur mesure adaptées à
								vos besoins spécifiques.
							</Typography>
						</Box>
						<Box className="shadow-xl hover:bg-secondary-100 hover:shadow-2xl">
							<Typography
								variant="c1"
								component="h3"
								weigth="semibold"
								theme="primary"
								className="uppercase mb-2"
							>
								Maintenance
							</Typography>
							<Typography
								variant="c1"
								component="h2"
								weigth="bold"
								theme="gray"
								className="mb-3"
							>
								Ne soyez jamais seul quel que soit votre
								besoin
							</Typography>
							<div className="border-b-[10px] border-turquoise w-[20vw] mb-3"></div>
							<Typography
								variant="c1"
								component="div"
								weigth="regular"
								theme="gray"
								className="space-y-2 text-justify"
							>
								Nos experts vous fournissent une
								assistance technique réactive, assurant
								une résolution rapide des problèmes et
								la continuité de vos activités.
							</Typography>
						</Box>
						<Box className="shadow-xl hover:bg-secondary-100 hover:shadow-2xl">
							<Typography
								variant="c1"
								component="h3"
								weigth="semibold"
								theme="primary"
								className="uppercase mb-2"
							>
								Formation
							</Typography>
							<Typography
								variant="c1"
								component="h2"
								weigth="bold"
								theme="gray"
								className="mb-3"
							>
								Maitrisez vos outils sur le bout des
								doigts
							</Typography>
							<div className="border-b-[10px] border-turquoise w-[20vw] mb-3"></div>
							<Typography
								variant="c1"
								component="div"
								weigth="regular"
								theme="gray"
								className="space-y-2 text-justify"
							>
								Nous formons vos équipes pour une
								maîtrise complète des fonctionnalités de
								Sage 100 et vous accompagnons pour tirer
								le meilleur parti de vos outils de
								gestion.
							</Typography>
						</Box>
						<div className="flex flex-col items-center justify-center gap-5 my-3">
							<Typography
								variant="c1"
								component="div"
								className="uppercase"
							>
								Mais pas que !
							</Typography>
							<Button variant="primary" size="xsmall">
								Découvrez nos services
							</Button>
						</div>
					</div>
				</ContainerIn>
			</ContainerFree>
		</>
	);
};
