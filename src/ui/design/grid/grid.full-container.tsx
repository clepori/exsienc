import { ContainerFull } from "@/ui/components/container/container.full";

export const SoftwareWhyExsieView = () => {
	return (
		<>
			<ContainerFull className="px-28 pt-16  relative">
				<div className="grid grid-cols-12 gap-10 text-center w-full p-5 h-[25vh]">
					<div className="bg-cyan-200 flex items-center col-span-12 p- h-full">
						01
					</div>
				</div>
				<div className="grid grid-cols-12 gap-10 text-center w-full p-5 h-[65vh]">
					<div className="bg-cyan-200 col-start-1 col-span-7">
						6/12
					</div>
					<div className="bg-cyan-200 col-start-8 col-span-5">
						4/12
					</div>
				</div>
				{/* <ContainerFree className="grid grid-cols-12 gap-20 w-full h-full bg-gray-900">
                                        bienvenue
                                </ContainerFree> */}
			</ContainerFull>
		</>
	);
};
