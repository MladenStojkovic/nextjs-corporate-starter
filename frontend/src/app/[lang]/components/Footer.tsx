"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface CategoryLink {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className="flex">
      <Link href={url} className="text-gray-200">
        {text}
      </Link>
    </li>
  );
}

function CategoryLink({ attributes }: CategoryLink) {
  return (
    <li className="flex">
      <Link href={`/blog/${attributes.slug}`} className="text-gray-200">
        {attributes.name}
      </Link>
    </li>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "WEBSITE":
      return <CgWebsite className="inline text-zinc-200" />;
    case "TWITTER":
      return <AiFillTwitterCircle className="inline text-zinc-200" />;
    case "YOUTUBE":
      return <AiFillYoutube className="inline text-zinc-200" />;
    case "DISCORD":
      return <FaDiscord className="inline text-zinc-200" />;
    default:
      return null;
  }
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  categoryLinks,
  legalLinks,
  socialLinks,
  description
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  categoryLinks: Array<CategoryLink>;
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
  description: string;
}) {
  return (
    <footer className="py-6 bg-slate-900 text-zinc-400">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <div className="mb-6">
              <Logo src={logoUrl}>
                {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
              </Logo>
            </div>
            <p className="mb-8">{description}</p>
            {socialLinks.map((link: FooterLink) => {
              return (
                <a
                  key={link.id}
                  rel="noopener noreferrer"
                  href={link.url}
                  title={link.text}
                  target={link.newTab ? "_blank" : "_self"}
                  className="inline w-10 h-10 rounded-full mr-1 p-3 bg-zinc-600"
                >
                  <RenderSocialIcon social={link.social} />
                </a>
              );
            })}
          </div>

          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium">Categories</p>
            <ul>
              {categoryLinks.map((link: CategoryLink) => (
                <CategoryLink key={link.id} {...link} />
              ))}
            </ul>
          </div>

          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium">Menu</p>
            <ul>
              {menuLinks.map((link: FooterLink) => (
                <FooterLink key={link.id} {...link} />
              ))}
            </ul>
          </div>
        </div>
        <div className="grid justify-center pt-6">
          <div className="flex">
            <span className="mr-2 text-white">
              ©{new Date().getFullYear()}. Crafted with love.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
