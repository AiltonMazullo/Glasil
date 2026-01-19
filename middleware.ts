import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_PATHS = ["/checkout", "/pagamento"];
const AUTH_COOKIE_NAME = "glasil_auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtectedRoute = PROTECTED_PATHS.some(path => pathname.startsWith(path));

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  const isLoggedIn = request.cookies.get(AUTH_COOKIE_NAME)?.value === "true";

  if (!isLoggedIn) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout/:path*", "/pagamento/:path*"],
};
