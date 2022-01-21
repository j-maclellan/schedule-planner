// events array
var events = {
    eventsArr: []
};

// current day 
var currentDayEl = document.querySelector("#currentDay");
var currentDay = moment().format("MMMM Do, YYYY");
currentDayEl.innerHTML = currentDay;

$(".description").on("click", "span", function() {
    var text = $(this)
        .text()
        .trim();
    console.log(text);
    
    var textInput = $("<textarea>")
        .addClass("col-10")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$(".saveBtn").on("click", function() {
    var text = $("textarea")
        .val();
    console.log(text)
    // events[eventsArr][index].text = text;
    // saveEvents();

    // recreate the span
    var textSpan = $("<span>")
        .addClass("col-10")
        .text(text);

    // replace textarea with p
    $("textarea").replaceWith(textSpan);
    
});

var saveEvents = function() {
    localStorage.setItem("events", JSON.stringify(events));
};

var loadEvents = function() {
    events = JSON.parse(localStorage.getItem("events"));

    if (!events) {
        events = {}
    }
}