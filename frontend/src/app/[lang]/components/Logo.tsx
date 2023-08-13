import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo({
  src,
  children,
}: {
  src: string | null;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href="/"
      aria-label="Back to homepage"
      className="inline-block p-2"
    >
      {src && <Image src={src} alt="logo" width={90} height={28} />}
      <div className="ml-2">{children}</div>
    </Link>
  );
}
