// Task: Mapping user with train and train details
// Create an array of 5 elements with train number, train name and train running days (eg: ["Mo", "Th", "Fr"])
// Create an array of some elements with from station, to station, fare, travel hours
// Create a function with the four arguments as train number, from, to, day
// The function should find the matching details for the given argument and return the result as an object
// The return object should have trainNumber, trainName, trainRunningDays, fare, thavelHours
// if the argument doesn't meet any details then return null
// Finaly call the function with the four arguments as train number, from, to, day


const arr1=[20658,"Ananthapuri Express",["Monday","Wednesday","Friday"]];
const arr2=["Chennai","Vallioor",450,12];
const [trainNumber,Name,[days]]=arr1;
const [from,to,fare,hours]=arr2;
function trainDetails(trainNum,from,to,day)
{
    const details=arr1.map((val) =>{
       return val.trainNumber===trainNum && val.from===from && val.to===to && val.days.includes(day)
    });
    if(details){
        return {Train_Number:trainNumber,Train_Name:Name,TrainRunning_Days:day,Fare:fare,Travel_Hours:hours };
    }
    else{
        return null;
    }
}

console.log(trainDetails(20658,"Chennai","Vallioor","Wednesday"));



