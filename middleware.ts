import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import getAuth from "@/auth";

export async function middleware(request: NextRequest) {
  const auth = getAuth();
  const isSignedIn = await auth.isSignedIn();

  if (request.nextUrl.pathname.startsWith("/signin")) {
    return isSignedIn
      ? NextResponse.redirect(new URL("/profile", request.url))
      : NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith("/profile")) {
    return !isSignedIn
      ? NextResponse.redirect(new URL("/signin", request.url))
      : NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/profile"],
};
