import { ContainerFree } from "@/ui/components/container/container.free";
import { ContainerFull } from "@/ui/components/container/container.full";
import { LogoX } from "@/ui/design/logo/logo-x";
import { Typography } from "@/ui/design/typography/typography";

export const SoftwareWhySageView = () => {
	return (
		<div>
			{/* DESKTOP */}
			<ContainerFull className="relative pt-12">
				<ContainerFree className="absolute -z-50">
					<LogoX height="200px" className="ml-[80vw]" />
					{/* <div className="bg-[url('/assets/images/home-page/01-hero.png')] bg-contain bg-no-repeat h-[100vh] w-full"></div> */}
				</ContainerFree>
				<ContainerFree className="z-0 flex flex-col justify-center items-center">
					<div className="flex flex-col items-center justify-center gap-3 ">
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
							variant="c1"
							component="div"
							theme="gray"
							className="mb-1 max-w-xl text-center"
						>
							Découvrez comment nos services peuvent vous
							aider à rationaliser vos processus et
							améliorer la gestion de votre entreprise
						</Typography>
					</div>
					<div className="grid grid-cols-12 gap-16 w-full px-32 pt-8 pb-28 h-[70vh]">
						<div className="col-span-8">
							<div className="grid grid-cols-12 gap-5 w-full h-full">
								<div className="col-span-7 p-5 bg-gray-50 border border-gray-300 rounded shadow-xl hover:shadow-2xl space-y-2 overflow-hidden flex flex-col">
									<div className="h-[130px] bg-[url('/assets/images/software/02.1-flexibilite.png')] bg-contain bg-no-repeat -ml-8 -mt-8"></div>
									<div className="flex flex-col">
										<Typography
											variant="c1"
											component="h3"
											weigth="bold"
											theme="primary"
											className="uppercase"
										>
											Modularité
										</Typography>
										<Typography
											variant="c1"
											component="div"
											weigth="regular"
											theme="gray"
											className="space-y-2 max-w-80"
										>
											Des modules
											personnalisables pour une
											gestion adaptée à votre
											entreprise.
										</Typography>
									</div>
								</div>
								<div className="col-span-5 p-5 bg-gray-50 border border-gray-300 rounded shadow-xl hover:shadow-2xl space-y-2 overflow-hidden flex flex-col">
									<div className="h-[130px] bg-[url('/assets/images/software/02.2-securite.png')] bg-contain bg-no-repeat -ml-8 -mt-8"></div>
									<div className="">
										<Typography
											variant="c1"
											component="h3"
											weigth="bold"
											theme="primary"
											className="uppercase"
										>
											Contrôle et sécurité
										</Typography>
										<Typography
											variant="c1"
											component="div"
											weigth="regular"
											theme="gray"
											className="space-y-2"
										>
											Une solution on-premise
											pour garder le contrôle
											total de vos données.
										</Typography>
									</div>
								</div>
								<div className="col-span-5 p-5 bg-gray-50 border border-gray-300 rounded shadow-xl hover:shadow-2xl space-y-2 overflow-hidden flex flex-col">
									<div className="h-[130px] bg-[url('/assets/images/software/02.3-conformite.png')] bg-contain bg-no-repeat -ml-8 -mt-8"></div>
									<div className="">
										<Typography
											variant="c1"
											component="h3"
											weigth="bold"
											theme="primary"
											className="uppercase"
										>
											Conformité légale
										</Typography>
										<Typography
											variant="c1"
											component="div"
											weigth="regular"
											theme="gray"
											className="space-y-2"
										>
											Mises à jour régulières
											pour répondre aux normes
											fiscales et sociales.
										</Typography>
									</div>
								</div>
								<div className="col-span-7 p-5 bg-gray-50 border border-gray-300 rounded shadow-xl hover:shadow-2xl space-y-2 overflow-hidden flex flex-col">
									<div className="h-[130px]  bg-[url('/assets/images/software/02.4-fiabilite.png')] bg-contain bg-no-repeat -ml-8 -mt-8"></div>
									<div className="">
										<Typography
											variant="c1"
											component="h3"
											weigth="bold"
											theme="primary"
											className="uppercase"
										>
											Fiabilité
										</Typography>
										<Typography
											variant="c1"
											component="div"
											weigth="regular"
											theme="gray"
											className="space-y-2 max-w-80"
										>
											Des performances
											éprouvées pour des
											processus fluides et
											efficaces.
										</Typography>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-4 flex items-center">
							<div className="flex flex-col gap-3">
								<Typography
									variant="c1"
									component="h3"
									weigth="semibold"
									theme="primary"
									className="uppercase"
								>
									Pourquoi choisir Sage 100 ?
								</Typography>
								<Typography
									variant="h4"
									component="h1"
									weigth="bold"
									theme="gray"
									className=""
								>
									Un logiciel conçu pour répondre à
									tous les besoins des PME
								</Typography>
								<hr className="bg-cyan w-[20vw] h-[10px]" />
								<Typography
									variant="c1"
									component="div"
									weigth="regular"
									theme="gray"
									className="space-y-2 text-justify max-w-2xl"
								>
									<p>
										Sage 100 est bien plus qu'un
										simple logiciel : c'est une
										plateforme complète qui
										accompagne les entreprises
										dans leur gestion quotidienne.
									</p>
									<p>
										Grâce à sa modularité, elle
										s'adapte aux spécificités de
										votre activité, tout en
										garantissant la conformité
										légale et la sécurité de vos
										données.
									</p>
									<p>
										Sage 100 vous offre une
										gestion centralisée et
										intuitive pour gagner en
										efficacité et en productivité.
										Sa robustesse éprouvée en fait
										un allié incontournable pour
										accompagner votre croissance.
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
