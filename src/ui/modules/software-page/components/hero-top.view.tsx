import { ContainerFree } from "@/ui/components/container/container.free";
import { ContainerFull } from "@/ui/components/container/container.full";
import { LogoSage } from "@/ui/design/logo/logo-sage";
import { Typography } from "@/ui/design/typography/typography";

export const SoftwareHeroTopView = () => {
	return (
		<div>
			{/* DESKTOP */}
			<ContainerFull className="relative">
				<ContainerFree className="absolute -z-40 mt-32 -ml-10">
					<LogoSage
						size={600}
						className="stroke-[0.5px] stroke-gray-200 opacity-70"
					/>
				</ContainerFree>
				<ContainerFree className="absolute -z-50">
					<div className="bg-[url('/assets/images/software/01-hero.png')] bg-contain bg-no-repeat h-[100vh] w-full"></div>
				</ContainerFree>
				<ContainerFree className="z-0 flex justify-center items-center pt-10">
					<div className="grid grid-cols-12 gap-10 w-full h-screen">
						<div className="col-start-7 col-span-5 flex items-center">
							<div className=" flex flex-col gap-5">
								<Typography
									variant="c1"
									component="h3"
									weigth="semibold"
									theme="primary"
									className="uppercase"
								>
									Un nom qui résonne à travers le
									monde
								</Typography>
								<Typography
									variant="h5"
									component="h1"
									weigth="bold"
									theme="gray"
									className="max-w-lg"
								>
									Depuis plus de 40 ans, Sage
									accompagne les entreprises dans
									leur transformation numérique grâce
									à des solutions de gestion
									performantes et adaptées.
								</Typography>
								<hr className="bg-cyan w-[10vw] h-[15px]" />
								<Typography
									variant="c1"
									component="div"
									weigth="regular"
									theme="gray"
									className="space-y-2 text-justify max-w-2xl"
								>
									<p>
										Créé en 1981 au Royaume-Uni,
										Sage est aujourd’hui l’un des
										principaux éditeurs de
										logiciels ERP à l’échelle
										mondiale, présent dans plus de
										20 pays et servant des
										millions d’entreprises.
									</p>
									<p>
										Sage est reconnu pour sa
										capacité à répondre aux
										besoins des petites et
										moyennes entreprises (PME)
										grâce à des solutions comme
										Sage 100, alliant robustesse,
										modularité et conformité
										légale.
									</p>
									<p>
										Avec des investissements
										constants dans le
										développement de solutions
										on-premise et cloud, Sage
										reste à la pointe de
										l’innovation pour accompagner
										les entreprises face aux défis
										d’aujourd’hui.
									</p>
								</Typography>
							</div>
						</div>
					</div>
				</ContainerFree>
			</ContainerFull>
		</div>
	);
};
