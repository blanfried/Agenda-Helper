timeBlockArea = $(".timeBlockContainer");
timeBlockList = $("timeBlockLists");
if (localStorage.getItem("textSchedule") === null) {
  let textSchedule = [];
  let textScheduleStr = JSON.stringify(textSchedule);
  localStorage.setItem("textSchedule", textScheduleStr);
} else {
  let textSchedule = JSON.parse(localStorage.getItem("textSchedule"));
  textSchedule.forEach((textContent, i) => {
    if (textContent === null) return;
    let newItem = $(".blockListItem")[i];
    newItem.setAttribute("value", textContent);
  });
}


function currentDate() {
      let date = moment();
      $("#currentDay").text("Today is : " + date.format("dddd"));
    }
    
    timeOfDay = {
      0: 9,
      1: 10,
      2: 11,
      3: 12,
      4: 13,
      5: 14,
      6: 15,
      7: 16,
      8: 17,
    };
    function checkTime() {
      let listScheduleAr = document.querySelectorAll(".blockListItem");
      let currentTimeRaw = moment();
      let currentTime = currentTimeRaw.format("HH");
      Object.values(timeOfDay).forEach((hour, i) => {
        if (hour < currentTime) {
          let count = i + 1;
          $(".blockListItem:nth-child(" + count + ")").css(
            "background-color",
            "#a6a6a6"
          );
        } else if (hour == currentTime) {
          let count = i + 1;
          $(".blockListItem:nth-child(" + count + ")").css(
            "background-color",
            "#f5b0ab"
          );
        } else {
          let count = i + 1;
          $(".blockListItem:nth-child(" + count + ")").css(
            "background-color",
            "#b7f7bc"
          );
        }
      });
    }