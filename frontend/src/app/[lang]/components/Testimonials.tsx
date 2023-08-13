import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import HighlightedText from "./HighlightedText";
import { AiTwotoneStar } from "react-icons/ai";

interface PictureData {
  id: number;
  attributes: {
    url: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
  };
}

interface Testimonial {
  id: number;
  text: string;
  authorName: string;
  rating: number;
  description: string;
  picture: {
    data: PictureData;
  };
}

interface TestimonialsProps {
  data: {
    id: number;
    __component: string;
    title: string;
    description: string;
    testimonials: Testimonial[];
  };
}

export default function Testimonials({ data }: TestimonialsProps) {
  const { title, description, testimonials } = data;

  return (
    <section className="sm:px-6 sm:pb-5 lg:px-8">
      <div className="container mx-auto py-24 space-y-2 sm:flex justify-between">
        <div className={`flex-1 pr-28`}>
          <HighlightedText
            text={title}
            tag="h1"
            className="text-4xl font-bold leading-none sm:text-6xl mb-8 text-cyan-500"
          />
          <HighlightedText
            text={description}
            tag="p"
            className="leading-none sm:text-6xl lg:text-lg mb-8 text-gray-400"
          />
        </div>
        <div className={`flex-1 pl-28`}>
          {Array.from(Array(testimonials[0].rating).keys()).map((rating) => (
            <AiTwotoneStar
              key={rating}
              className="inline mb-4 text-orange-400"
            />
          ))}
          <HighlightedText
            text={testimonials[0].description}
            tag="p"
            className="leading-none sm:text-6xl lg:text-lg mb-8 text-gray-400"
          />
          <div className="flex align-center">
            <div className="mr-4">
              <Image
                src={
                  getStrapiMedia(testimonials[0].picture.data.attributes.url)!
                }
                width={56}
                height={56}
                alt={
                  testimonials[0].picture.data.attributes.alternativeText || ""
                }
                className="rounded-full"
              />
            </div>
            <div className="flex flex-column justify-between flex-wrap">
              <p className="flex-1 text-lg font-bold leading-none mb-1 text-cyan-500 basis-full">
                {testimonials[0].authorName}{" "}
              </p>
              <p className="flex-1 text-sm leading-none text-gray-400">
                {testimonials[0].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
