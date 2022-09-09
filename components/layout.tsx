import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logo.jpg'
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  wallet,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig, Chain } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const mumbaiChain: Chain = {
  id: 80001,
  name: 'Mumbai',
  network: 'mumbai',
  nativeCurrency: {
    decimals: 18,
    name: 'Matic',
    symbol: 'MATIC',
  },
  rpcUrls: {
    default: 'https://rpc-mumbai.maticvigil.com/',
  },
  blockExplorers: {
    default: { name: 'mumbai', url: 'https://mumbai.polygonscan.com/' },
  },
  testnet: false,
}

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.polygon,
    mumbaiChain,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
      : []),
  ],
  [
    alchemyProvider({ apiKey: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC' }),
    publicProvider(),
  ]
);

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  chains,
});

const demoAppInfo = {
  appName: 'Rainbowkit Demo',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      wallet.argent({ chains }),
      wallet.trust({ chains }),
      wallet.ledger({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});


const Layout = ({children}) => {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider appInfo={demoAppInfo} chains={chains}>
                <nav className='flex justify-between items-center px-10' style={{padding:'10px 20px', background:'#b6c1c7'}}>
                    <Image src={logo} width={70} height={70}/>
                    <div className='basis-1/3 flex justify-between text-lg'>
                        <Link href="/" className='text-lg'>Home</Link>
                        <Link href="/create">Create</Link>
                        <Link href="/explore">Explore</Link>
                    </div>
                    <ConnectButton /> 
                </nav>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    )
}

export default Layout