import { SoftwareAvantagesView } from "./components/avantages.view";
import { SoftwareHeroTopView } from "./components/hero-top.view";
import { SoftwareMobulesView } from "./components/modules.view";
import { SoftwareWhyExsieView } from "./components/whyexsie.view";
import { SoftwareWhySageView } from "./components/whysage.view";

export const SoftwareView = () => {
	return (
		<>
			<SoftwareHeroTopView />
			<SoftwareWhySageView />
			<SoftwareMobulesView />
			<SoftwareWhyExsieView />
			<SoftwareAvantagesView />
		</>
	);
};
