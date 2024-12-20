import { AppLinks } from "@/types/app-links";
import {
	RiFacebookFill,
	RiInstagramFill,
	RiLinkedinFill,
} from "react-icons/ri";

const footerLogicielsLinks: AppLinks[] = [
	{
		label: "Sage 100",
		baseUrl: "/#",
		type: "internal",
	},
	// {
	// 	label: "EX'VISION",
	// 	baseUrl: "/#",
	// 	type: "internal",
	// },
	// {
	// 	label: "Awards",
	// 	baseUrl: "/#",
	// 	type: "internal",
	// },
	// {
	// 	label: "Experience",
	// 	baseUrl: "/#",
	// 	type: "internal",
	// },
	// {
	// 	label: "Success Story",
	// 	baseUrl: "/#",
	// 	type: "internal",
	// },
];

const footerServicesLinks: AppLinks[] = [
	{
		label: "Audit / Conseil",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "Intégration",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "Maintenance",
		baseUrl: "/#",
		type: "internal",
	},

	{
		label: "Formation",
		baseUrl: "/#",
		type: "internal",
	},
	// {
	// 	label: "Ressources humaines",
	// 	baseUrl: "/#",
	// 	type: "internal",
	// },
];

export const footerSocialnetworkLinks: AppLinks[] = [
	{
		label: "Facebook",
		baseUrl: "https://www.facebook.com/ExsieNC",
		type: "external",
		icon: RiFacebookFill,
	},
	{
		label: "LinkedIn",
		baseUrl: "https://www.linkedin.com/company/exsie",
		type: "external",
		icon: RiLinkedinFill,
	},
	{
		label: "Instagram",
		baseUrl: "/#",
		type: "external",
		icon: RiInstagramFill,
	},
];

export const footerLinks = [
	{
		label: "Nos logiciels",
		links: footerLogicielsLinks,
	},
	{
		label: "Nos services",
		links: footerServicesLinks,
	},
	{
		label: "Réseaux sociaux",
		links: footerSocialnetworkLinks,
	},
];
