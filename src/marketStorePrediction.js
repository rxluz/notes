function getSmallerNeighbors({ data, index, distance, value }) {
  const leftIndex = index - distance
  const leftValue = data[leftIndex]
  const hasLeft = !!leftValue

  const outputLeft = { value: leftValue, index: leftIndex }

  const rightIndex = index + distance
  const rightValue = data[rightIndex]
  const hasRight = !!rightValue

  const outputRight = { value: rightValue, index: rightIndex }

  if (hasLeft && !hasRight) {
    return outputLeft
  }

  if (!hasLeft && hasRight) {
    return outputRight
  }

  if (hasLeft && hasRight) {
    return leftValue < rightValue || leftValue < value ? outputLeft : outputRight
  }

  return { value: data[index], index }
}

function getClosestSmallIndex({ data, index, value }) {
  let distance = 1
  const totalItemsRight = data.length - index - 1
  const totalItemsLeft = data.length - totalItemsRight - 1

  const longerDistancePossible = totalItemsRight > totalItemsLeft ? totalItemsRight : totalItemsLeft

  while (distance <= longerDistancePossible) {
    const { value: candidateValue, index: candidateIndex } = getSmallerNeighbors({
      data,
      index,
      distance,
      value,
    })

    if (candidateValue < value) {
      return candidateIndex
    }

    distance++
  }

  return -1
}

const removeInvalidNumbers = (num) => num !== Infinity && num > 0
const toNumber = (str) => Math.floor(Number(str))
const getDayNumber = (index) => (index > -1 ? ++index : -1)

const predictAnswer = (stockData, queries) =>
  queries
    .map(toNumber)
    .filter(removeInvalidNumbers)
    .map((query) =>
      getClosestSmallIndex({
        data: stockData,
        index: query - 1,
        value: stockData[query - 1],
      }),
    )
    .map(getDayNumber)

console.log(predictAnswer([5, 6, 8, 4, 9, 10, 8, 3, 6, 4], [3, 1, 8]))
//console.log(predictAnswer([5], [1]))

/*

distance:
7 (right)
9 (right)
7 (left)




2
4
-1

*/
