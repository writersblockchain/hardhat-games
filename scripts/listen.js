const GAME_ADDRESS = "0x78268E5C70875Ab746917A1B3abb948874CF4B33";

async function main() {
  const game = await hre.ethers.getContractAt("IGame", GAME_ADDRESS);

  game.on('Winner', (addr) => {
    console.log(addr + ' won!');
  });
}

main();
