
class StepsCount
{
    constructor(N)
    {
        this.N = N;
    }

    combinations(result)
    {
        var nWays = [];
        nWays[0] = 1;
        nWays[1] = 2;

        for(var i = 2; i < this.N; i++) {
            nWays[i] = nWays[i - 1] + nWays[i - 2];
        }
        this.result= nWays[this.N - 1];
    
    }

    getResult()
    {
        return this.result;
    }
}

module.exports = StepsCount;