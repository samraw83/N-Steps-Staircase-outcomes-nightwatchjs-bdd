const {client}=require('nightwatch-cucumber')

module.exports=function(){
    
    this.When(/^User enters the staircase steps count as "([^"]*)"$/, function stairsCombination(stepsCount){
    
    var nWays = [];
    nWays[0] = 1;
    nWays[1] = 2;

    for(var i = 2; i < stepsCount; i++) 
        {
            nWays[i] = nWays[i - 1] + nWays[i - 2];
        }

    return nWays[stepsCount - 1];
    
    });
    
    this.Then(/^Users gets the possible outcomes count as "([^"]*)"$/, function (){
    var numOfWays = stairsCombination(10);
    console.log(numOfWays);

    //Assert the output value is corrct (using chai module)
    var outPutValue = chai.expect;
    outPutValue(numOfWays).to.equal(89);

    
    });
}