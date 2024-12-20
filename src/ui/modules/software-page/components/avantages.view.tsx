import { ContainerFree } from "@/ui/components/container/container.free";
import { ContainerFull } from "@/ui/components/container/container.full";
import { Slogan } from "@/ui/design/logo/slogan";
import { Typography } from "@/ui/design/typography/typography";
import { RiGitCommitFill } from "react-icons/ri";

export const SoftwareAvantagesView = () => {
	return (
		<div>
			{/* DESKTOP */}
			<ContainerFull className="relative">
				<ContainerFree className="absolute -z-50">
					<div className="bg-[url('/assets/images/software/05-avantages.png')] bg-cover bg-top bg-no-repeat h-[100vh] w-full"></div>
				</ContainerFree>
				<ContainerFull className="px-28 pt-12 relative">
					<div className="grid grid-cols-12 gap-10 text-center w-full p-5 h-[15vh]">
						<div className="flex flex-col items-center col-span-12 gap-3 h-full">
							<Typography
								variant="h4"
								component="h3"
								weigth="bold"
								theme="gray"
								className=""
							>
								Nos points forts en tant que partenaire
								Sage
							</Typography>
							<hr className="bg-gray-300 w-[30vw] h-[5px] mb-1" />
						</div>
					</div>
					<div className="grid grid-cols-12 gap-10 w-full p-5 h-[55vh]">
						<div className=" col-start-2 col-span-5 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl gap-5 bg-white/40 border border-gray-200">
							<RiGitCommitFill
								size={50}
								className="text-cyan"
							/>
							<div className="flex flex-col">
								<Typography
									variant="c1"
									component="h3"
									weigth="bold"
									theme="gray"
									className=""
								>
									Expérience éprouvée
								</Typography>
								<Typography
									variant="c1"
									component="div"
									weigth="regular"
									theme="gray"
									className="space-y-2 max-w-sm"
								>
									Nous avons accompagné de nombreuses
									entreprises dans leur
									transformation numérique grâce à
									Sage 100.
								</Typography>
							</div>
						</div>
						<div className="col-start-7 col-span-5 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl gap-5 bg-white/40 border border-gray-200">
							<RiGitCommitFill
								size={50}
								className="text-cyan"
							/>
							<div className="flex flex-col">
								<Typography
									variant="c1"
									component="h3"
									weigth="bold"
									theme="gray"
									className=""
								>
									Expérience éprouvée
								</Typography>
								<Typography
									variant="c1"
									component="div"
									weigth="regular"
									theme="gray"
									className="space-y-2 max-w-sm"
								>
									Nous avons accompagné de nombreuses
									entreprises dans leur
									transformation numérique grâce à
									Sage 100.
								</Typography>
							</div>
						</div>
						<div className="col-start-2 col-span-5 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl gap-5 bg-white/40 border border-gray-200">
							<RiGitCommitFill
								size={50}
								className="text-cyan"
							/>
							<div className="flex flex-col">
								<Typography
									variant="c1"
									component="h3"
									weigth="bold"
									theme="gray"
									className=""
								>
									Expérience éprouvée
								</Typography>
								<Typography
									variant="c1"
									component="div"
									weigth="regular"
									theme="gray"
									className="space-y-2 max-w-sm"
								>
									Nous avons accompagné de nombreuses
									entreprises dans leur
									transformation numérique grâce à
									Sage 100.
								</Typography>
							</div>{" "}
						</div>
						<div className="col-start-7 col-span-5 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl gap-5 bg-white/40 border border-gray-200">
							<RiGitCommitFill
								size={50}
								className="text-cyan"
							/>
							<div className="flex flex-col">
								<Typography
									variant="c1"
									component="h3"
									weigth="bold"
									theme="gray"
									className=""
								>
									Expérience éprouvée
								</Typography>
								<Typography
									variant="c1"
									component="div"
									weigth="regular"
									theme="gray"
									className="space-y-2 max-w-sm"
								>
									Nous avons accompagné de nombreuses
									entreprises dans leur
									transformation numérique grâce à
									Sage 100.
								</Typography>
							</div>{" "}
						</div>
					</div>
					<div className="grid grid-cols-12 gap-10 w-full p-5 h-[20vh]">
						<div className="flex items-center justify-center col-span-12 p- h-full">
							<Slogan size={60} />
						</div>
					</div>
				</ContainerFull>
			</ContainerFull>
		</div>
	);
};
