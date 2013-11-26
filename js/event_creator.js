var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();
var weekDay = date.getDay() + 1;

var thisMonth = $("#thismonth_inner");
var nextMonth = $("#nextmonth_inner");
var swNextMonth = $("#sw-nextmonth_inner");
var thisWeek = $("#thisweek_inner");
var eventsContainer = $("#events_inner");
var calendar = $("#calendar_inner")


function printLong(event) {
	return event.title + "<br>" + "Date: " + event.month + "/" + event.day + "/" + event.year + "<br>" + "Time: " +  event.startTime + "<br>" + event.descript;
}

function printShort(event) {
	return event.month + "/" + event.day + " " + event.title;
}

// Event page
function writeEvents() {
	for (var i = 0; i < events.length; i++) {
		if (events[i].month == month && events[i].day >= day) {
			thisMonth.append('<div><a class="event" id="' + events[i].id + '" href="event_dyn.htm">' + events[i].month + "/" + events[i].day + " " + events[i].title + "</a><br>" + events[i].descript + "</div>");
		} else if (events[i].month == month + 1 || (events[i].month == 1 && month == 12)) {
			nextMonth.append('<div><a class="event" id="' + events[i].id + '" href="event_dyn.htm">' + events[i].month + "/" + events[i].day + " " + events[i].title + "</a></div>");
			swNextMonth.append('<div><a class="event" id="' + events[i].id + '" href="event_dyn.htm">' + events[i].month + "/" + events[i].day + " " + events[i].title + "</a><br></div>");
		}
	}
}

// Specific Event page
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

// Main page "this week" section
function thisWeekEvents() {
	for (var i = 0; i < events.length; i++) {
		if (events[i].day - events[i].weekDay == day - weekDay && events[i].day >= day) {
			thisWeek.append('<div><a class="event" id="' + events[i].id + '" href="htm/event_dyn.htm">' + events[i].month + "/" + events[i].day + " " + events[i].title + "</a><br>" + events[i].descript + "</div>");
		}
	}
}

// Main page "upcoming Events"
function eventsUpcoming() {
	for (var i = 0; i < events.length; i++) {
		if (events[i].month == month && events[i].day >= day) {
			eventsContainer.append('<div><a class="event" id="' + events[i].id + '" href="htm/event_dyn.htm">' + printShort(events[i]) + "</a></div>");
		}
	}
}

// Quarter Calender
function quarterCalendar() {
	var quarterStart = 9152013
	var quarterEnd = 12152013
	for (var i = 0; i < events.length; i++) {
		var d = "" + events[i].month + events[i].day + events[i].year;
		if (d > quarterStart && d < quarterEnd) {
			calendar.append('<div><a class="event" id="' + events[i].id + '" href="event_dyn.htm">' + events[i].month + "/" + events[i].day + " " + events[i].title + "</a>" + events[i].descript + "</div>");
		}
	}
}