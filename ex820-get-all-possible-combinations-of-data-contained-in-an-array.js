// Get-all-possible-combinations-of-data-contained-in-an-array

// Potencia de un conjunto P(A)
// {1,2,3} = {{}, {1}, {2}, {3}, {1,2}, {2,3}, {1,3}, {1,2,3}}

function getPowerSet(arr) {
  if (!Array.isArray(arr)) {
    throw TypeError("The argument arr must be an array");
  }

  return arr.reduce(
    (acc, curr) => acc.concat(acc.map((data) => [curr].concat(data))),
    [[]]
  );
}

try {
  console.log(getPowerSet([1, 2, 3]));
} catch (error) {
  console.log(`Error: ${error.message}`);
}
