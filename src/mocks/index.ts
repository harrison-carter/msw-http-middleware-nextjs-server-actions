export async function setupMocks() {
  console.log("setupMocks called");
  if (typeof window !== "undefined") {
    console.log("window is not undefined");
    const { worker } = await import("./browser");

    worker.start({
      serviceWorker: {
        url: "/order/mockServiceWorker.js",
      },
    });
  } else {
    console.log("window is undefined");
    //   const { server } = await import('./server');

    //   server.listen({
    //     onUnhandledRequest(request) {
    //         console.log('Unhandled %s %s', request.method, request.url)
    //       },
    //   });

    const { httpServer } = await import("./server");
    if (!httpServer.listening) {
      httpServer.listen(9000);
    }
  }
}
