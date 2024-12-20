import { ActiveLink } from "@/types/active-links";
import { LogoExsie } from "@/ui/design/logo/logo-exsie";
import { Typography } from "@/ui/design/typography/typography";
import Link from "next/link";

export const Header = ({}) => {
	return (
		<>
			<div className="fixed h-[8vh] w-full px-[8vw] tablet:px-[10vw] 2xl:px-[15vw] bg-gray-50/80 flex items-center justify-between">
				<Link href="/">
					<LogoExsie height="h-[5vh]" />
				</Link>
				<Typography
					theme="gray"
					variant="c2"
					component="div"
					className="flex items-center tablet:text-bodybase laptop:text-bodysm screen:text-bodybase screen-4k:text-h4 tablet:gap-10 screen:gap-16 screen-4k:gap-28 gap-6"
				>
					<ActiveLink href="/nos-logiciels">
						Nos logiciels
					</ActiveLink>
					<ActiveLink href="/nos-services">
						Nos services
					</ActiveLink>
				</Typography>
			</div>
		</>
	);
};
