// Task: Students price
// Create an array of student elements with rollnum, name, std, section and rank
// Create an array for each class with three price amount (1st, 2nd and 3rd price amount)
// Create an array for rank range with price (fromRank, toRank, price) eg(fromRank:1, toRank:15, price:1st) (fromRank:15, toRank:20, price:2nd)
// Create a function to return the list of students with rollnum, name, std, section, rank and priceAmount
// If the student's rank is not fall under the rank range with price, then that student should not be in the result list

const arr1 = [
  { RollNum: 4051, Name: "Sukisha", Std: "I", Section: "A", Rank: 2 },
  { RollNum: 3021, Name: "Makisha", Std: "III", Section: "B", Rank: 1 },
  { RollNum: 1029, Name: "Priya", Std: "II", Section: "C", Rank: 5 },
  { RollNum: 5012, Name: "Maha", Std: "III", Section: "A", Rank: 12 },
  { RollNum: 2011, Name: "Brindha", Std: "II", Section: "B", Rank: 7 },
  { RollNum: 1101, Name: "Anitha", Std: "III", Section: "C", Rank: 21 }
];
const arr2 = [
  { Std: "I", FirstPrice: 1000, SecondPrice: 500, ThirdPrice: 200 },
  { Std: "II", FirstPrice: 1500, SecondPrice: 1000, ThirdPrice: 500 },
  { Std: "III", FirstPrice: 2000, SecondPrice: 1500, ThirdPrice: 700 }
];
const arr3 = [
  { FromRank: 1, ToRank: 5, price: "FirstPrice" },
  { FromRank: 5, ToRank: 10, price: "SecondPrice" },
  { FromRank: 10, ToRank: 15, price: "ThirdPrice" }
];

function studentDetails() {
  const result = arr1.map((arr1Ele) => {
    const priceRange = arr3.find((ele) => ((arr1Ele.Rank >= ele.FromRank) && (arr1Ele.Rank <= ele.ToRank)))
    const priceAmount = arr2.find((arr2Ele) => (arr1Ele.Std === arr2Ele.Std))
    if (priceRange !== undefined) {
      const priceKey = priceRange.price;
      return {
        RollNum: arr1Ele.RollNum,
        Name: arr1Ele.Name,
        Std: arr1Ele.Std,
        Section: arr1Ele.Section,
        Rank: arr1Ele.Rank,
        RankObject: priceKey,
        PriceAmount: priceAmount[priceKey]
      }
    }
  });
  const answer = result.filter((ele) => ele != undefined)
  return answer;
}
const output = studentDetails();
console.log(output);













