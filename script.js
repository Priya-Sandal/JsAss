let myDate = new Date();
let myDay = myDate.getDay();

let weekday = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
document.write("Today is : " + weekday[myDay]);
document.write("<br/>");

// get hour value.
let hours = myDate.getHours();
let ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12;
let minutes = myDate.getMinutes();
minutes = minutes < 10 ? '0' + minutes : minutes;
let myTime = hours + " " + ampm + " : " + minutes + 
    " : " + myDate.getMilliseconds();
document.write("\t Current time is : " + myTime);

