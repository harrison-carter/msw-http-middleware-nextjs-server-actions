// import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// export const server = setupServer(...handlers);

// server.events.on("request:start", ({ request }) => {
//   console.log("Outgoing:", request.method, request.url);
// });

// server.events.on('request:unhandled', ({ request }) => {
//     console.log('Outgoing request:', request.method, request.url)
// });


import { createServer } from '@mswjs/http-middleware'
export const httpServer = createServer(...handlers)
