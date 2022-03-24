// // Current Day/Time
var schedule = {};
var presentDay = $("#currentDay").text(moment().format("dddd, MMMM Do"));
var presentTime = $("#currentTime").text(moment().format("hh:mm A"));


var presentTime = moment().hour();

var hourColor = function() {
    $(".description").each(function () {
        var hourN = parseInt($(this).attr("id"));
        if (hourN < presentTime) {
            $(this).addClass("past");
        } else if (hourN === presentTime) {
            $(this).addClass("present");
            $(this).removeClass("past");
            
        } else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
            
        }
    });
};

// var event = function

hourColor();
