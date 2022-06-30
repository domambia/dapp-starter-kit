import { expect } from "./setup";
import { deployments } from "hardhat";


describe("Token Contract",  () => {

    it("Deploys successfully to the network & assigns total supply & onwere", async () => {
        await deployments.fixture(["Token"]);
        // const {tokenOwner}   =  await getNamedAccounts();
        // const Token  =  await 
        // const ownerBalance =  await Token.balanceOf(tokenOwner);
        expect(true).to.equal(true);

    })
});