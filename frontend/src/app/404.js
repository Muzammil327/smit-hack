export default function Custom404() {
  return (
    <>
      <div className="errorpage">
        <h1 className="error">404</h1>
        <div className="page">
          Ooops!!! The page you are looking for is not found
        </div>
        <a href="/" className="py-2 px-6 bg-blue-400 text-white text-base">
          Go to Home page
        </a>
      </div>
    </>
  );
}
