function createContact(name, position, contactInfo, fact, animal, id) {
	var s = '<h3>' + name + '</h3><br><span class="bold">Position:</span><br>' + position + '<br><span class="bold">Contact Information:</span><br>';
	for (var i = 0; i < contactInfo.length; i++) {
		s += contactInfo[i] + '<br>';
	}
	s += '<span class="bold">Fun Fact:</span><br>' + fact + '<br><span class="bold">Favorite Animal:</span><br>' + animal;
	$("#" + id).html(s);
}

function createContactNP(name, contactInfo, fact, animal, id) {
	var s = '<h3>' + name + '</h3><br><span class="bold">Contact Information:</span><br>';
	for (var i = 0; i < contactInfo.length; i++) {
			s += contactInfo[i] + '<br>'
	}
	s += '<span class="bold">Fun Fact:</span><br>' + fact + '<br><span class="bold">Favorite Animal:</span><br>' + animal;
	$("#" + id).html(s);
}

// Fills the contacts page
$(window).ready(function() {
	createContact("James Murphree", "Web Master", ["jamesus95@gmail.com", "206-853-6598", '<a href="https://www.facebook.com/james.murphree.98">Facebook</a>'], "I'm in the Husky Marching Band and was a Drum Major in high school", "Penguin", "jcm");
	createContact("Amanda Sams", "Tuesday Core Leader", ["littlegreenfrog93@gmail.com", "206-953-8962", '<a href="https://www.facebook.com/littlegreenfrog93">Facebook</a>'], "I played on a chess team for 8 years starting when I was 5", "Dog or Cat", "as");
	createContact("Rebecca Church", "Internation Team Leader", ["reb.church@gmail.com"], "I used to be a pole vaulter in high school", "Cheetah", "rc");
	createContact("Danielle Teasting", "Wednesday Core Leader", ["dmyeasting@gmail.com", "206-331-6527"], "I can lick my elbow.", "Peregrim Falcon or Horse", "dy");
	createContact("Jessie Chen", "Prayer Team Leader and Wednesday Core Leader", ["chenyexi@uw.edu", "206-673-7087"], "I had a dream in which I knew I was dreaming... therefore I ran straight into a wall and woke up", "Puppies and Pandas", "jc");
	createContact("Royal Rugg", "Tuesday Core Leader", ["ruggro@yahoo.com", "928-699-9221"], "I've slept in a car when it was -22 degrees outside", "Goldfish", "rr");
	createContact("Kiyomi Mozley", "Tuesday Core Leader", ["kiyomimoz@gmail.com", "206-459-8573"], "I play the harp", "Dog", "km");
	createContact("Han Kang", "Admin Team Leader", ["airon9nk@hotmail.com", "360-580-5168"], "I can do a 7x7 rubik cube", "Polar Bear", "hk");
	createContact("Naomi Beth", "Wednesday Core Leader", ["206-673-7785", '<a href="https://www.facebook.com/naomi.deschane">Facebook</a>'], "I love to go on adventures", "Otter", "nb");
	createContact("Dave Giles", "Group Leader", ["425-286-0214", "Dtgiles@aol.com"], "I'm known for being encouraging and I love to garden railroad", "", "dg");
	createContact("Thomas Banham", "Tuesday Core Leader", ["360-398-3120", "thomas.e.banham@gmail.com"], "", "Snow Leopard", "tb");
	createContact("Dan Dameron", "Group Leader", ["206-660-5541", "dan.dameron@psxa.org"], "I like riding motorcycles", "Monkeys", "dd");
	createContact("Joseph Banham", "Wednesday Core Leader", ["5021 Brooklyn Ave NE Seattle, WA 98248, 360-201-6264", "joesph.banham@gmail.com"], "", "", "jb");
	createContact("Mikah Franz", "Wedneday Core Leader", ["mikahf@uw.edu"], "I have ridden dirt bikes for more than 10 years", "Snowy Owl", "mf");
});