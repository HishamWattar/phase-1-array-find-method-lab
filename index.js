const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
]

function superbowlWin(array) {
    const result = array.find(element => element.result === "W")
    return result ?  result.year : result
}

console.log(superbowlWin(record))