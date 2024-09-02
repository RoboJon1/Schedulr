var userSchedule = [
    { class: "ECON 103", startTime: "10:00", endTime: "10:50", day: "MW" },
    { class: "ECON 103", startTime: "11:00", endTime: "11:50", day: "F" },
    { class: "MATH 241", startTime: "12:00", endTime: "12:50", day: "MWF" },
    { class: "MATH 241", startTime: "14:00", endTime: "14:50", day: "T" },
    { class: "GEOL 118", startTime: "13:00", endTime: "13:50", day: "MWF" },
    { class: "ENG 100", startTime: "13:00", endTime: "13:50", day: "TR" },
    { class: "CS 100", startTime: "15:00", endTime: "15:50", day: "F" },
    { class: "CS 124", startTime: "10:00", endTime: "10:50", day: "T" },
];

//addClass("CS 174", "14:00", "14:50", "MWF");

printSchedule();

function printSchedule() {
    daysOfWeek = ["M", "T", "W", "R", "F"];
    const convertDays = {
        "M" : "Monday",
        "T" : "Tuesday",
        "W" : "Wednesday",
        "R" : "Thursday",
        "F" : "Friday"
    }
    daysOfWeek.forEach((day) => {
        console.log(convertDays[day]);
        userSchedule.forEach((item) => {
            classDays = item.day.split("");
            if(classDays.includes(day)) {
                console.log(item.class + "  " + item.startTime + "-" + item.endTime);
            }
        });
    })
    
}

function convertTimes(event) {
    //converts time from xx:xx to minutes
    var start = event.startTime;
    var startTimes = start.split(":");
    var minuteStart = Number(startTimes[0]) * 60 + Number(startTimes[1]);

    var end = event.endTime;
    var endTimes = end.split(":");
    var minuteEnd = Number(endTimes[0]) * 60 + Number(endTimes[1]);
    
    return [minuteStart, minuteEnd];
}

function intersectCheck(range1, range2) {
    //takes two arrays and returns if they intersect or not
    //used to check for events that occur at the same time
    if(range1[0] > range2[1] || range2[0] > range1[1]) {
        return false;
    } else {
        return true;
    }
}

function addClass(newClass, newStartTime, newEndTime, newDay) {
    //checks for conflicts with other classes
    var newEvent = {class: newClass, startTime: newStartTime, endTime: newEndTime, day: newDay}
    days1 = newEvent.day.split("");

    //checks all previous classes for time conflicts
    var conflict = false;
    userSchedule.forEach((item) => {
        days2 = item.day.split("");
        if(days1.some(item => days2.includes(item))) {
            class1 = convertTimes(newEvent);
            class2 = convertTimes(item);
            if(intersectCheck(class1, class2)) {
                conflict = true;
            }
        }
    });

    if(conflict) {
        console.log("Class conflict!");
    } else {
        userSchedule.push(newEvent);
        console.log("Class add successful!")
    }
}


