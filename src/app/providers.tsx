"use client";

import { ThemeProvider } from "next-themes";
import { ClientContextProvider } from "@/contexts/WalletConnectContext";
import { AccountProvider } from "@/contexts/AccountContext";
import { EckoWalletContextProvider } from "@/contexts/EckoWalletContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientContextProvider>
      <EckoWalletContextProvider>
        <AccountProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        </AccountProvider>
      </EckoWalletContextProvider>
    </ClientContextProvider>
  );
}
