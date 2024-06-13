export default function Logo({ size = "lg" }: { size?: "sm" | "lg" }) {
  const width = size === "sm" ? 30 : 40;
  const height = width;
  const src = size === "sm" ? "/logo_sm.png" : "/logo.png";

  return <img src={src} alt="Logo" width={width} height={height} />;
}
