// current day 
var currentDayEl = document.querySelector("#currentDay");
var currentDay = moment().format("dddd, MMMM Do");
currentDayEl.innerHTML = currentDay;

// audit for past, present, future
var auditEvents = function() {
    // get current time
    var now = moment().format("hA");
    console.log(now);

    // for each hour 
    $(".hour").each(function() {
    var hour = $(this).text().trim();
    console.log(hour);    
    if (now > hour) {
        $(".description").addClass("past");
    }
    else if (now < hour) {
        $(".description").addClass("future");
    }
    else {
        $(".description").addClass("present");
    }
    });
}

// click on save button
$(".saveBtn").on("click", function() {
    // loop through each text area
    $("textarea").each(function() {
        // get the value
        var eventText = $(this).val();
        // get the id
        var eventNum = $(this).attr("id");
        // save to local storage
        localStorage.setItem(eventNum, eventText);
    });
});

var loadEvents = function() {
    // get item from each
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#1").val(localStorage.getItem("1"));
    $("#2").val(localStorage.getItem("2"));
    $("#3").val(localStorage.getItem("3"));
    $("#4").val(localStorage.getItem("4"));
    $("#5").val(localStorage.getItem("5"));
};

loadEvents();
setInterval(function() {
    auditEvents();
}, (1000 * 60) * 60);