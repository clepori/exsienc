import Head from "next/head";

interface Props {
	title?: string;
	description?: string;
}

export const Seo = ({
	title = "EX'SIE - Votre solution en informatique d'entreprise",
	description = "Expert en intégration Sage 100 en Nouvelle-Calédonie. Solutions ERP et SIRH sur mesure, formation, maintenance et support pour PME. Basé à Nouméa.",
}: Props) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="Description" content={description} />
				<meta
					name="keywords"
					content="Sage 100, ERP Nouvelle-Calédonie, SIRH Nouméa, intégrateur Sage, formation Sage 100, maintenance ERP, EX'SIE"
				/>

				<meta
					property="og:title"
					content="EX'SIE | Expert Sage 100 Nouvelle-Calédonie"
				/>
				<meta
					property="og:description"
					content="Votre partenaire expert en solutions Sage 100 en Nouvelle-Calédonie. Intégration, formation et support."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.exsie.nc" />

				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://www.exsie.nc" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
		</>
	);
};
