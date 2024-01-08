// code your solution here
function superbowlWin(record){
   let yearWon = record.find((record) => record.result === "W")
   if (yearWon) {
    return yearWon.year
   }
}