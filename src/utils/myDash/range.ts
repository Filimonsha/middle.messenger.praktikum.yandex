function rangeHelper(end, start = 0, step?) {
  const endIsNegative = end < 0;
  step = step ?? (endIsNegative ? -1 : 1);

  const rangeList = [];
  const count = start;
  if (step === 0) {
    for (let k = 0; k < Math.abs(end - start); k++) {
      rangeList.push(start);
    }
    return rangeList;
  }
  for (let k = start; endIsNegative ? k > end : k < end; k += step) {
    rangeList.push(k);
  }
  return rangeList;
}

function range(start, end?, step?) {
  const lengthOfArgs = arguments.length;
  if (lengthOfArgs === 1) return rangeHelper(arguments[0]);
  if (lengthOfArgs === 2) return rangeHelper(arguments[1], arguments[0]);
  if (lengthOfArgs === 3) {
    return rangeHelper(arguments[1], arguments[0], arguments[2]);
  }
}
