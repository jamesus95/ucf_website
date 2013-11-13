function makeEvent(monthi, dayi, timei, descriptioni, titlei, idi) {
	var e = {
		month: monthi,
		day: dayi,
		startTime: timei,
		descript: descriptioni,
		title: titlei,
		id: idi
	}
	return e;
}

function printLong(event) {
	var s = "";
}

var events = new Array();

events.push(makeEvent(11, 15, 1907, "Regular Meeting", "Friday UCF Meeting", "11151907"));

