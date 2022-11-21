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