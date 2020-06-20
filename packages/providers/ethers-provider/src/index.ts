import { JsonRpcProvider } from "@ethersproject/providers";
import WCRpcConnection from "@walletconnect/rpc-connection";
import { IWCRpcConnectionOptions } from "@walletconnect/types";

class WalletConnectEthersProvider extends JsonRpcProvider {
  constructor(opts?: IWCRpcConnectionOptions) {
    super(new WCRpcConnection(opts));
  }

  get isWalletConnect() {
    return true;
  }
}

export default WalletConnectEthersProvider;
