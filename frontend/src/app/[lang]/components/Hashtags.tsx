import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";
import HighlightedText from "./HighlightedText";

interface Tag {
  tag: {
    id: number;
    title: string;
    description: string;
    picture: {
      data: PictureData;
    };
  };
}

interface HashtagProps {
  data: {
    id: number;
    __component: string;
    tag: Tag[];
  };
}

interface PictureData {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
  };
}

function Hashtag({ tag }: Tag) {
  return (
    <div className="bg-white p-7 pb-16 mr-9 last:mr-0">
      <Image
        src={getStrapiMedia(tag.picture.data.attributes.url)!}
        width={tag.picture.data.attributes.width}
        height={tag.picture.data.attributes.height}
        alt={tag.picture.data.attributes.alternativeText || ""}
      />
      <HighlightedText
        text={tag.title}
        tag="h4"
        className="text-xl pt-4 pb-6 font-bold leading-none text-cyan-500"
      />
      <HighlightedText
        text={tag.description}
        tag="p"
        className="text-md pt-4 pb-6 leading-none text-gray-400"
      />
    </div>
  );
}

export default function Hashtags({ data }: HashtagProps) {
  if (!data) return null;
  const { tag } = data;
  return (
    <section className="sm:px-6 sm:pb-5 lg:px-8 bg-cyan-100">
      <div className="container mx-auto py-24 flex justify-between">
        {tag.map((hashtag) => (
          // @ts-ignore
          <Hashtag tag={hashtag} />
        ))}
      </div>
    </section>
  );
}
