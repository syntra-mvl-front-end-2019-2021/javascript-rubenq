function genBracketPairs(code)
{
    let bracketPairs = { valid: true, pairs: [] };
    for (let index = 0; index < code.length; index++)
    {
        let val = code[index];
        if (bracketPairs.valid)
        {
            if (val === '[')
            {
                bracketPairs.pairs.push([index]);
            }
            if (val === ']')
            {
                let pairResult = { valid: false, pairs: [] };
                for (let j = bracketPairs.pairs.length - 1; j >= 0; j--)
                {
                    let pair = bracketPairs.pairs[j];
                    if (!pairResult.valid && pair.length === 1)
                    {
                        pair.push(index);
                        pairResult.valid = true;
                    }
                    pairResult.pairs.push(pair);
                }
                bracketPairs = pairResult;
            }
        }
    }

    let pairsFiltered = [];
    for (const pair of bracketPairs.pairs)
    {
        if (pair.length === 1)
        {
            pairsFiltered.push(pair);
        }
    }
    bracketPairs.valid =
        bracketPairs.valid &&
        pairsFiltered.length === 0;

    return bracketPairs;
}


function findBrotherIndex(bracketPairs, curIndex)
{
    let result = -1;
    for (let i = 0; i < bracketPairs.pairs.length; i++)
    {
        let pair = bracketPairs.pairs[i];
        let foundIndex = pair.indexOf(curIndex); // 0
        if (foundIndex === -1)
        {
            result = result;
        }
        else
            {
            result = pair[1 - foundIndex];
            }
    }
    return result;
}