if ($("title").html() != "UCF UW") {
	$("#nav_container").html('<nav><ul><li><a href="../index.htm">Home</a></li><li><a href="events.htm">Events</a></li><li><a href="leaders.htm">Leaders</a></li><li><a href="missions.htm">Missions</a></li>');
} else {
	$("#nav_container").html('<nav><ul><li><a href="index.htm">Home</a></li><li><a href="htm/events.htm">Events</a></li><li><a href="htm/leaders.htm">Leaders</a></li><li><a href="htm/missions.htm">Missions</a></li>');
}

// $("#logo_container").html('<img src="../img/ucf_logo.jpg" id="logo">');
$("#title_container").html('<h1>University Christian Fellowship UW</h1>');
$("#sm-title_container").html('<h1>UCF UW</h1>');
$("#important_container").html('<h2>IMPORTANT: Announcement</h2>');

$("#about_container").html('<h2>What We\'re About:</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>');

$("#sm-about_container").html('<h2>What We\'re About:</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>');

setTimeout('alert("Hello You\'ve been here 3 seconds")', 3000);