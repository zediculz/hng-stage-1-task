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
   const currentUTCElement = document.getElementById('currentUtc')
   const now = new Date();
   // set the time
   let first = new Date('1970-01-01');

   // assigning present utc time to now variable
   let end = new Date(`${now.getUTCFullYear()}-${now.getUTCMonth() + 1}-${now.getUTCDate()}`);

   let milliseconds = end - first

   currentUTCElement.innerHTML = `current UTC time in milliseconds: ${end - first}`
}

//current day
const currentDayElement = document.getElementById('currentDay')
const day = getCurrentDay()
currentDayElement.innerHTML = `current day of the Week: ${day.toLocaleUpperCase()}`

//get currentUTC milliseconds
getCurrentUTC()