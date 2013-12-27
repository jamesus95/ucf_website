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

// The Events that go on the page

events.push(makeEvent(11, 26, 3, 2013, "6:00pm", "Come join us for a Thanksgiving feast at Dan Dameron's house (167 20th ave seattle, WA 98122). All are welcome free of charge (a.k.a. FREE FOOD!). Contact Dan if you need help finding a ride.", "Thanksgiving Feast", "11260600"));
events.push(makeEvent(12, 6, 6, 2013, "7:07pm", "This week we will be meeting at Dan Dameron's house (167 20th ave seattle, WA 98122) for our ugly sweater Christmas Party. Bring an ugly sweater, a friend, and a white elephant gift ($5 max), and come have fun.", "Christmas Party", "12060707"));
events.push(makeEvent(12, 13, 6, 2013, "All Day", "Happy End of Finals week. Have a nice break and see you next year!", "End of Finals Week", "12130000"));