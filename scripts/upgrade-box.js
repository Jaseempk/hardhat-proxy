const { ethers } = require("hardhat");

async function main() {
  const boxProxyAdmin = await ethers.getContract("BoxProxyAdmin");
  const transparentProxy = await ethers.getContract("Box_Proxy"); //implementation contract name with Proxy as suffix
  const boxV2 = await ethers.getContract("BoxV2");
  const boxV1Proxy = await ethers.getContractAt(
    "Box",
    transparentProxy.address
  );
  const versionV1 = await boxV1Proxy.version();
  console.log(versionV1);

  const upgradeTx = await boxProxyAdmin.upgrade(
    transparentProxy.address,
    boxV2.address
  );
  await upgradeTx.wait(1);
  const boxV2Proxy = await ethers.getContractAt(
    "BoxV2",
    transparentProxy.address
  );
  const versionV2 = await boxV2Proxy.version();
  console.log(versionV2);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
