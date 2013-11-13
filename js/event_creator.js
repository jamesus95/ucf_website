var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDay() + 1;

var thisMonth = $("#thismonth_container");
var nextMonth = $("#nextmonth_container");
var swNextMonth = $("#sw-nextmonth_container");

function writeEvents() {

	for (var i = 0; i < events.length; i++) {
		if (events[i].month == month) {
			thisMonth.append("<div>" + '<a class="event" href="event_dyn.htm">' + events[i].title + "</a>" + events[i].descript + "</div>");
		} else if (events[i].month == month + 1) {
			nextMonth.append("<div>" + events[i].descript + "</div>");
			swNextMonth.append("<div>" + events[i].descript + "</div>");
		}
	}

}