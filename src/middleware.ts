import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_API_MOCKING !== "true") {
    return NextResponse.next();
  }

  if(request.headers.get('next-action') != null)
  {
    return NextResponse.rewrite(new URL("http://localhost:9000", request.url));
  }
}
