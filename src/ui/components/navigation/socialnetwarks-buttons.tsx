import { Button } from "@/ui/design/button/button";
import clsx from "clsx";
import { RiErrorWarningFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { footerSocialnetworkLinks } from "./app-links";

interface Props {
	theme?: "primary" | "secondary" | "light" | "disable" | "gray";
	className?: string;
}

export const SocialNetworksButton = ({
	theme = "primary",
	className,
}: Props) => {
	const icoList = footerSocialnetworkLinks.map((socialNetwork) => (
		<Button
			key={uuidv4()}
			variant="ico"
			iconTheme={theme}
			size="medium"
			icon={{
				icon: socialNetwork.icon
					? socialNetwork.icon
					: RiErrorWarningFill,
			}}
			baseUrl={socialNetwork.baseUrl}
			linkType={socialNetwork.type}
		/>
	));

	return (
		<div className={clsx(className, "flex items-center gap-3")}>
			{icoList}
		</div>
	);
};
