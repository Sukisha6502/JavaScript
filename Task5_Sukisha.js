// Task: SSLC mark categorize
// create an array of studend element with studentName, registerNum
// English subject Mark list for the students eg: (registerNum, scoredMark: 60, subjectMaxMark: 100)
// Tamil subject Mark list for the students (registerNum, scoredMark, subjectMaxMark:100)
// Maths subject Mark list for the students (registerNum, scoredMark, subjectMaxMark:100)    
// Physics subject Mark list for the students (registerNum, scoredMark, subjectMaxMark: 50)
// Chemistry subject Mark list for the students (registerNum, scoredMark, subjectMaxMark: 50)
// Botany subject Mark list for the students (registerNum, scoredMark, subjectMaxMark: 50)
// Zology subject Mark list for the students (registerNum, scoredMark, subjectMaxMark: 50)
// History subject Mark list for the students (registerNum, scoredMark, subjectMaxMark: 100)
// Civis subject Mark list for the students (registerNum, scoredMark, subjectMaxMark: 100)

// Task1 (studentsMarkData):
// The function overall output should be a object. The object keys will be students individual names
// Indiviudal student name will have an object with keys as below
// registerNum, studentName, english, tamil, maths, science, social, total, average, result as pass or fail
// Notes:
// Combine physics, chemisty, botany, zology subject into single as science and convert mark to 100
// Combine History, civis subject into single as social and convert mark to 100
// if the mark is equal or above 35, then he is passed

// Task2 (firstThreeStudents)
// create a function and pass studentsMarkData as the argument
// The function result should be an object with keys as 1st, 2nd, 3rd
// indivial keys will have the value as an object with keys as stuendName, registerNumber, total

// Task3 (Cash Price)
// create a function and pass the firstThreeStudents as an argument
// The functions should return an array of objects with key as cash, studentName
// Notes:
// The array order should first, second and third price
// Price Amount is 10000, 5000, 2500


const student = [
    { studentName: "Sukisha", registerNum: 4051 },
    { studentName: "Anisha", registerNum: 4006 },
    { studentName: "Priya", registerNum: 4045 },
    { studentName: "Maharani", registerNum: 4028 }
];
const English = [
    { registerNum: 4051, scoredMark: 78, subjectMaxMark: 100 },
    { registerNum: 4006, scoredMark: 89, subjectMaxMark: 100 },
    { registerNum: 4045, scoredMark: 82, subjectMaxMark: 100 },
    { registerNum: 4028, scoredMark: 50, subjectMaxMark: 100 },
];
const Tamil = [
    { registerNum: 4051, scoredMark: 96, subjectMaxMark: 100 },
    { registerNum: 4006, scoredMark: 91, subjectMaxMark: 100 },
    { registerNum: 4045, scoredMark: 93, subjectMaxMark: 100 },
    { registerNum: 4028, scoredMark: 95, subjectMaxMark: 100 },
];
const Maths = [
    { registerNum: 4051, scoredMark: 86, subjectMaxMark: 100 },
    { registerNum: 4006, scoredMark: 88, subjectMaxMark: 100 },
    { registerNum: 4045, scoredMark: 70, subjectMaxMark: 100 },
    { registerNum: 4028, scoredMark: 30, subjectMaxMark: 100 },
];
const Physics = [
    { registerNum: 4051, scoredMark: 42, subjectMaxMark: 50 },
    { registerNum: 4006, scoredMark: 35, subjectMaxMark: 50 },
    { registerNum: 4045, scoredMark: 45, subjectMaxMark: 50 },
    { registerNum: 4028, scoredMark: 25, subjectMaxMark: 50 },
];
const Chemistry = [
    { registerNum: 4051, scoredMark: 45, subjectMaxMark: 50 },
    { registerNum: 4006, scoredMark: 19, subjectMaxMark: 50 },
    { registerNum: 4045, scoredMark: 40, subjectMaxMark: 50 },
    { registerNum: 4028, scoredMark: 32, subjectMaxMark: 50 },
];
const Botany = [
    { registerNum: 4051, scoredMark: 47, subjectMaxMark: 50 },
    { registerNum: 4006, scoredMark: 12, subjectMaxMark: 50 },
    { registerNum: 4045, scoredMark: 47, subjectMaxMark: 50 },
    { registerNum: 4028, scoredMark: 40, subjectMaxMark: 50 },
];
const Zology = [
    { registerNum: 4051, scoredMark: 28, subjectMaxMark: 50 },
    { registerNum: 4006, scoredMark: 30, subjectMaxMark: 50 },
    { registerNum: 4045, scoredMark: 25, subjectMaxMark: 50 },
    { registerNum: 4028, scoredMark: 18, subjectMaxMark: 50 },
];
const History = [
    { registerNum: 4051, scoredMark: 78, subjectMaxMark: 100 },
    { registerNum: 4006, scoredMark: 32, subjectMaxMark: 100 },
    { registerNum: 4045, scoredMark: 82, subjectMaxMark: 100 },
    { registerNum: 4028, scoredMark: 68, subjectMaxMark: 100 },
];
const Civis = [
    { registerNum: 4051, scoredMark: 68, subjectMaxMark: 100 },
    { registerNum: 4006, scoredMark: 56, subjectMaxMark: 100 },
    { registerNum: 4045, scoredMark: 35, subjectMaxMark: 100 },
    { registerNum: 4028, scoredMark: 33, subjectMaxMark: 100 },
];

// Task:1

function studentsMarkData() {
    const result1 = {};
    student.forEach((ele) => {
        const englishMark = English.find((eng) => (ele.registerNum === eng.registerNum));
        const tamilMark = Tamil.find((tam) => (ele.registerNum === tam.registerNum));
        const mathsMark = Maths.find((mat) => (ele.registerNum === mat.registerNum));
        const phyMark = Physics.find((phy) => (ele.registerNum === phy.registerNum));
        const cheMark = Chemistry.find((che) => (ele.registerNum === che.registerNum));
        const botMark = Botany.find((bot) => (ele.registerNum === bot.registerNum));
        const zolMark = Zology.find((zol) => (ele.registerNum === zol.registerNum));
        let scienceMark = (phyMark.scoredMark + cheMark.scoredMark + botMark.scoredMark + zolMark.scoredMark) / 2;
        const hisMark = History.find((his) => (ele.registerNum === his.registerNum));
        const civMark = Civis.find((civ) => (ele.registerNum === civ.registerNum));
        let socialMark = (hisMark.scoredMark + civMark.scoredMark) / 2;
        let total = tamilMark.scoredMark + englishMark.scoredMark + mathsMark.scoredMark + scienceMark + socialMark;
        let pass = [tamilMark.scoredMark, englishMark.scoredMark, mathsMark.scoredMark, scienceMark, socialMark].every((mark) => mark >= 35) ? "Pass" : "Fail";
        const key = ele.studentName;
        result1[key] = {
            registerNum: ele.registerNum,
            studentName: ele.studentName,
            English: englishMark.scoredMark,
            Tamil: tamilMark.scoredMark,
            Maths: mathsMark.scoredMark,
            Science: scienceMark,
            Social: socialMark,
            Total: total,
            Average: total / 5,
            Result: pass
        };
    });
    return result1;
}
const output1 = studentsMarkData();
console.log(output1);

// Task:2

function firstThreeStudents(studentsMarkData) {
    const result2 = {};
    const mappingkeys = ["1st", "2nd", "3rd"];
    const studKeys = Object.keys(studentsMarkData);
    const array = studKeys.map((ele) => {
        const detail = studentsMarkData[ele];
        return { total: detail.Total, Name: ele, registerNum: detail.registerNum }
    });
    array.sort((a, b) => b.total - a.total)

    array.forEach((ele, index) => {
        if (index <= 2) {
            result2[mappingkeys[index]] = ele;
        }
    });
    return result2;
}
const output2 = firstThreeStudents(output1);
console.log(output2);

// Task:3

function cashPrice(firstThreeStudents) {
    const price = [["1st", 10000], ["2nd", 5000], ["3rd", 2500]];
    const result3 = price.map((ele) => {
        const priceDetails = firstThreeStudents[ele[0]];
        return { cash: ele[1], studentName: priceDetails.Name };
    });
    return result3;
}
const output3 = cashPrice(output2);
console.log(output3);