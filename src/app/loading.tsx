import Loader from "app/components/ui/loader";

export default function Loading() {
  return (
    <body>
      <div className="flex h-[100vh] w-[100vw] items-center justify-center">
        <div className="mb-8 text-2xl font-semibold tracking-tighter">
          <Loader />
        </div>
      </div>
    </body>
  );
}
