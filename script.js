var dailyHours = [
    "hour-9",
    "hour-10",
    "hour-11",
    "hour-12",
    "hour-13",
    "hour-14",
    "hour-15",
    "hour-16",
    "hour-17"
];
var timeRightnow = moment().format('MMMM Do YYYY, h:mm:ss a');
var hourRightnow = moment().hours();

$(document).ready(function () {
    $(".saveBtn").on("click", function () { // get nearby values
        var dailyHours = $(this).parent().attr("id");
        var colDescription = $("#"+dailyHours+" .description").val();
        // save in localStorage
        localStorage.setItem(dailyHours, colDescription);
    });


    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    populateHour();
    function populateHour() {
        var calendarRows = $(".row");
        // for (var i = 0; i < calendarRows.length; i++) {

        $.each(calendarRows, function (index, value) {
            var timeBlockId = $(this).attr("id") // grab the id... like "hour-9"
            var timeBlockIdAsArray = timeBlockId.split("-") // ["hour", "9"]
            var idNum = timeBlockIdAsArray[1]
            // "9"
             var blockHour = parseInt(idNum)//turn the string into a number

            if (blockHour < hourRightnow) {
                $(this).addClass("past");
            } else if (blockHour === hourRightnow) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
        // }
    };

    // localStorage.setItem(hourElement, dailyHours);

    // upDate();


    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));


});
