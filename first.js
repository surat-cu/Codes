//Question 1

function describeValue(x) {
    let value;

    if (x) value = "truthy";
    else value = "falsy";

    return `${typeof x} | ${value}`;
}
//console.log(describeValue(undefined));

//Question 2

function getDayType(day) {
    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}
//console.log(getDayType("sffr"))

//Question 3

function validateUsername(u) {
    if (u.length <4)
        return "Too Short"
    else if (u.includes(" "))
        return "No Space Allowed"
    else if (u.toLowerCase().includes("admin"))
        return "Reserved Word"
    else
        return "Available"
}
//console.log(validateUsername("a m"))

//Question 4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let t = 50;

    if (distance > 2) {
        t += (distance - 2) * 15;
    }

    t += waitingMinutes * 2;

    if (isNight) {
        t += t * 0.20;
    }

    return t;
}
//console.log(getCngFare(5, true,10));

//Question 5

const getChaseVerdict = (target, scored, ballsLeft) =>{

let runsNeeded = target - scored

if(runsNeeded<=0) return "Won"

if(ballsLeft<=0) return "Lost"

let requiredRate = (runsNeeded / ballsLeft) * 6, s

if(requiredRate<=6) s="Comfortable"
else if(requiredRate<=12) s="Tough"
else s="Almost Impossible"

return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${s}`
}
//console.log(getChaseVerdict(150,149,1))
