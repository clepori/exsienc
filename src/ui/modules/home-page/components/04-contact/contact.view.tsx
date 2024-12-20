import { ContainerFree } from "@/ui/components/container/container.free";
import { ContainerFull } from "@/ui/components/container/container.full";
import { Typography } from "@/ui/design/typography/typography";

export const ContactView = () => {
	return (
		<div>
			{/* DESKTOP */}
			<ContainerFull className="relative mt-20 ">
				<ContainerFree className="absolute -z-50">
					{/* <LogoX size={400} className="-ml-[10vw] mt-20" /> */}
					<div className="bg-[url('/assets/images/home-page/04-contact.png')] bg-cover bg-top bg-no-repeat h-screen w-full"></div>
				</ContainerFree>
				<ContainerFree className="z-0 flex flex-col justify-center items-center pt-[75px]">
					<div className="grid grid-cols-12 gap-16 w-full py-8 px-10 h-3/4">
						<div className="col-start-2 col-span-10 p-6 bg-gray-50/50 border border-gray-300 rounded shadow-xl hover:shadow-2xl space-y-2 overflow-hidden">
							<div className="flex flex-col items-center justify-center px-16 py-5 gap-2">
								<div className="flex flex-col items-center justify-center">
									<Typography
										variant="h5"
										component="h3"
										weigth="semibold"
										theme="gray"
										className="text-center mb-3"
									>
										Transformez la gestion de
										votre entreprise dès
										aujourd'hui !
									</Typography>
									<hr className="bg-gray-300 w-[30vw] h-[8px] mb-10" />
								</div>
								<Typography
									variant="h5"
									component="div"
									weigth="regular"
									theme="gray"
									className="space-y-5 text-center "
								>
									<p>
										Ne laissez plus vos processus
										ralentir votre croissance.
									</p>
									<p>
										Avec Sage 100 et
										l’accompagnement expert
										d’EX’SIE, découvrez comment
										automatiser et optimiser la
										gestion de votre entreprise
										pour atteindre vos objectifs
										avec efficacité.
									</p>
									<p>
										Que vous souhaitiez améliorer
										votre gestion financière,
										simplifier vos flux
										logistiques ou optimiser la
										gestion de vos ressources
										humaines, nous sommes là pour
										vous accompagner.
									</p>
								</Typography>
								<Typography
									variant="h5"
									component="h3"
									weigth="bold"
									theme="primary"
									className="uppercase my-8"
								>
									Contactez nous pour une
									consultation personnalisée
								</Typography>
								<Typography
									variant="h5"
									component="div"
									weigth="regular"
									theme="gray"
									className="space-y-5 text-center"
								>
									<p>
										Découvrez comment notre
										expertise peut transformer vos
										processus et maximiser votre
										productivité.
									</p>
									<p>
										Prenez le contrôle de votre
										avenir dès maintenant.
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
