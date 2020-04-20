

/*
	Simple browser dialog using JQuery
	By Adi Ancau

*/

var offsetX = 0;
var offsetY = 0;


// when the document finished loading
$(document).ready(function() {

	// bind the show button to showDialog function
	$("#show-button").click(function() { showDialog(); });

	// bind the close button to close dialog finction
	$("#close-button").click(function() { closeDialog(); });

	$("#top-bar").mousedown(function() {
		console.log("#top-bar -> mousedown event called");
		original = $("#dialog").position();
		offsetX = event.pageX - original.left;
		offsetY = event.pageY - original.top;
		console.log("");
		$("html").mousemove(function(event) { updateDialogPosition(event); })
	})


	$("#top-bar").mouseup(function() {
		console.log("#top-bar -> mouseupevent called");
		$("html").off("mousemove");
	})

})


function updateDialogPosition(event) {
	console.log(event.pageX + " " + event.pageY);
	$("#dialog").css({left: event.pageX - offsetX + "px", top: event.pageY - offsetY + "px"});
}

function showDialog() {
	if ($("#dialog").is(":hidden")) {
		console.log("Dialog shown");
		$("#dialog").show();
	}
}


function closeDialog() {
	if ($("#dialog").is(":visible")) {
		console.log("Dialog closed");
		$("#dialog").hide();
	}
}