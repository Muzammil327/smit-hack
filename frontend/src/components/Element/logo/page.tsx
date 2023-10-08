import Image from "next/image";
import Link from "next/link";
import blogo from "@/public/logo/blogo.webp";
import wlogo from "@/public/logo/wlogo.webp";

export function Logob() {
  return (
    <div className="logo">
      <Link href="/">
        <Image
          src={blogo}
          height={41}
          width={164}
          alt="Codebloglab"
          title="Codebloglab"
          priority
        />
      </Link>
    </div>
  );
}

export function Logow() {
  return (
    <div className="logo">
      <Link href="/">
        <Image
          src={wlogo}
          width={164}
          height={41}
          alt="Codebloglab"
          title="Codebloglab"
        />
      </Link>
    </div>
  );
}

export default function TLogo() {

  return (
    <>

      <div className="logo">
        <Link href="/">
          <Image
            src={blogo}
            height={41}
            width={164}
            alt="Codebloglab"
            title="Codebloglab"

          />
        </Link>
      </div>


    </>
  );
}
