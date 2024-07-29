import { MetadataRoute } from "next";
import { appName } from "@/lib/app-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: appName,
    short_name: appName,
    icons: [
      {
        src: "/logo.svg",
        purpose: "any",
      },
    ],
    start_url: "/",
    background_color: "#1f2937",
    theme_color: "#6473fe",
    display: "standalone",
    orientation: "portrait",
  };
}
