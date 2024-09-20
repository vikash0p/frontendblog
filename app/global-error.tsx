"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <section className="w-full min-h-screen flex items-center justify-center flex-col gap-5">
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()} className="px-6 py-2 bg-red-700 text-white rounded-lg" >Try again</button>
        </section>
      </body>
    </html>
  );
}
