"use client";
import { sepolia, mainnet } from "@starknet-react/chains";
import {
  argent,
  braavos,
  jsonRpcProvider,
  StarknetConfig,
  starkscan,
  useInjectedConnectors,
} from "@starknet-react/core";


interface StarknetProviderProps {
  children: React.ReactNode;
}

export function StarknetProvider({ children }: StarknetProviderProps) {
  const { connectors: injected } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "always",
    order:"random"
  });

//   const connectors = [
//     ...injected,
//     new WebWalletConnector({ url: "https://web.argent.xyz" }),
//     new ArgentMobileConnector(),
//   ];

  return (
    <StarknetConfig
      connectors={injected}
      chains={[mainnet, sepolia]}

      provider={jsonRpcProvider({
        rpc: (chain) => ({ nodeUrl: process.env.NEXT_PUBLIC_RPC_URL }),
      })}
      explorer={starkscan}
      // autoConnect
    >
      {children}
    </StarknetConfig>
  );
}
