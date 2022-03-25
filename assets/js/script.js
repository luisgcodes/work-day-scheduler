var content = {};
// current date/time
$("#currentDay").text(moment().format("dddd, MMMM Do"));
var presentTime = $("#currentTime").text(moment().format("hh:mm A"));

var hourColor = function(){
   
    var presentTime = moment().hour();
// distinguishes color for the time blocks
    $(".time-block").each(function(){
        var hourN = parseInt($(this).attr("id")); 
        if(hourN < presentTime){
            $(this).addClass("past");
        } else if (hourN===presentTime){
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
};
// save the description
var saveContent = function(id,text){
    content = JSON.parse(window.localStorage.getItem("content")) || {}
    $.each(content,function(hour,description){
        $('#' + hour).find("textarea").val(description);
    })
}
var saveEvent = function() {
    localStorage.setItem("content", JSON.stringify(content));
  };
var createEvent = function(id, text){
    content[id] = text;
    saveEvent();
}
// call functions
hourColor();
saveContent();

// save btn function
$(".saveBtn").click(function(){
    var parentElement = $(this).parent();
    var id = $(parentElement).attr("id"); 
    var text = $(parentElement).find("textarea").val().trim(); 
    createEvent(id,text);
});


