///// SAMPLE DATA FOR YOUR EXPERIMENTATION PLEASURE (do not modify)
const fruits = {
    apple: { color: "red", mass: 100 },
    grape: { color: "red", mass: 5 },
    banana: { color: "yellow", mass: 183 },
    lemon: { color: "yellow", mass: 80 },
    pear: { color: "green", mass: 178 },
    orange: { color: "orange", mass: 262 },
    raspberry: { color: "red", mass: 4 },
    cherry: { color: "red", mass: 5 },
  }

  interface Dict<T> {
    [k: string]: T
  }



  function mapDict<T, S>(inputDict: Dict<T>, mapFunction: (original: T, key: string) => S): Dict<S> {
    const outDict: Dict<S> = {};
    for(let k of Object.keys(inputDict)) {
        const thisVal = inputDict[k];
        outDict[k] = mapFunction(thisVal, k);
    }

    return outDict;
  }

 