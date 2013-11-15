var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDay() + 1;
var year = date.getFullYear();

var thisMonth = $("#thismonth_container");
var nextMonth = $("#nextmonth_container");
var swNextMonth = $("#sw-nextmonth_container");


function printLong(event) {
	var s = event.title + "<br>" +
	"Date: " + event.month + "/" + event.day + "/" + event.year + "<br>" +
	"Time: " +  event.startTime + "<br>" +
	event.descript;
	return s;
}

function writeEvents() {
	for (var i = 0; i < events.length; i++) {
		if (events[i].month == month) {
			thisMonth.append('<div><a class="event" id="' + events[i].id + '" href="event_dyn.htm">' + events[i].title + "</a> " + events[i].descript + "</div>");
		} else if (events[i].month == month + 1) {
			nextMonth.append('<div><a class="event" id="' + events[i].id + '" href="event_dyn.htm">' + events[i].title + "</a> " + events[i].descript + "</div>");
			swNextMonth.append('<div><a class="event" id="' + events[i].id + '" href="event_dyn.htm">' + events[i].title + "</a> " + events[i].descript + "</div>");
		}
	}
}

function displayEvent() {
	var e = document.cookie.split("; ");
	var id = "";
	for (var i = 0; i < e.length; i++) {
		if (e[i].slice(0,6) == "event=") {
			id = e[i].split("=")[1];
		}
	}
	var j = -1;
	for (var i = 0; i < events.length; i++) {
		if (events[i].id == id) {
			j = i;
		}
	}
	if (j > -1) {
		$("#content_row").append('<div class="col-xs-12"><div>' + printLong(events[j]) + "</div></div>");
		$("#map_dyn").html(events[j].title);
		$("title").html(events[j].title);
	}
}