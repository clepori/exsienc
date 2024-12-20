import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Typography } from "../typography/typography";

interface SlideContent {
	title: string;
	paragraphs: string[];
}

interface CarouselProps {
	slides: SlideContent[];
}

export const CarouselContent = ({ slides }: CarouselProps) => {
	return (
		<div className="w-full max-w-5xl mx-auto">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 5000 }}
				className=""
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index} className="p-8">
						<div className="flex flex-col items-center mt-5">
							<div className="flex flex-col items-center justify-center gap-2">
								<Typography
									variant="h5"
									component="h3"
									weigth="semibold"
									theme="gray"
									className=""
								>
									{slide.title}
								</Typography>
								<hr className="bg-cyan w-[20vw] h-[10px]" />
							</div>
							<div>
								<Typography
									variant="c1"
									component="div"
									weigth="regular"
									theme="gray"
									className="space-y-2 text-cente mt-5 px-24 mb-5"
								>
									{slide.paragraphs.map(
										(paragraph, i) => (
											<p
												key={i}
												className="text-gray-600"
											>
												{paragraph}
											</p>
										)
									)}
								</Typography>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
