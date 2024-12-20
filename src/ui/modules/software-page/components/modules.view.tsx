import { ContainerFree } from "@/ui/components/container/container.free";
import { ContainerFull } from "@/ui/components/container/container.full";
import { LogoX } from "@/ui/design/logo/logo-x";
import { Typography } from "@/ui/design/typography/typography";

export const SoftwareMobulesView = () => {
	return (
		<div>
			{/* DESKTOP */}
			<ContainerFull className="relative pt-12">
				<ContainerFree className="absolute -z-50">
					<LogoX height="200px" className="-ml-[10vw]" />
					{/* <div className="bg-[url('/assets/images/home-page/01-hero.png')] bg-contain bg-no-repeat h-[100vh] w-full"></div> */}
				</ContainerFree>
				<ContainerFree className="z-0 flex flex-col justify-center items-center">
					<div className="flex flex-col items-center justify-center gap-3 my-8">
						<Typography
							variant="h5"
							component="h3"
							weigth="semibold"
							theme="gray"
							className=""
						>
							Une gestion 360° pour votre entreprise
						</Typography>
						<hr className="bg-gray-300 w-[30vw] h-[5px] mb-1" />
					</div>
					<div className="grid grid-cols-12 gap-8 w-full px-32 pt-8 pb-28 h-[70vh]">
						<div className="col-span-3 bg-gray-50 border border-gray-300 rounded shadow-xl hover:shadow-2xl">
							<div className="bg-[url('/assets/images/software/03.1-compta.jpg')] bg-cover bg-bottom bg-no-repeat grayscale rounded-t w-full h-[25vh]"></div>
							<div className="flex flex-col gap-3 p-5 justify-center">
								<Typography
									variant="c1"
									component="h3"
									weigth="bold"
									theme="gray"
									className=""
								>
									Sage 100 Comptabilité
								</Typography>
								<div className="border-b-[15px] border-cyan w-[100px]"></div>
								<Typography
									variant="c1"
									component="div"
									weigth="regular"
									theme="gray"
									className=""
								>
									Pilotez vos finances et maîtrisez
									votre trésorerie grâce à des outils
									complets et conformes aux
									réglementations.
								</Typography>
							</div>
						</div>
						<div className="col-span-3 bg-gray-50 border border-gray-300 rounded shadow-xl hover:shadow-2xl">
							<div className="bg-[url('/assets/images/software/03.2-gescom.jpg')] bg-cover bg-bottom bg-no-repeat grayscale rounded-t w-full h-[25vh]"></div>
							<div className="flex flex-col gap-3 p-5 justify-center">
								<Typography
									variant="c1"
									component="h3"
									weigth="bold"
									theme="gray"
									className=""
								>
									<p>Sage 100</p>
									<p>Gestion commerciale</p>
								</Typography>
								<div className="border-b-[15px] border-cyan w-[100px]"></div>
								<Typography
									variant="c1"
									component="div"
									weigth="regular"
									theme="gray"
									className=""
								>
									Optimisez vos ventes, achats et
									stocks pour maximiser votre
									rentabilité.
								</Typography>
							</div>
						</div>
						<div className="col-span-3 bg-gray-50 border border-gray-300 rounded shadow-xl hover:shadow-2xl">
							<div className="bg-[url('/assets/images/software/03.3-paie.jpg')] bg-cover bg-bottom bg-no-repeat grayscale rounded-t w-full h-[25vh]"></div>
							<div className="flex flex-col gap-3 p-5 justify-center">
								<Typography
									variant="c1"
									component="h3"
									weigth="bold"
									theme="gray"
									className=""
								>
									<p>Sage 100</p>
									<p>Paie & RH</p>
								</Typography>
								<div className="border-b-[15px] border-cyan w-[100px]"></div>
								<Typography
									variant="c1"
									component="div"
									weigth="regular"
									theme="gray"
									className=""
								>
									Simplifiez la gestion des bulletins
									de salaire et des ressources
									humaines en toute sérénité
								</Typography>
							</div>
						</div>
						<div className="col-span-3 bg-gray-50 border border-gray-300 rounded shadow-xl hover:shadow-2xl">
							<div className="bg-[url('/assets/images/software/03.4-bi.jpg')] bg-cover bg-bottom bg-no-repeat grayscale rounded-t w-full h-[25vh]"></div>
							<div className="flex flex-col gap-3 p-5 justify-center">
								<Typography
									variant="c1"
									component="h3"
									weigth="bold"
									theme="gray"
									className=""
								>
									<p>Sage 100</p>
									<p>BI Reporting</p>
								</Typography>
								<div className="border-b-[15px] border-cyan w-[100px]"></div>
								<Typography
									variant="c1"
									component="div"
									weigth="regular"
									theme="gray"
									className=""
								>
									Transforme vos données en
									informations stratégiques pour vous
									permettre de prendre des décisions
									éclairées
								</Typography>
							</div>
						</div>
					</div>
				</ContainerFree>
			</ContainerFull>
		</div>
	);
};
