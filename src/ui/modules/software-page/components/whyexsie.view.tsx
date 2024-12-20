import { CarouselWhyExsie } from "./whyexsie.carousel";
import { Typography } from "@/ui/design/typography/typography";
import { LogoExsie } from "@/ui/design/logo/logo-exsie";
import { Button } from "@/ui/design/button/button";
import { ContainerFull } from "@/ui/components/container/container.full";

export const SoftwareWhyExsieView = () => {
	return (
		<>
			<ContainerFull className="px-28 pt  relative">
				<div className="grid grid-cols-12 gap-10 text-center w-full h-[35vh]">
					<div className="flex flex-col gap-1 items-center col-span-12 h-full pt-16">
						<div className="flex items-center justify-center gap-4">
							<Typography
								variant="h4"
								component="h3"
								weigth="bold"
								theme="gray"
								className=""
							>
								Pourquoi choisir
							</Typography>
							<LogoExsie height="200px" />
							<Typography
								variant="h4"
								component="h3"
								weigth="bold"
								theme="gray"
								className=""
							>
								comme
							</Typography>
						</div>
						<div>
							<Typography
								variant="h4"
								component="h3"
								weigth="bold"
								theme="gray"
								className=""
							>
								partenaire Sage 100 ?
							</Typography>
						</div>
						<Typography
							variant="h5"
							component="h3"
							weigth="bold"
							theme="primary"
							className="uppercase my-12"
						>
							Un accompagnement sur mesure pour votre
							projet Sage 100
						</Typography>
					</div>
				</div>
				<div className="grid grid-cols-12 gap-10 text-center w-full p-10 h-[55vh]">
					<div className="col-start-1 col-span-12 flex items-center justify-center">
						<CarouselWhyExsie />
					</div>
				</div>
				<div className="-mt-10 flex items-center justify-center">
					<Button> Découvrez nos services</Button>
				</div>
			</ContainerFull>
		</>
	);
};
