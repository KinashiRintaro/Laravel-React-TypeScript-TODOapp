import React from "react";
import Router from "../Router/router";
import {QueryClient, QueryClientProvider} from "react-query";

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                // エラー時に何回取得するか（今回は取得しない）
                retry: false
            }, 
            mutations: {
                retry: false
            }
        }
    });
    return (
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    )
}

export default App;
