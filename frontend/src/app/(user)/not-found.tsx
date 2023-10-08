import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Not Found",
};

function NotFound() {
  return (
    <>
      <div className="errorpage h-96 w-full c flex-col">
        <h1 className="error lg:text-[200px] md:text-[200] sm:text-[100px] text-[60px]">Not Found</h1>
        <div className="page my-10 text-xl">
          Ooops!!! The page you are looking for is not found
        </div>
        <Link href="/" className="button">
          Go to Home page
        </Link>
      </div>
    </>
  );
}

export default NotFound;
