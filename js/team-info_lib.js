function createTeam(name, leader, description, contact, id) {
	$("#" + id).html('<h3>' + name + '</h3><br><span class="bold">Leader</span>:<br>' + leader + '<br><span class="bold">Team Contact</span>:<br>' + contact + '<br><span class="bold">Description</span>:<br>' + description);
}

$(window).ready(function() {
	createTeam("Web Development Team", "James Murphree", "The Web Development Team updates and maintains the UCF website and is in need of a Lead Designer.  If you are interested in web programming or have a good eye for design James's would love a partner to work with.  No experience needed at all.  We work in HTML, CSS, Javascript, and JQuery.", "jamesus95@gmail.com", "web-dev_team");
	createTeam("International Team", "Rebecca Chruch", '<span class="underline">English Conversation Group:</span><br>Meets Thursdays 4:30pm-5:30pm in the HUB room 337<br>We talk about phrases and how to use them<br><span class="underline">Casual English Conversation Group:</span><br>Meets Wednesday 2:00pm-4:00pm in the Allen Reasearch Commons (Red A, B, or C)<br>We eat doughnuts and chat and you can ask any questions you have<br><span class="underline">Conversation Partners:</span><br>International students and native speakers meet for 1 hour a week to converse and hang out. Download the sign up form <a href="../download/conversationpartners.pdf" target="_blank">here</a> and send it to the Internation Team email.', "uw.conversation@gmail.com", "internation_team");
	createTeam("Prayer Team", "Jessie Chen", "Prayer Team meets once a week on Wednesday during the quarter in the Allen Reasearch Commons to pray.  If you have any prayer requests or would like to pray for someone and can't make it on Wednesday, email the prayer team.", "chenyexi@uw.edu", "prayer_team");
	createTeam("Media Team", "James Murphree", "The Media Team handles the power points for our Friday UCF meetings.  If you're interested in technology (aka you like power point) think about joining this team.", "jamseus95@gmail.com", "media_team");
	createTeam("Fellowship Team", "Looking for student leader", 'The Fellowship Team seeks to find new and creative avenues that facilitate a deepening sense of community within UCF. They work to balance UCF events so as to touch a broad base of interests. In their planning they will also keep in mind that many of our "social events" can be avenues of significant outreach. The heart of this team is to provide both formal and informal opportunities for UCFers to hang out with each other, thus building quality friendships enabling Jesus to work among us.', "ucf4uw@gmail.com or 206-660-5541", "fellowship_team");
	createTeam("Worship Team", "Looking for student leader", 'The Worship team seeks to draw UCFers to Jesus by facilitating corporate times of worship and encouraging private devotion. The team works during our Friday UCF worship times to develop an atmosphere of openness and involvement. They will encourage UCFers to step out in the spiritual gifts and in honesty toward God. They will also seek to promote individual and small group worship teams and promote the worship "jam nights". If you play an instrument or like to sing think about joining this team.', "ucf4uw@gmail.com or 206-660-5541", "worship_team");
	createTeam("Service Team", "Yuki Li", "We help create a heart in UCF students to serve and love the people around us. We help plan and organize opportunities for students to participate in service projects. Isially we do one serice project each month, such as caroling at the retirement home, collecting food for the food bank during Halloween, doing chores at the nursing home, and doing yard work to raise money for out summer missions trip.  We continuously recruit students to be part of the Service Team, so join if you want to help make a difference in the community! We would love to have some of your ideas and/or more helping hands!", "rli1015@uw.edu", "service_team");
});