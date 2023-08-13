import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { renderButtonStyle } from "../utils/render-button-style";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

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

interface ProductProps {
  data: {
    id: number;
    __component: string;
    title: string;
    description: string;
    url: string;
    urlText: string;
    picture: {
      data: PictureData;
    };
    reverseOrder: boolean;
    buttons: { text: string }[];
  };
}

export default function Product({ data }: ProductProps) {
  if (!data) return null;
  const { title, description, url, picture, urlText, reverseOrder, buttons } =
    data;

  return (
    <section className="sm:px-6 sm:pb-5 lg:px-8">
      <div className="container mx-auto py-24 space-y-2 sm:flex justify-between">
        <div className={`flex-1 ${reverseOrder ? "pl-28 order-1" : "pr-28"}`}>
          <Image
            src={getStrapiMedia(picture.data.attributes.url)!}
            width={picture.data.attributes.width}
            height={picture.data.attributes.height}
            alt={picture.data.attributes.alternativeText || ""}
          ></Image>
        </div>
        <div className={`flex-1 ${reverseOrder ? "pr-28" : "pl-28"}`}>
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
          {buttons && (
            <ul className="mb-7">
              {buttons.map((btn) => (
                <li key={btn.text} className="flex items-center text-gray-400">
                  <BsCheck2Circle className="inline mr-2 text-cyan-500" />
                  {btn.text}
                </li>
              ))}
            </ul>
          )}
          <Link href={url} className="text-cyan-500 flex items-center">
            {urlText}
            <FaArrowRight className="inline ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
