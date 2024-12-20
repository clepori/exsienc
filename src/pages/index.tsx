import { Header } from "@/ui/components/navigation/header";
import { Seo } from "@/ui/components/seo/seo";
import { HomePageContainer } from "@/ui/modules/home-page/homepage.container";

export default function Home() {
	return (
		<>
			<Seo title="EX'SIE - Votre solution en informatique d'entreprise" />
			<Header />
			{/* <div className="text-c5">Bienvenue</div> */}
			<HomePageContainer />
			{/* <Footer /> */}
		</>
	);
}
