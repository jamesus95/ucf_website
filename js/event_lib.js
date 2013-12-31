function makeEvent(month, day, weekDay, year, time, description, title, location, id) {
	var e = {
		month: month,
		day: day,
		weekDay: weekDay,
		startTime: time,
		descript: description,
		title: title,
		id: id,
		year: year,
		location: location
	}
	return e;
}

var events = new Array();

// The Events that go on the page

events.push(makeEvent(1,10,6,2013,"7:07pm","This week after our weekly meeting we will be having Game Night.  We will be playing games like Bang, Apples to Apples, and Carcassonne.  Come worship with us and then enjoy some fun board games in the HUB.", "Friday UCF: Game Night", "Seig (7:07pm) The HUB (After Event)", "01100707"));
events.push(makeEvent(1,11,7,2013,"9:30am","On Saturday Morning we will be playing Flag-ish Football at Judkins Park.  If you want to go and need a ride call or text Dan at 206-660-5541","Flag-ish Football","Judkins Park","01110930"));
events.push(makeEvent(1,17,6,2013,"7:07pm","This week after our weekly meeting we will be having the 'Bigger or Better Scavenger Hunt'.  The hunt will take you all over campus and your team will be scored on completion and comedic value so be creative.", "Friday UCF: Bigger or Better Scavenger Hunt", "Seig (7:07pm) Seig (After Event)", "01170707"));
events.push(makeEvent(1,24,6,2013,"4:30pm","This weekend we will be going on our Winter Retreat.  It will cost $87 and we will return Sunday around 1:00pm.  At Retreat we will sing songs, play games, and generally have fun.","UCF Winter Retreat","''LOCATION''","01240430"));
events.push(makeEvent(1,31,6,2013,"7:07pm","This week after our weekly meeting we will be going to One Life Church to play Raptor Tag.  Come run around in a large dark building with us and play classic games like Grogg.","Friday UCF: Raptor Tag","Seig (7:07pm) One Life Church (After Event)","01310707"));
events.push(makeEvent(2,7,6,2013,"7:07pm","This week after our weekly meeting we will be having the UCF Olympics.","Friday UCF: UCF Olympics","Seig (7:07pm) LOCATION (After Event)","02070707"));
events.push(makeEvent(2,14,6,2013,"7:07pm","This week after our weekly meeting we will behaving Valentine's Day Dessert.  If you like Sweets and/or don't have a date come hang out with us.","Friday UCF: Valentine's Day Dessert","Seig (7:07pm) LOCATION (After Event)","02140707"));
events.push(makeEvent(2,21,6,2013,"7:07pm","This week after our weekly meeting we will be splitting up and having Guys and Girls night.  The girls will be doing girl stuff at... and the guys will be doing guy stuff at Dan's house.","Friday UCF: Guy/Gals Night","Seig (7:07pm) Dan's House/... (After Event)","02210707"));
events.push(makeEvent(2,28,6,2013,"7:07pm","This week after our weekly meeting we are going to ... for an Airsoft battle.  Even if you don't like airsoft guns come and hang out.","Friday UCF: Airsoft","Seig (7:07pm) ... (After Event)","02280707"));
events.push(makeEvent(3,7,6,2013,"7:07pm","...","Friday UCF: Choose your own Adventure","Seig (7:07pm) ... (After Event)","03070707"));
events.push(makeEvent(3,14,6,2013,"7:07pm","...","Friday UCF: Pie Party","Seig (7:07pm) ... (After Event)","03140707"));