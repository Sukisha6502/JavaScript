// Task: Mapping user with train and train details
// Create an array of 5 elements with train number, train name and train running days (eg: ["Mo", "Th", "Fr"])
// Create an array of some elements with from station, to station, fare, travel hours
// Create a function with the four arguments as train number, from, to, day
// The function should find the matching details for the given argument and return the result as an object
// The return object should have trainNumber, trainName, trainRunningDays, fare, thavelHours
// if the argument doesn't meet any details then return null
// Finaly call the function with the four arguments as train number, from, to, day



const arr1=[{trainNum:65248,trainName:"Ananthapuri Express",trainRunningDays:["Monday","Wednesday","Friday"]},
            {trainNum:45290,trainName:"chennai Express",trainRunningDays:["Monday","Tuesday","Saturday"]},
            {trainNum:16649,trainName:"Mumbai Express",trainRunningDays:["sunday","Wednesday","Thursday"]},
            {trainNum:10211,trainName:"Guruvayur Express",trainRunningDays:["Sunday","Wednesday","Friday"]},
            {trainNum:22542,trainName:"Kanyakumari Express",trainRunningDays:["Tuesday","Wednesday","Saturday"]}];
const arr2=[{fromStation:"Chennai",toStation:"Vallioor",fare:469,travelHours:12},
            {fromStation:"kanyakumari",toStation:"chennai",fare:480,travelHours:12},
            {fromStation:"Tirunelveli",toStation:"mumbai",fare:690,travelHours:20},
            {fromStation:"Nagercoil",toStation:"Thiruvandram",fare:300,travelHours:3}];
function trainDetails(Number,from,to,day){
    const train=arr1.find((ele) => (ele.trainNum===Number && ele.trainRunningDays.includes(day)));
    if(train){
        const station=arr2.find((ele) => (ele.fromStation===from && ele.toStation===to));
    if(station){
        return {Train_Number:train.trainNum,Train_Name:train.trainName,TrainRunning_Days:train.trainRunningDays,Fare:station.fare,Travel_Hours:station.travelHours };
    }
    else{
        return null;
    }
} else{
    return null
}
}
console.log(trainDetails(65248,"Chennai","Vallioor","Wednesday"));







