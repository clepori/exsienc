import { ContainerIn } from "@/ui/components/container/container.in";
import { Seo } from "@/ui/components/seo/seo";
import { Box } from "@/ui/design/box/box";
import { Button } from "@/ui/design/button/button";
import { Typography } from "@/ui/design/typography/typography";
import { RiHome9Fill } from "react-icons/ri";

export default function Home() {
	return (
		<>
			<Seo title="EX'SIE - Design System" />
			<ContainerIn>
				<div className="mb-10">
					<div className="flex items-center gap-2 mb-5">
						<hr className="h-1 w-20 bg-cyan" />
						<Typography
							variant="c1"
							component="div"
							theme="gray"
							weigth="bold"
						>
							Typography
						</Typography>
					</div>
					<div className="flex flex-col gap-2">
						<Box className="overflow-hidden">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									DisplayLg
								</span>
							</Typography>
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-light">
									Light
								</span>
								<span className="font-regular">
									Regular
								</span>
								<span className="font-medium">
									Medium
								</span>
								<span className="font-semibold">
									Semibold
								</span>
								<span className="font-bold">Bold</span>
							</Typography>
						</Box>
						<Box className="overflow-hidden">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									DisplaySm
								</span>
							</Typography>
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-light">
									Light
								</span>
								<span className="font-regular">
									Regular
								</span>
								<span className="font-medium">
									Medium
								</span>
								<span className="font-semibold">
									Semibold
								</span>
								<span className="font-bold">Bold</span>
							</Typography>
						</Box>
						<Box className="overflow-hidden">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									H1
								</span>
							</Typography>
							<Typography
								variant="h1"
								component="div"
								className="space-x-10"
							>
								<span className="font-light">
									Light
								</span>
								<span className="font-regular">
									Regular
								</span>
								<span className="font-medium">
									Medium
								</span>
								<span className="font-semibold">
									Semibold
								</span>
								<span className="font-bold">Bold</span>
							</Typography>
						</Box>
						<Box className="overflow-hidden">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									H2
								</span>
							</Typography>
							<Typography
								variant="h2"
								component="div"
								className="space-x-10"
							>
								<span className="font-light">
									Light
								</span>
								<span className="font-regular">
									Regular
								</span>
								<span className="font-medium">
									Medium
								</span>
								<span className="font-semibold">
									Semibold
								</span>
								<span className="font-bold">Bold</span>
							</Typography>
						</Box>
						<Box className="overflow-hidden">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									H3
								</span>
							</Typography>
							<Typography
								variant="h3"
								component="div"
								className="space-x-10"
							>
								<span className="font-light">
									Light
								</span>
								<span className="font-regular">
									Regular
								</span>
								<span className="font-medium">
									Medium
								</span>
								<span className="font-semibold">
									Semibold
								</span>
								<span className="font-bold">Bold</span>
							</Typography>
						</Box>
						<Box className="overflow-hidden">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									H4
								</span>
							</Typography>
							<Typography
								variant="h4"
								component="div"
								className="space-x-10"
							>
								<span className="font-light">
									Light
								</span>
								<span className="font-regular">
									Regular
								</span>
								<span className="font-medium">
									Medium
								</span>
								<span className="font-semibold">
									Semibold
								</span>
								<span className="font-bold">Bold</span>
							</Typography>
						</Box>
						<Box className="overflow-hidden">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									H5
								</span>
							</Typography>
							<Typography
								variant="h5"
								component="div"
								className="space-x-10"
							>
								<span className="font-light">
									Light
								</span>
								<span className="font-regular">
									Regular
								</span>
								<span className="font-medium">
									Medium
								</span>
								<span className="font-semibold">
									Semibold
								</span>
								<span className="font-bold">Bold</span>
							</Typography>
						</Box>
						<Box className="overflow-hidden">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									Lead
								</span>
							</Typography>
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-light">
									Light
								</span>
								<span className="font-regular">
									Regular
								</span>
								<span className="font-medium">
									Medium
								</span>
								<span className="font-semibold">
									Semibold
								</span>
								<span className="font-bold">Bold</span>
							</Typography>
						</Box>
						<Box className="overflow-hidden">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									BodyLg
								</span>
							</Typography>
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-light">
									Light
								</span>
								<span className="font-regular">
									Regular
								</span>
								<span className="font-medium">
									Medium
								</span>
								<span className="font-semibold">
									Semibold
								</span>
								<span className="font-bold">Bold</span>
							</Typography>
						</Box>
						<Box className="overflow-hidden">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									c1
								</span>
							</Typography>
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-light">
									Light
								</span>
								<span className="font-regular">
									Regular
								</span>
								<span className="font-medium">
									Medium
								</span>
								<span className="font-semibold">
									Semibold
								</span>
								<span className="font-bold">Bold</span>
							</Typography>
						</Box>
						<Box className="overflow-hidden">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									BodySm
								</span>
							</Typography>
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-light">
									Light
								</span>
								<span className="font-regular">
									Regular
								</span>
								<span className="font-medium">
									Medium
								</span>
								<span className="font-semibold">
									Semibold
								</span>
								<span className="font-bold">Bold</span>
							</Typography>
						</Box>
						<Box className="overflow-hidden">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									Caption1
								</span>
							</Typography>
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-light">
									Light
								</span>
								<span className="font-regular">
									Regular
								</span>
								<span className="font-medium">
									Medium
								</span>
								<span className="font-semibold">
									Semibold
								</span>
								<span className="font-bold">Bold</span>
							</Typography>
						</Box>
						<Box className="overflow-hidden">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									Caption2
								</span>
							</Typography>
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-light">
									Light
								</span>
								<span className="font-regular">
									Regular
								</span>
								<span className="font-medium">
									Medium
								</span>
								<span className="font-semibold">
									Semibold
								</span>
								<span className="font-bold">Bold</span>
							</Typography>
						</Box>
						<Box className="overflow-hidden">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									Caption3
								</span>
							</Typography>
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-light">
									Light
								</span>
								<span className="font-regular">
									Regular
								</span>
								<span className="font-medium">
									Medium
								</span>
								<span className="font-semibold">
									Semibold
								</span>
								<span className="font-bold">Bold</span>
							</Typography>
						</Box>
					</div>
				</div>
				<div className="mb-10">
					<div className="flex items-center gap-2 mb-5">
						<hr className="h-1 w-20 bg-cyan" />
						<Typography
							variant="c1"
							component="div"
							theme="gray"
							weigth="bold"
						>
							Button
						</Typography>
					</div>
					<Box className="flex flex-col gap-5 mb-5">
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									xLarge
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button variant="primary" size="xlarge">
									Cliquez moi !
								</Button>
								<Button
									variant="secondary"
									size="xlarge"
								>
									Cliquez moi !
								</Button>
								<Button variant="light" size="xlarge">
									Cliquez moi !
								</Button>
								<Button variant="gray" size="xlarge">
									Cliquez moi !
								</Button>
								<Button variant="disable" size="xlarge">
									Cliquez moi !
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									Large
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button variant="primary" size="large">
									Cliquez moi !
								</Button>
								<Button
									variant="secondary"
									size="large"
								>
									Cliquez moi !
								</Button>
								<Button variant="light" size="large">
									Cliquez moi !
								</Button>
								<Button variant="gray" size="large">
									Cliquez moi !
								</Button>
								<Button variant="disable" size="large">
									Cliquez moi !
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									Medium
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button variant="primary" size="medium">
									Cliquez moi !
								</Button>
								<Button
									variant="secondary"
									size="medium"
								>
									Cliquez moi !
								</Button>
								<Button variant="light" size="medium">
									Cliquez moi !
								</Button>
								<Button variant="gray" size="medium">
									Cliquez moi !
								</Button>
								<Button variant="disable" size="medium">
									Cliquez moi !
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									Small
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button variant="primary" size="small">
									Cliquez moi !
								</Button>
								<Button
									variant="secondary"
									size="small"
								>
									Cliquez moi !
								</Button>
								<Button variant="light" size="small">
									Cliquez moi !
								</Button>
								<Button variant="gray" size="small">
									Cliquez moi !
								</Button>
								<Button variant="disable" size="small">
									Cliquez moi !
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									xSmall
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button variant="primary" size="xsmall">
									Cliquez moi !
								</Button>
								<Button
									variant="secondary"
									size="xsmall"
								>
									Cliquez moi !
								</Button>
								<Button variant="light" size="xsmall">
									Cliquez moi !
								</Button>
								<Button variant="gray" size="xsmall">
									Cliquez moi !
								</Button>
								<Button variant="disable" size="xsmall">
									Cliquez moi !
								</Button>
							</div>
						</div>
					</Box>
					<Box className="flex flex-col gap-5 mb-5">
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									xLarge
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button
									variant="primary"
									size="xlarge"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="secondary"
									size="xlarge"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="light"
									size="xlarge"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="gray"
									size="xlarge"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="disable"
									size="xlarge"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									Large
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button
									variant="primary"
									size="large"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="secondary"
									size="large"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="light"
									size="large"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="gray"
									size="large"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="disable"
									size="large"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									Medium
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button
									variant="primary"
									size="medium"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="secondary"
									size="medium"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="light"
									size="medium"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="gray"
									size="medium"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="disable"
									size="medium"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									Small
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button variant="primary" size="small">
									Cliquez moi !
								</Button>
								<Button
									variant="secondary"
									size="small"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="light"
									size="small"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="gray"
									size="small"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="disable"
									size="small"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									xSmall
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button
									variant="primary"
									size="xsmall"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="secondary"
									size="xsmall"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="light"
									size="xsmall"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="gray"
									size="xsmall"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="disable"
									size="xsmall"
									icon={{
										icon: RiHome9Fill,
									}}
									iconPosition="left"
								>
									Cliquez moi !
								</Button>
							</div>
						</div>
					</Box>
					<Box className="flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									xLarge
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button
									variant="ico"
									size="xlarge"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="primary"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="xlarge"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="secondary"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="xlarge"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="light"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="xlarge"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="gray"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="xlarge"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="disable"
								>
									Cliquez moi !
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									Large
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button
									variant="ico"
									size="large"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="primary"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="large"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="secondary"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="large"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="light"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="large"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="gray"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="large"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="disable"
								>
									Cliquez moi !
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									Medium
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button
									variant="ico"
									size="medium"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="primary"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="medium"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="secondary"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="medium"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="light"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="medium"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="gray"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="medium"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="disable"
								>
									Cliquez moi !
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									Small
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button
									variant="ico"
									size="small"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="primary"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="small"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="secondary"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="small"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="light"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="small"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="gray"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="small"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="disable"
								>
									Cliquez moi !
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<Typography
								variant="c1"
								component="div"
								className="space-x-10"
							>
								<span className="font-semibold underline text-gray-500">
									xSmall
								</span>
							</Typography>
							<div className="flex items-center gap-5">
								<Button
									variant="ico"
									size="xsmall"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="primary"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="xsmall"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="secondary"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="xsmall"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="light"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="xsmall"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="gray"
								>
									Cliquez moi !
								</Button>
								<Button
									variant="ico"
									size="xsmall"
									icon={{
										icon: RiHome9Fill,
									}}
									iconTheme="disable"
								>
									Cliquez moi !
								</Button>
							</div>
						</div>
					</Box>
				</div>
			</ContainerIn>
		</>
	);
}
