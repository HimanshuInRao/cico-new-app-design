let getFullDate = () => {
  let day = new Date();
  let dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = (document.getElementById("currentDay").innerHTML =
    dayArray[day.getDay()]);

  let dateCombinationArr = ["st", "nd", "rd", "th"];
  let date = "";

  if (day.getDate() == 1) {
    date += day.getDate() + dateCombinationArr[0];
  } else if (day.getDate() == 2) {
    date += day.getDate() + dateCombinationArr[1];
  } else if (day.getDate() == 3) {
    date += day.getDate() + dateCombinationArr[2];
  } else {
    date += day.getDate() + dateCombinationArr[3];
  }
  let monthPicker = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let fullDate =
    date + " " + monthPicker[day.getMonth()] + " " + day.getFullYear();
  let currentDate = (document.getElementById("currentDate").innerHTML =
    fullDate);
};
getFullDate();

let clock = true;
let clockInImg = document.getElementById("clockInImg");
let clockIn = () => {
  let statusClockIn = document.getElementById("statusClockIn");
  let clockInBtn = document.getElementById("clock-in-btn").classList;
  if (!clock) {
    clockInBtn.add("animeOut");
    clockInBtn.remove("anime");
    statusClockIn.innerHTML = "Clock In";
    clockInImg.src = "./assets/clock-feature.png";
    clock = true;
  } else {
    clockInBtn.add("anime");
    clockInBtn.remove("animeOut");
    clockInImg.src = "./assets/work.png";
    statusClockIn.innerHTML = "Clock Out";
    clock = false;
  }
};

let breakIn = false;
let BreakInImg = document.getElementById("BreakInImg");
let breakBtn = document.getElementById("break-In");
let BreakStart = () => {
  let statusClockIn = document.getElementById("statusClockIn");
  // let breakIn = document.getElementById("break-In").classList;
  if (!breakIn) {
    document.getElementById("clock-in-btn").style.scale = 0;
    setTimeout(() => {
      document.getElementById("clock-in-btn").style.display = "none";
    }, 300);
    setTimeout(() => {
      breakBtn.style = "width : 170px ; height : 170px";
      BreakInImg.style = "width : 90px ; height : 90px";
      document.getElementById("status-break").style.display = "block";
    } , 390);
    breakIn = true;
  } else {
    document.getElementById("clock-in-btn").style.scale = 1;
    setTimeout(() => {
      document.getElementById("clock-in-btn").style = "display : block ; scale : 0";
      setTimeout(() => {
        document.getElementById("clock-in-btn").style = "scale : 1";
      } , 100);
    }, 510);
    setTimeout(() => {
      breakBtn.style = "width : 50px ; height : 50px";
      BreakInImg.style = "width : 35px ; height : 35px";
      document.getElementById("status-break").style.display = "none";
    } , 100);
    breakIn = false;
  }
};
