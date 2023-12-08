import "@/styles/globals.css";
import { useContext, useState } from "react";
import type { AppProps } from "next/app";
import HeaderComponent from "@/components/HeaderComponent/Header";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <HeaderComponent />
          <main>
            <Component {...pageProps}></Component>
          </main>
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}
