//function to get current day

function getCurrentDay() {
   let day
   switch (new Date().getDay()) {
      case 0:
         day = "Sunday";
         break;
      case 1:
         day = "Monday";
         break;
      case 2:
         day = "Tuesday";
         break;
      case 3:
         day = "Wednesday";
         break;
      case 4:
         day = "Thursday";
         break;
      case 5:
         day = "Friday";
         break;
      case 6:
         day = "Saturday";
   }

   return day
}

//get current UTC Time
function getCurrentUTC() {
   const now = new Date();

   const milliseconds = now.getUTCMilliseconds();
   return `current UTc time in milliseconds: ${milliseconds}`
}

//dom manipulation
const currentDayElement = document.getElementById('currentDay')
const currentUTCElement = document.getElementById('currentUtc')

const day = getCurrentDay()
const _currentUTCTime = getCurrentUTC()

currentDayElement.innerHTML = `current day of the weeek: ${day.toLocaleUpperCase()}`
currentUTCElement.innerHTML = _currentUTCTime
