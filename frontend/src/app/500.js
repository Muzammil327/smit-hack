import Link from "next/link";

export default function Custom500() {
  return (
    <>
      <div className="errorpage">
        <h1 className="error">500</h1>
        <div className="page">
          Ooops!!! The page you are looking for is not found
        </div>
        <Link href="/" className="py-2 px-6 bg-blue-400 text-white text-base">
          Go to Home page
        </Link>
      </div>
    </>
  );
}
