function rangeHelper(end:number,start?:number, step?:number) {
    const endIsNegative = end < 0
    step = step ?? (endIsNegative ? -1 : 1)
    const rangeList = []
    if(step===0){
        for(let k = 0; k < Math.abs(end-start);k++){
            rangeList.push(start)
        }
        return rangeList
    }
    for (let k = start; endIsNegative ? k>end : k<end ;k+=step){
        rangeList.push(k)
    }
    return  rangeList
}

function range(start:number,end?:number, step?:number) {
    return rangeHelper(arguments[1],arguments[0],arguments[2])
}

