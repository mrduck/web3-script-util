const fs = require('fs');
const { Keypair } = require('@solana/web3.js');

// 配置生成的钱包数量
const WALLET_COUNT = 10;

// 生成钱包并保存到文件
function generateSolWallets() {
    let wallets = [];

    for (let i = 0; i < WALLET_COUNT; i++) {
        const newPair = Keypair.generate();
        wallets.push({
            publicKey: newPair.publicKey.toString(),
            privateKey: [...newPair.secretKey] // 将Uint8Array转换为数组
        });
    }

    // 将钱包信息保存到文件
    fs.writeFileSync('solWallets.json', JSON.stringify(wallets, null, 4));
    console.log(`成功生成并保存了 ${WALLET_COUNT} 个Solana钱包到 solWallets.json`);
}

// 运行函数
generateSolWallets();