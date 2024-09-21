import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Your Blog",
    short_name: "Blog",
    description:"Welcome to Your Blog! Dive into a variety of articles that spark inspiration and share unique stories.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "public/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
