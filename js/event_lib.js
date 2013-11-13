function makeEvent(monthi, dayi, timei, descriptioni, titlei) {
	var e = {
		month: monthi,
		day: dayi,
		startTime: timei,
		descript: descriptioni,
		title: titlei
	}
	return e;
}

var events = new Array();

events.push(makeEvent(11, 15, 1907,"Regular Meeting", "Friday UCF Meeting"));

