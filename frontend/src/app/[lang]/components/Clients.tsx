import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";

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

interface ClientsProps {
  data: {
    id: number;
    __component: string;
    picture: {
      data: PictureData[];
    };
  };
}

export default function Clients({ data }: ClientsProps) {
  if (!data) return null;
  const { picture } = data;
  return (
    <section className="sm:px-6 sm:pb-5 lg:px-8">
      <div className="container mx-auto py-24 space-y-2 sm:flex justify-between">
        {picture.data.map((logo) => (
          <div>
            <Image
              src={getStrapiMedia(logo.attributes.url)!}
              width={logo.attributes.width}
              height={logo.attributes.height}
              alt={logo.attributes.alternativeText || ""}
            ></Image>
          </div>
        ))}
      </div>
    </section>
  );
}
