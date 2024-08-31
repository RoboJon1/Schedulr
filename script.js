const digits = [1, 2, 3, 4, 5, 6];
console.log(digits);
const digits2 = digits.map(number => number*2);
console.log(digits2);

const userSchedule = [
    { class: "ECON 103", startTime: "10:00", endTime: "10:50", day: "MW" },
    { class: "MATH 241", startTime: "12:00", endTime: "12:50", day: "MWF" },
    { class: "GEOL 118", startTime: "13:00", endTime: "13:50", day: "MWF" },
    { class: "ENG 100", startTime: "13:00", endTime: "13:50", day: "TR" },
    { class: "CS 100", startTime: "15:00", endTime: "15:50", day: "F" },
];

console.log(userSchedule[0].class);

var start = userSchedule[0].startTime;
var startTimes = start.split(":");
var minuteStart = Number(startTimes[0]) * 60 + Number(startTimes[1]);
console.log(minuteStart);

var end = userSchedule[0].endTime;
var endTimes = end.split(":");
var minuteEnd = Number(endTimes[0]) * 60 + Number(endTimes[1]);
console.log(minuteEnd);


/*

userSchedule.forEach(element => {
    startTime = element.startTime.sp
});

*/