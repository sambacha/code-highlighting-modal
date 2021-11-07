import Web3Modal, { ICoreOptions } from 'web3modal';
import { Network, Web3Provider } from '@ethersproject/providers';
import create from 'zustand/esm';
import { useEffect } from 'react';

type State = {
  provider?: Web3Provider;
  account?: Account;
  network?: Network;
  web3Modal?: Web3Modal;
};

const useStore = create<State>((_set) => ({}));

type Account = string;
type ConnectWallet = (opts?: Partial<ICoreOptions>) => void;
type DisconnectWallet = () => void;
type UseWallet = () => State & {
  connect: ConnectWallet;
  disconnect: DisconnectWallet;
};
