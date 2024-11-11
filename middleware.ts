import { clerkMiddleware } from "@clerk/nextjs/server";
// import { authMiddleware } from "@clerk/nextjs";


export default clerkMiddleware();

// export default authMiddleware({
//   // Making sure homepage route and API, especially the webhook, are both public!
//   publicRoutes: [
//     "/",
//     "/api/(.*)",
//     "/login"
//   ],
// });

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};