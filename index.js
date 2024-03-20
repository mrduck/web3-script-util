const { ethers } = require('ethers');
const fs = require('fs');

// 配置生成的钱包数量
const WALLET_COUNT = 10;

// 生成钱包并保存到文件
function generateWallets() {
    let wallets = [];

    for (let i = 0; i < WALLET_COUNT; i++) {
        const wallet = ethers.Wallet.createRandom();
        wallets.push({
            address: wallet.address,
            privateKey: wallet.privateKey
        });
    }

    // 将钱包信息保存到文件
    fs.writeFileSync('wallets.json', JSON.stringify(wallets, null, 2));
    console.log(`成功生成并保存了 ${WALLET_COUNT} 个钱包到 wallets.json`);
}

// 运行函数
generateWallets();