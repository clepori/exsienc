import { ContainerFree } from "@/ui/components/container/container.free";
import { ContainerFull } from "@/ui/components/container/container.full";
import { ContainerIn } from "@/ui/components/container/container.in";
import { Typography } from "@/ui/design/typography/typography";

export const HeroTopView5xl = () => {
	return (
		<>
			<ContainerFull className="relative hidden 5xl:block 6xl:hidden">
				<ContainerFree className="absolute -z-50">
					<div className="bg-[url('/assets/images/home-page/01-hero.png')] bg-contain bg-no-repeat w-[100vw] h-[100vh]"></div>
				</ContainerFree>

				<ContainerIn className="absolute mt-[10vh] h-[88vh] flex items-center justify-end">
					<div className="space-y-8 max-w-[840px]">
						<Typography
							variant="h5"
							component="h3"
							weigth="semibold"
							theme="primary"
							className="uppercase"
						>
							Prenez le contrôle de votre activité
						</Typography>
						<Typography
							variant="h1"
							component="h2"
							weigth="bold"
							theme="gray"
							className=""
						>
							Optimisez les performances de votre
							entreprise et maîtrisez votre croissance
						</Typography>
						<hr className="bg-cyan w-[20vw] h-[20px]" />
						<Typography
							variant="b1"
							component="div"
							weigth="regular"
							theme="gray"
							className="space-y-4 text-justify"
						>
							<p>
								Grâce à notre expertise dans
								l’intégration des solutions Sage 100,
								nous vous aidons à rationaliser vos
								processus, améliorer votre efficacité et
								atteindre vos objectifs.
							</p>
							<p>
								Offrez à votre PME le contrôle dont elle
								a besoin pour réussir.
							</p>
						</Typography>
					</div>
				</ContainerIn>
			</ContainerFull>
		</>
	);
};
