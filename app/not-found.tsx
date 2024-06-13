import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/UI/Button";

export default function NotFound() {
  return (
    <div className="mt-12 flex justify-center text-center">
      <Container>
        <h2 className="mb-7 text-5xl font-bold">404</h2>
        <div className="mb-9 text-xl text-slate-700">
          We can't find the page you are looking for
        </div>
        <Link href="/">
          <Button>Back to Site</Button>
        </Link>
      </Container>
    </div>
  );
}
