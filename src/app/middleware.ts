import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("auth");
  const protectedPaths = ["/dashboard", "/create"];
  const authPaths = ["/login", "/register"];
  const path = request.nextUrl.pathname;

  // If trying to access protected route without auth
  if (protectedPaths.includes(path) && !authCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If trying to access auth routes while logged in
  if (authPaths.includes(path) && authCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/create", "/login", "/register"],
};
