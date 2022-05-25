const GAME_ADDRESS = "0x78268E5C70875Ab746917A1B3abb948874CF4B33";

async function main() {
  const game = await hre.ethers.getContractAt("Game3", GAME_ADDRESS);

  const tx = await game.win({
    value: hre.ethers.utils.parseUnits("1", "gwei"),
  });
  const receipt = await tx.wait();

  console.log(receipt);
  
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

