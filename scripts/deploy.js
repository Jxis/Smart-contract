const main = async () => {

  const Transactions = await hre.ethers.getContractFactory("Transactions"); // klasa koja kreira instance kontrakta
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address); // deplojovace se i dobicemo adresu smart contracta depjovonanog na blockchain network
}

const runMain = async() => {
  try{

    await main(); // poziva se main
    process.exit(0);
  } catch (error)
  {
    console.error(error);
    process.exit(1);

  }

}

runMain(); // prvo se ovo izvrsava 