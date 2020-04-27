import {ethers} from "ethers";
import {deployBySteps} from "../src.ts/deploy";

(async () => {
    if (process.env.ETH_NETWORK !== 'localhost') {
        console.error("This deploy script is only for localhost network");
        process.exit(1);
    }

    const provider = new ethers.providers.JsonRpcProvider(process.env.WEB3_URL);
    provider.pollingInterval = 100;

    const deployWallet = ethers.Wallet.fromMnemonic(process.env.TEST_MNEMONIC, "m/44'/60'/0'/0/0").connect(provider);
    await deployBySteps(deployWallet, "all", true, true);
})();
