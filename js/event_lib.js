function makeEvent(month, day, weekDay, year, time, description, title, id) {
	var e = {
		month: month,
		day: day,
		weekDay: weekDay,
		startTime: time,
		descript: description,
		title: title,
		id: id,
		year: year
	}
	return e;
}

var events = new Array();
events.push(makeEvent(11, 15, 6, 2013, "7:07pm", "This week we will be...", "Friday UCF Meeting", "1115707"));
events.push(makeEvent(11, 22, 6, 2013, "7:07pm", "This week we will be...", "Friday UCF Meeting", "1122707"));
events.push(makeEvent(11, 29, 6, 2013, "7:07pm", "This week we will be...", "Friday UCF Meeting", "1122707"));
events.push(makeEvent(12, 10, 6, 2013, "7:07pm", "This week we will be...", "Friday UCF Meeting", "1210707"));