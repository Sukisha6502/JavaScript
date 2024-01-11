// Task: Student detail
// create an array of studend element with rollNo, studentName, std, dob
// create a function with one argument to handle insert, update and delete
// Condition 1: 
// if the argument passed as an object with studentName, std, dob, then considered as insert. Because it doesn't has rollNo
// insert the object as a new student in the list
// Make sure the list is in ascending order
// Condition 2:
// if the argument passed as an object with rollNo, studentName, std, dob then considered as update. Because it has rollNo
// update the correct matching rollNo object with give object details
// Make sure the list is in ascending order
// condition 3:
// if the argument passed as a number, then it is considered as delete. Because the number is rollNo
// Remove the corresponding rollNo object from the list


const student = [
    { rollNo: 1, studentName: "Abisha", std: "III", dob: "24/5/2014" },
    { rollNo: 2, studentName: "Jenisha", std: "III", dob: "5/3/2014" },
    { rollNo: 3, studentName: "Makisha", std: "III", dob: "10/12/2014" },
    { rollNo: 4, studentName: "Sukisha", std: "III", dob: "6/5/2014" }
];
function studentDetails(values) {
    if (typeof values == 'number') {
        const index = student.findIndex((student) => student.rollNo === values);
        student.splice(index, 1);
        student.sort((a, b) => a.studentName < b.studentName ? -1 : 1);
        return student;
    }
    else if ('rollNo' in values && 'studentName' in values && 'std' in values && 'dob' in values) {
        const index = student.findIndex((student) => student.rollNo === values.rollNo);
        student[index] = { rollNo: values.rollNo, studentName: values.studentName, std: values.std, dob: values.dob };
        student.sort((a, b) => a.studentName < b.studentName ? -1 : 1);
        return student;
    }
    else if (typeof values === 'object') {
        if ('studentName' in values && 'std' in values && 'dob' in values) {
            let length = student.length;
            student.push({
                rollNo: Number(length + 1), studentName: values.studentName, std: values.std, dob: values.dob
            });
            student.sort((a, b) => a.studentName < b.studentName ? -1 : 1);
            return student;
        }

    }

}
const output1 = studentDetails({ studentName: "Anisha", std: "III", dob: "12/6/2014" });
console.log(output1);
const output2 = studentDetails({ rollNo: 2, studentName: "Subiksha", std: "III", dob: "12/6/2014" });
console.log(output2);
const output3 = studentDetails(5);
console.log(output3);