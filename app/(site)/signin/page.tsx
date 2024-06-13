import type { Metadata } from "next";

import Container from "@/components/layout/Container";
import SignInButton from "@/components/auth/SignInButton";
import AccountBenefitsList from "@/components/auth/AccountBenefitsList";

export const metadata: Metadata = {
  title: "Sign In",
};

export default async function SignInPage() {
  return (
    <Container size="sm">
      <div className="mb-12">
        <h2 className="mb-5 text-3xl font-bold">Sign In</h2>
        <p className="text-lg leading-7">
          Create an account or sign in to your existing one to try the auth
          process:
        </p>
      </div>

      <AccountBenefitsList />
      <SignInButton>Sign In</SignInButton>
    </Container>
  );
}
