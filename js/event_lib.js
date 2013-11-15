function makeEvent(monthi, dayi, yeari, timei, descriptioni, titlei, idi) {
	var e = {
		month: monthi,
		day: dayi,
		startTime: timei,
		descript: descriptioni,
		title: titlei,
		id: idi,
		year: yeari
	}
	return e;
}

var events = new Array();
events.push(makeEvent(11, 15, 2013, "7:07pm", "Regular Meeting", "Friday UCF Meeting", "1115707"));
events.push(makeEvent(11, 22, 2013, "7:07pm", "Regular Meeting 2", "Friday UCF Meeting 2", "1122707"));
events.push(makeEvent(12, 10, 2013, "7:07pm", "Regular Meeting", "Friday UCF Meeting", "1210707"));