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

  return (
    <StarknetConfig
      connectors={injected}
      chains={[mainnet, sepolia]}

      provider={jsonRpcProvider({
        rpc: () => ({ nodeUrl: process.env.NEXT_PUBLIC_RPC_URL }),
      })}
      explorer={starkscan}
      autoConnect
    >
      {children}
    </StarknetConfig>
  );
}
