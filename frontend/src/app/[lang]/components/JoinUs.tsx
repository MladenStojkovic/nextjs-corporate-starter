import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import HighlightedText from "./HighlightedText";
import { AiTwotoneStar } from "react-icons/ai";
import Link from "next/link";
import { renderButtonStyle } from "../utils/render-button-style";

interface TestimonialsProps {
  data: {
    id: number;
    __component: string;
    title: string;
    description: string;
    buttonText: string;
  };
}

export default function JoinUs({ data }: TestimonialsProps) {
  const { title, description, buttonText } = data;

  return (
    <section className="sm:px-6 sm:pb-5 lg:px-8 mb-36">
      <div className="container mx-auto py-24 sm:flex justify-between bg-gradient-to-b from-primary to-primary-gradient">
        <div>
          <p className="text-4xl font-bold leading-none mb-5 text-white max-w-xs">
            {title}
          </p>
          <p className="leading-none text-white max-w-xs">{description}</p>
        </div>
        <div className="relative">
          <Link
            href={buttonText}
            className={`${renderButtonStyle(
              "primary"
            )} absolute right-0 top-1/2 transform -translate-y-1/2 w-60`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
