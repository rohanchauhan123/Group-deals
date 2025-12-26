import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
	{
		id: 1,
		image: '/1.jpeg',
	},
	{
		id: 2,
		image: '/2.jpeg',
	},
	{
		id: 2,
		image: '/Post_5.jpg',
	},
	{
		id: 2,
		image: '/Post_6.jpg',
	},
	{
		id: 2,
		image: '/Post_7.jpg',
	},
];

// Duplicate testimonials for infinite scroll effect
const extendedTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (isAutoPlaying) {
			interval = setInterval(() => {
				setCurrentIndex((prev) => {
					const nextIndex = prev + 1;
					// Reset to 0 when reaching the end for infinite loop
					if (nextIndex >= testimonials.length) {
						return 0;
					}
					return nextIndex;
				});
			}, 5000); // Change slide every 5 seconds
		}
		return () => clearInterval(interval);
	}, [isAutoPlaying]);

	const handlePrev = () => {
		setIsAutoPlaying(false);
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
		setIsAutoPlaying(true);
	};

	const handleNext = () => {
		setIsAutoPlaying(false);
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
		setIsAutoPlaying(true);
	};

	return (
		<section className="py-12 bg-gradient-to-b from-background to-muted/20">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
				Our Investors
				</h2>

				<div className="relative max-w-6xl mx-auto">
					{/* Testimonial Images Grid - Show 2 at once */}
					<div className="overflow-hidden rounded-xl">
						<div
							className="flex transition-transform duration-700 ease-in-out"
							style={{ transform: `translateX(-${currentIndex * 50}%)` }}
						>
							{extendedTestimonials.map((testimonial, index) => (
								<div key={index} className="w-1/2 flex-shrink-0 px-2">
									<div className="bg-card rounded-lg overflow-hidden shadow-lg border">
										<img
											src={testimonial.image}
											alt={`Testimonial ${index + 1}`}
											className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Navigation Buttons */}
					<div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-2 pointer-events-none">
						<Button
							variant="ghost"
							size="icon"
							className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background pointer-events-auto"
							onClick={handlePrev}
						>
							<ChevronLeft className="h-5 w-5" />
						</Button>

						<Button
							variant="ghost"
							size="icon"
							className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background pointer-events-auto"
							onClick={handleNext}
						>
							<ChevronRight className="h-5 w-5" />
						</Button>
					</div>

					{/* Dots */}
					<div className="flex justify-center space-x-2 mt-6">
						{testimonials.map((_, index) => (
							<button
								key={index}
								className={`w-2 h-2 rounded-full transition-all duration-300 ${
									index === currentIndex ? 'bg-primary w-4' : 'bg-muted-foreground/30'
								}`}
								onClick={() => {
									setIsAutoPlaying(false);
									setCurrentIndex(index);
									setIsAutoPlaying(true);
								}}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;