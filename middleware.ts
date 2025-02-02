import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const adminAuth = req.cookies.get("admin-auth");

  if (!adminAuth && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  return NextResponse.next();
}
