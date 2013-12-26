function createTeam(name, leader, description, contact, id) {
	$("#" + id).html('<h3>' + name + '</h3><br><span class="bold">Leader</span>:<br>' + leader + '<br><span class="bold">Team Contact</span>:<br>' + contact + '<br><span class="bold">Description</span>:<br>' + description);
}

$(window).ready(function() {
	createTeam("Web Development Team", "James Murphree", "The Web Development Team updates and maintains the UCF website and is in need of a Lead Designer.", "jamesus95@gmail.com", "web-dev_team");
	createTeam("International Team", "Rebecca Chruch", '<span class="underline">English Conversation Group:</span><br>Meets Thursdays 4:30pm-5:30pm in the HUB room 337<br>We talk about phrases and how to use them<br><span class="underline">Casual English Conversation Group:</span><br>Meets Wednesday 2:00pm-4:00pm in the Allen Reasearch Commons (Red A, B, or C)<br>We eat doughnuts and chat and you can ask any questions you have<br><span class="underline">Conversation Partners:</span><br>International students and native speakers meet for 1 hour a week to converse and hang out. Download the sign up form <a href="../download/conversationpartners.pdf" target="_blank">here</a> and send it to the Internation Team email.', "uw.conversation@gmail.com", "internation_team");
	createTeam("Prayer Team", "Jessie Chen", "Prayer Team meets once a week on Wednesday during the quarter in the Allen Reasearch Commons to pray.  If you have any prayer requests or would like to pray for someone and can't make it on Wednesday, email the prayer team.", "chenyexi@uw.edu", "prayer_team");
	createTeam("Media Team", "James Murphree", "The Media Team handles the power points for our Friday UCF meetings.  If you're interested in helping email the Media Team.", "jamseus95@gmail.com", "media_team");
});