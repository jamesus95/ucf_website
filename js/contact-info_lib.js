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

$(window).ready(function() {
	createContact("James Murphree", "Web Master", ["jamesus95@gmail.com", "206-853-6598", '<a href="https://www.facebook.com/james.murphree.98">Facebook</a>'], "I'm in the Husky Marching Band.", "Penguin", "jcm");
	createContact("Amanda Sams", "Tuesday Core Leader", ["littlegreenfrog93@gmail.com", "206-953-8962"], "", "", "as");
	createContact("Rebecca Church", "Internation Team Leader", [], "", "", "rc");
});