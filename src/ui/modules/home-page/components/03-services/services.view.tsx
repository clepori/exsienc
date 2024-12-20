import { ContainerFree } from "@/ui/components/container/container.free";
import { ContainerFull } from "@/ui/components/container/container.full";
import { Button } from "@/ui/design/button/button";
import { LogoX } from "@/ui/design/logo/logo-x";
import { Typography } from "@/ui/design/typography/typography";
import Link from "next/link";

export const ServicesView = () => {
	return (
		<div>
			<ContainerFull className="relative">
				<ContainerFree className="absolute -z-50">
					<LogoX height="200px" className="-ml-[10vw] mt-20" />
				</ContainerFree>
				<ContainerFree className="z-0 flex flex-col justify-center items-center pt-12">
					<div className="flex flex-col items-center justify-center gap-3">
						<Typography
							variant="h5"
							component="h3"
							weigth="semibold"
							theme="gray"
							className=""
						>
							Nos solutions pour optimiser votre gestion
						</Typography>
						<Typography
							variant="b5"
							component="div"
							theme="gray"
							className="mb-2 max-w-xl text-center"
						>
							Découvrez comment nos services peuvent vous
							aider à rationaliser vos processus et
							améliorer la gestion de votre entreprise
						</Typography>
					</div>
					<div className="grid grid-cols-11 gap-16 w-full py-10 px-10 h-3/4">
						<div className="col-start-2 col-span-3 p-5 bg-gray-50 border border-gray-300 rounded shadow-xl hover:shadow-2xl space-y-2 overflow-hidden -mt-5">
							<div className="h-40 bg-[url('/assets/images/home-page/03.1-integration.png')] bg-contain bg-no-repeat mb-5 -ml-8 -mt-8"></div>
							<Typography
								variant="b5"
								component="h3"
								weigth="bold"
								theme="primary"
								className="uppercase"
							>
								Intégration
							</Typography>
							<Typography
								variant="b5"
								component="h3"
								weigth="bold"
								theme="gray"
								className=""
							>
								Sage 100, la réponse à toutes vos
								questions
							</Typography>
							<div className="border-b-[15px] border-cyan w-[100px]"></div>
							<Typography
								variant="b5"
								component="div"
								weigth="regular"
								theme="gray"
								className="space-y-2"
							>
								Nous vous accompagnons dans
								l’intégration de Sage 100, assurant une
								mise en place rapide et sans accrocs
								pour des solutions sur mesure adaptées à
								vos besoins spécifiques.
							</Typography>
						</div>
						<div className="col-start-5 col-span-3 p-5 bg-gray-50 border border-gray-300 rounded shadow-xl hover:shadow-2xl space-y-2 overflow-hidden -mt-5">
							<div className="h-40 bg-[url('/assets/images/home-page/03.2-maintenance.png')] bg-contain bg-no-repeat mb-5 -ml-8 -mt-8"></div>
							<Typography
								variant="b5"
								component="h3"
								weigth="bold"
								theme="primary"
								className="uppercase"
							>
								Maintenance
							</Typography>
							<Typography
								variant="b5"
								component="h3"
								weigth="bold"
								theme="gray"
								className=""
							>
								Ne soyez jamais seul quel que soit votre
								besoin
							</Typography>
							<div className="border-b-[15px] border-cyan w-[100px]"></div>
							<Typography
								variant="b5"
								component="div"
								weigth="regular"
								theme="gray"
								className="space-y-2"
							>
								Nos experts vous fournissent une
								assistance technique réactive, assurant
								une résolution rapide des problèmes et
								la continuité de vos activités.
							</Typography>
						</div>
						<div className="col-start-8 col-span-3 p-5 bg-gray-50 border border-gray-300 rounded shadow-xl hover:shadow-2xl space-y-2 overflow-hidden -mt-5">
							<div className="h-40 bg-[url('/assets/images/home-page/03.3-formation.png')] bg-contain bg-no-repeat mb-5 -ml-8 -mt-8"></div>
							<Typography
								variant="b5"
								component="h3"
								weigth="bold"
								theme="primary"
								className="uppercase"
							>
								Formation
							</Typography>
							<Typography
								variant="b5"
								component="h3"
								weigth="bold"
								theme="gray"
								className=""
							>
								Maitrisez vos outils sur le bout des
								doigts
							</Typography>
							<div className="border-b-[15px] border-cyan w-[100px]"></div>
							<Typography
								variant="b5"
								component="div"
								weigth="regular"
								theme="gray"
								className="space-y-2"
							>
								Nous formons vos équipes pour une
								maîtrise complète des fonctionnalités de
								Sage 100 et vous accompagnons pour tirer
								le meilleur parti de vos outils de
								gestion.
							</Typography>
						</div>
					</div>
					<div className="flex items-center justify-center gap-8">
						<Typography
							variant="b5"
							component="div"
							className="uppercase"
						>
							Mais pas que !
						</Typography>
						<Button variant="primary" size="large">
							<Link href="/nos-services">
								Découvrez nos services
							</Link>
						</Button>
					</div>
				</ContainerFree>
			</ContainerFull>
		</div>
	);
};
