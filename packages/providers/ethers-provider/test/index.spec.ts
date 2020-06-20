import WalletConnectEthersProvider from "../src";

describe("WalletConnectEthersProvider", () => {
  it("instantiate successfully", () => {
    const provider = new WalletConnectEthersProvider();
    expect(provider).toBeTruthy();
  });
});
