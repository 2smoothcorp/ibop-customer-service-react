'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function ReactQueryProviders({ children }: { children: React.ReactNode }) {
    const [client] = useState(new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                refetchOnMount: true,
                retry: false,
            }
        }
    }));

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
} 