import { ContainerFree } from "@/ui/components/container/container.free";
import { ContainerFull } from "@/ui/components/container/container.full";
import { ContainerIn } from "@/ui/components/container/container.in";
import { Button } from "@/ui/design/button/button";
import { Typography } from "@/ui/design/typography/typography";
import Link from "next/link";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export const Sage100View = () => {
	return (
		<>
			<ContainerFull className="relative">
				<ContainerFree className="absolute -z-50">
					<div className="bg-[url('/assets/images/home-page/02-sage100.png')] bg-cover laptop:bg-contain bg-no-repeat bg-right w-[100vw] h-[50vh] tablet:h-[65vh] laptop:h-[90vh]"></div>
				</ContainerFree>

				<ContainerIn className="absolute hidden tablet:hidden laptop:hidden screen:block screen-4k:hidden pt-8">
					<div className="flex flex-col items-center justify-center gap-4 mb-16">
						<Typography
							variant="h3"
							component="h3"
							weigth="semibold"
							theme="gray"
							className="text-center"
						>
							<p>
								Ensemble, construisons votre entreprise
								de demain
							</p>
						</Typography>
						<hr className="bg-gray-300 w-[30vw] h-[8px]" />
					</div>
					<div className="flex items-center justify-center gap-24">
						<div className="bg-[url('/assets/images/home-page/02-sage100.png')] bg-cover bg-right bg-no-repeat w-[50vw] h-[58vh] rounded-large shadow-xl hover:shadow-2xl"></div>
						<div className="flex flex-col w-[50vw] gap-6">
							<Typography
								variant="h5"
								component="h3"
								weigth="semibold"
								theme="primary"
								className="uppercase"
							>
								Entrez dans une nouvelle ère
							</Typography>
							<Typography
								variant="h3"
								component="h1"
								weigth="bold"
								theme="gray"
								className="max-w-[95%]"
							>
								On vous accompagne dans l’optimisation
								de votre gestion avec Sage 100
							</Typography>
							<hr className="bg-cyan w-[20vw] h-[15px]" />
							<Typography
								variant="b5"
								component="div"
								weigth="regular"
								theme="gray"
								className="space-y-2 text-justify max-w-[90%]"
							>
								<p>
									Vous êtes expert dans votre
									domaine, mais est-ce que votre
									gestion suit le même rythme ?
								</p>
								<p>
									Avec EX’SIE, transformez vos
									processus et améliorez la
									performance de votre entreprise
									avec une solution ERP adaptée.
								</p>
								<p>Changeons les choses ensemble !</p>
							</Typography>
							<div className="space-y-3 my-1">
								<div className="flex items-center gap-5">
									<RiVerifiedBadgeFill
										className="text-cyan "
										size={22}
									/>
									<Typography
										variant="b5"
										component="div"
										weigth="semibold"
										theme="gray"
										className=""
									>
										Solution sur mesure pour votre
										activité
									</Typography>
								</div>
								<div className="flex items-center gap-5">
									<RiVerifiedBadgeFill
										className="text-cyan "
										size={22}
									/>
									<Typography
										variant="b5"
										component="div"
										weigth="semibold"
										theme="gray"
										className=""
									>
										Intégration fluide et
										accompagnement personnalisé
									</Typography>
								</div>
								<div className="flex items-center gap-5">
									<RiVerifiedBadgeFill
										className="text-cyan "
										size={22}
									/>
									<Typography
										variant="b5"
										component="div"
										weigth="semibold"
										theme="gray"
										className=""
									>
										Un support réactif pour une
										gestion sans tracas
									</Typography>
								</div>
							</div>
							<div className="mt-3">
								<Button size="medium" variant="primary">
									<Link href="/nos-logiciels">
										Découvrez nos logiciels
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</ContainerIn>
			</ContainerFull>
		</>
	);
};
