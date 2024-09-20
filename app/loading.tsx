'use client'
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <section className="w-full min-h-screen flex flex-col gap-5 justify-center items-center">
      <div className="loader"></div>
    </section>
  );
}
