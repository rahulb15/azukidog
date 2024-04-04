"use client";

import { ThemeProvider } from "next-themes";
import { ClientContextProvider } from "@/contexts/WalletConnectContext";
import { AccountProvider } from "@/contexts/AccountContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientContextProvider>
      <AccountProvider>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </AccountProvider>
    </ClientContextProvider>
  );
}
