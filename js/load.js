// Creates the nav list elements
function link(name, url, pre) {
	return '<li><a href="' + pre + url + '">' + name + '</a></li>';
}

// Appends the nav list elements
function appendNav(index, other) {
	var s = "<nav><ul>";
	for (var i = 0; i < tabs.length; i += 2) {
		if (i == 0) {
			s += link(tabs[i], tabs[i + 1], index);
		} else {
			s += link(tabs[i], tabs[i + 1], other);
		}
	}
	s += "</ul></nav>";
	$("#nav_container").html(s);
}

// Appends CSS documents
function appendCSS(index) {
	for (var i = 0; i < css.length; i++) {
		$("head").append('<link rel="stylesheet" type="text/css" href="' + index + css[i] + '">');
	}
}

// Array of navs
var tabs = ["Home", "index.htm", "Events", "events.htm", "Teams", "teams.htm", "Missions", "missions.htm", "Cores", "cores.htm", "Contact", "contact.htm", "About", "about.htm"];

// Array of CSS documents
var css = ["libs/bootstrap-theme.min.css", "libs/bootstrap.min.css", "css/style.css", "css/layout.css", "css/state.css"];

// Important Announcement
var imp = "IMPORANT: Announcement!!";

function load() {
	// Title and about sections
	$("#title_container").html('<h1>University Christian Fellowship UW</h1>');
	$("#sm-title_container").html('<h1>UCF UW</h1>');
	$("#about_container").html('<div><h2>What We\'re About:</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>');
	$("#sm-about_container").html('<div><h2>What We\'re About:</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p></div>');
	if ($("title").attr("id") != "index") {
		appendNav("../", "");
		$("#logo_container").html('<img src="../img/ucf_logo.jpg">');
	} else {
		appendNav("", "htm/");
		$("#logo_container").html('<img src="img/ucf_logo.jpg">');
	}
	$("#important_container").html('<h2>' + imp + '</h2>');
}

// MAIN
if ($("title").attr("id") != "index") {
	appendCSS("../");
} else {
	appendCSS("");
}
// HOME WORK EXTRA CREDIT
//setTimeout('alert("Hello You\'ve been here 3 seconds")', 3000);