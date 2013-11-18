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
var tabs = ["Home", "index.htm", "Events", "events.htm", "Teams", "teams.htm", "Service Activities", "service.htm", "Cores", "cores.htm", "Contact", "contact.htm", "About", "about.htm"];

// Array of CSS documents
var css = ["libs/bootstrap-theme.min.css", "libs/bootstrap.min.css", "css/style.css", "css/layout.css", "css/state.css"];

// Important Announcement
var imp = "IMPORANT: SITE UNDER CONSTRUCTION";

function load() {
	// Title and about sections
	$("#title_container").html('<h1>University Christian Fellowship UW</h1>');
	$("#sm-title_container").html('<h1>UCF UW</h1>');
	$("#about_container").html('<div><h2>What We\'re About:</h2><p>UCF is a group of students at the University of Washington who desire to follow God with all we are.  We seek to be a place to belong, participate and transform.  We place high value on our friendships with each other and work hard to provide opportunities for them to both start and grow.  We welcome anyone to come and be part of UCF.  Whether you\'re just beginning to wonder about spirituality and who Jesus really is or have been following God for years, UCF is a place where you can ask questions, be challenged and grow by being a part of everything we are doing.  As each of us steps out to know Jesus better or to simply help those around us, we both take part in transforming the world for the better, and we experience God transforming each of us. <a href="htm/about.htm">click to learn more...</a></p></div>');
	$("#sm-about_container").html('<div><h2>What We\'re About:</h2><p>UCF is a group of students at the University of Washington who desire to follow God with all we are.  We seek to be a place to belong, participate and transform.  We place high value on our friendships with each other and work hard to provide opportunities for them to both start and grow.  We welcome anyone to come and be part of UCF. <a href="htm/about.htm">click to read more...</a></p></div>');
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