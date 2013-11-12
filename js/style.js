var colsBorder = ["title", "about", "nav-container", "important_container", "thisweek_container", "events_container", "nav_container"];


for (var i = 0; i < 7; i++) {
	var html = $("#" + colsBorder[i]);
	html.css("padding-left", "12px");
	html.css("padding-right", "12px");
	html.css("border-style", "solid");
	html.css("border-width", "3px");
	html.css("border-color", "black");
	html.css("margin-bottom", "10px");
}

window.onresize = function(event) {
	size();
}

function size() {
	if ($(window).width() > 992) {
		var width = $("#events-thisweek").width();
		var percent = (width - 10) / width;
		var forth = percent * 100 / 4;
		$("#thisweek_container").css("width", forth * 3 + "%");
		$("#thisweek_container").css("margin-right", "10px");
		$("#events_container").css("width", forth + "%");
	} else {
		$("#thisweek_container").css("width", "100%");
		$("#thisweek_container").css("margin-right", "0");
		$("#events_container").css("width", "100%");
	}
}