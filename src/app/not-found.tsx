export default function NotFound() {
  return (
    <body>
      <section className="flex h-[100vh] w-[100vh] flex-col items-center justify-center">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          404 - Page Not Found
        </h1>
        <p className="mb-4">The page you are looking for does not exist.</p>
      </section>
    </body>
  );
}
