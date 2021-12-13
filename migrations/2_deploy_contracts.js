const Transaction = artifacts.require("Transaction");
const user = artifacts.require("user");

module.exports = function(deployer) {
  // Code goes here...
  deployer.deploy(Transaction);

  deployer.deploy(user);
};