import { LinkTypes } from "@/lib/link-type";
import { ActiveLink } from "@/types/active-links";
import { FooterLinks } from "@/types/app-links";
import { LogoExsie } from "@/ui/design/logo/logo-exsie";
import { LogoX } from "@/ui/design/logo/logo-x";
import { Typography } from "@/ui/design/typography/typography";
import { RiMailFill, RiMapPinFill, RiPhoneFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { footerLinks } from "./app-links";
import { SocialNetworksButton } from "./socialnetwarks-buttons";
import { ContainerFree } from "../container/container.free";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	const footerNavigationList = footerLinks.map((colomnLinks) => (
		<FooterLink key={uuidv4()} data={colomnLinks} />
	));

	return (
		<div>
			{/* MOBILE */}
			{/* <BlockPhoneFullFree className="relative border-t-8 border-cyan z-40 overflow-hidden">
				<BlockPhoneFullFree className="absolute -z-50 mt-[-80px] ml-10">
					<div className="bg-[url('/assets/images/logox.png')] bg-contain bg-right bg-no-repeat w-full h-[30vh]"></div>
				</BlockPhoneFullFree>
				<BlockPhoneFullFree className="absolute -z-50 pt-[800px] -ml-36">
					<div className="bg-[url('/assets/images/logox.png')] bg-contain bg-no-repeat w-full h-[100vh]"></div>
				</BlockPhoneFullFree>
				<BlockPhoneFullIn className="z-0">
					<div className="flex flex-col items-center gap-4">
						<Typography
							variant="lead"
							component="h3"
							weigth="semibold"
							theme="primary"
							className="uppercase mb-2"
						>
							Rejoignez nous
						</Typography>
						<SocialNetworksButton theme="gray" />
						<div className="flex flex-col items-center justify-center gap-5 my-8">
							{footerNavigationList}
						</div>
						<div className="flex flex-col items-center justify-center gap-3">
							<Logo size="large" />
							<Typography
								variant="lead"
								component="h3"
								weigth="semibold"
								theme="primary"
								className="uppercase mt-5"
							>
								A PROPOS
							</Typography>
							<hr className="bg-gray-300 w-[60vw] h-[5px] " />
							<Typography
								variant="caption4"
								component="div"
								weigth="regular"
								theme="gray"
								className="space-y-2 text-center"
							>
								EX’SIE est votre partenaire expert en
								intégration des solutions ERP et SIRH
								Sage 100 en Nouvelle-Calédonie. Nous
								vous aidons à optimiser vos processus,
								améliorer votre gestion d’entreprise et
								atteindre vos objectifs.
							</Typography>
							<div className="flex items-center gap-2 mt-2">
								<RiPhoneFill
									className="text-cyan "
									size={18}
								/>
								<Typography
									variant="caption4"
									component="div"
									weigth="semibold"
									theme="gray"
									className="mb-0"
								>
									+(687) 75 86 31
								</Typography>
							</div>
							<div className="flex items-center gap-2">
								<RiMailFill
									className="text-cyan "
									size={18}
								/>
								<Typography
									variant="caption4"
									component="div"
									weigth="semibold"
									theme="gray"
									className="mb-0"
								>
									commercial@exsie.nc
								</Typography>
							</div>
							<div className="flex items-center gap-2">
								<RiMapPinFill
									className="text-cyan "
									size={18}
								/>
								<Typography
									variant="caption4"
									component="div"
									weigth="semibold"
									theme="gray"
									className="mb-0"
								>
									14 rue Dalmayrac, PK6, BP 8565
								</Typography>
							</div>
							<hr className="border-t-2 border-primary" />
							<div className="flex items-center justify-between">
								<Typography
									variant="caption5"
									theme="secondary"
									className=""
								>
									{`Copyright © ${currentYear} | EX'SIE SARL`}
								</Typography>
							</div>
						</div>
					</div>
				</BlockPhoneFullIn>
			</BlockPhoneFullFree> */}

			{/* DESKTOP */}
			<ContainerFree className="z-40 flex flex-col items-start justify-between border-t-8 border-cyan mt-0">
				<ContainerFree className="absolute -z-50 overflow-hidden">
					<LogoX height="300px" className="-ml-[12vw] -mt-8" />
				</ContainerFree>{" "}
				<div className="ml-20 mt-20 mb-6">
					<LogoExsie height="300px" />
				</div>
				<div className="grid grid-cols-12 gap-5 w-full px-20 mb-5">
					<div className="col-span-5">
						<div className="flex flex-col justify-start gap-3">
							<Typography
								variant="c1"
								component="h3"
								weigth="semibold"
								theme="primary"
								className="uppercase mb-3"
							>
								A PROPOS
							</Typography>

							<Typography
								variant="c1"
								component="div"
								weigth="regular"
								theme="gray"
								className="space-y-2 max-w-md mb-3"
							>
								<p>
									EX’SIE est votre partenaire expert
									en intégration des solutions ERP et
									SIRH Sage 100 en
									Nouvelle-Calédonie.
								</p>
								<p>
									Nous vous aidons à optimiser vos
									processus, améliorer votre gestion
									d’entreprise et atteindre vos
									objectifs.
								</p>
							</Typography>
							<hr className="bg-gray-300 w-[10vw] h-[5px] mb-3" />
							<div className="flex items-center gap-4">
								<RiPhoneFill
									className="text-cyan "
									size={24}
								/>
								<Typography
									variant="c1"
									component="div"
									weigth="semibold"
									theme="gray"
									className="mb-0"
								>
									+(687) 75 86 31
								</Typography>
							</div>
							<div className="flex items-center gap-4">
								<RiMailFill
									className="text-cyan "
									size={24}
								/>
								<Typography
									variant="c1"
									component="div"
									weigth="semibold"
									theme="gray"
									className="mb-0"
								>
									commercial@exsie.nc
								</Typography>
							</div>
							<div className="flex items-center gap-4">
								<RiMapPinFill
									className="text-cyan "
									size={24}
								/>
								<Typography
									variant="c1"
									component="div"
									weigth="semibold"
									theme="gray"
									className="mb-0"
								>
									14 rue Dalmayrac, PK6, BP 8565
								</Typography>
							</div>
						</div>
					</div>
					<div className="col-span-7">
						<div className="flex items-start justify-end gap-20">
							{footerNavigationList}
						</div>
					</div>
				</div>
				<div className="w-full px-20">
					<hr className="bg-cyan w-full h-[3px]" />
					<div className="flex items-center justify-between my-5">
						<Typography
							variant="c1"
							theme="secondary"
							className=""
						>
							{`Copyright © ${currentYear} | EX'SIE SARL`}
						</Typography>
						<div className="flex items-center justify-between">
							<SocialNetworksButton theme="gray" />
						</div>
					</div>
				</div>
			</ContainerFree>
		</div>
	);
};

interface footerLinkProps {
	data: FooterLinks;
}

const FooterLink = ({ data }: footerLinkProps) => {
	const linksList = data.links.map((link) => (
		<div key={uuidv4()}>
			{link.type === LinkTypes.INTERNAL && (
				<ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
			)}

			{link.type === LinkTypes.EXTERNAL && (
				<a href={link.baseUrl} target="_blank">
					{link.label}
				</a>
			)}
		</div>
	));

	return (
		<div>
			{/* <BlockPhoneFullIn className="md:hidden lg:hidden min-w-[190px] flex flex-col items-center">
				<Typography
					theme="primary"
					variant="caption1"
					weigth="medium"
					className="pb-1"
				>
					{data.label}
				</Typography>
				<Typography
					variant="caption2"
					className="space-y-1 flex flex-col items-center"
				>
					{linksList}
				</Typography>
			</BlockPhoneFullIn> */}
			<div className="hidden md:hidden lg:block">
				<div className="flex flex-col items-start gap-3">
					<Typography
						theme="primary"
						variant="c1"
						weigth="semibold"
						className="mb-3 uppercase"
					>
						{data.label}
					</Typography>
					<Typography
						variant="c1"
						className="gap-2 flex flex-col"
					>
						{linksList}
					</Typography>
				</div>
			</div>
		</div>
	);
};
