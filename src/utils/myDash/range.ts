/*
	* range(4); // => [0, 1, 2, 3]
	* range(-4); // => [0, -1, -2, -3]
	* range(1, 5); // => [1, 2, 3, 4]
	* range(0, 20, 5); // => [0, 5, 10, 15]
	* range(0, -4, -1); // => [0, -1, -2, -3]
	* range(1, 4, 0); // => [1, 1, 1]
	* range(0); // => []
*/

function rangeHelper(end,start=0, step?) {
    const endIsNegative = end < 0
    step = step ?? (endIsNegative ? -1 : 1)


    console.log(end,start,step,endIsNegative)
    const rangeList = []
    let count = start;
    if(step===0){
        for(let k = 0; k < Math.abs(end-start);k++){
            rangeList.push(start)
        }
        return rangeList
    }
    for (let k = start; endIsNegative ? k>end : k<end ;k+=step){
        console.log(k)
        rangeList.push(k)
    }
    return  rangeList
}

function range(start,end?, step?) {
    const lengthOfArgs = arguments.length
    console.log(lengthOfArgs)
    if (lengthOfArgs===1) return rangeHelper(arguments[0])
    else if (lengthOfArgs===2) return rangeHelper(arguments[1],arguments[0])
    else if (lengthOfArgs===3) {
        return rangeHelper(arguments[1],arguments[0],arguments[2])}
}

console.log(range(0, -4, -1),range(0, 20, 5),range(1, 4, 0),range(1, 5),range(-4),range(0))