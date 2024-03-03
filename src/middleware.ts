import { NextRequest, NextResponse } from "next/server";
import Route from "./constant/rotue";
import supabaseMiddleware from "./utils/supa-middleware";

const publicRoute = [Route.login, Route["reset-password"]];

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = supabaseMiddleware(request, response);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("the login is: middleware", user);

  if (user && publicRoute.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(Route.main, request.url));
  }
  if (!user && !publicRoute.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(Route.login, request.url));
  }

  return response;
}

export const config = {
  matcher: ["/", "/login", "/reset-password"],
};
