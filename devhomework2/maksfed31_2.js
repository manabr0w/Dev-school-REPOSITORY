function Vector(components) {
  if (!Array.isArray(components)) throw "Improper argument; need an array object";
  const array = [...components].sort();

  return {
    array,

    add: (v) => new Vector(array.map((val, i) => val + v.array[i])),

    subtract: (v) => new Vector(array.map((val, i) => val - v.array[i])),

    dot: (v) => array.reduce((sum, val, i) => sum + val * v.array[i], 0),

    norm: () => Math.sqrt(array.reduce((norm, val) => norm + val ** 2, 0)),

    toString: () => `(${array.join()})`,

    equals: (v) => JSON.stringify(array) === JSON.stringify(v.array),
  };
}
