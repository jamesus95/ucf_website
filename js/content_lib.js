var breadCrumbs = "";

var headerContainer = '<div class="col-md-9 hidden-sm hidden-xs" id="title-about_container"><div class="row" id="title_row"><div class="col-md-12" id="title_container"></div></div><div class="row" id="about_row"><div class="col-md-12" id="about_container"></div></div></div><div class="col-xs-8 hidden-md hidden-lg" id="sm-title_container"></div>';

var smAboutRow = '<div class="row" id="sm-about_row"><div class="col-xs-12 hidden-md hidden-lg" id="sm-about_container"></div></div>';

var mapRow = '<div class="row" id="map_row"><div class="col-xs-12 col-md-9 col-md-offset-3" id="map_container">' + breadCrumbs + '</div></div>';

var pageTitleRow = '<div class="row" id="page-title_row"><div class="col-md-10 col-md-offset-2" id="page-title_container"><h2>' + pageTitle + '</h2></div></div>';

var bodyRow = '<div class="row" id="body_row"><div class="col-md-2 hidden-sm hidden-xs" id="nav_container"></div><div class="col-md-2 hidden-md hidden-lg" id="nav-dropdown_container"></div><div class="col-md-10" id="body_container"><div class="row" id="important_row"><div class="col-md-12" id="important_container"></div></div><div class="row" id="content_row"></div></div></div>';

var titleContainer = '<h1>University Christian Fellowship UW</h1><p>Check us out on <a href="https://www.facebook.com/pages/University-Christian-Fellowship-UW/269814256707">Facebook</a></p>';

var smTitleContainer = '<h1>UCF UW</h1>';

var aboutContainer = '<div><h3>What We\'re About:</h3><p>UCF is a group of students at the University of Washington who desire to follow God with all we are.  We seek to be a place to belong, participate and transform.  We place high value on our friendships with each other and work hard to provide opportunities for them to both start and grow.  We welcome anyone to come and be part of UCF.  Whether you\'re just beginning to wonder about spirituality and who Jesus really is or have been following God for years, UCF is a place where you can ask questions, be challenged and grow by being a part of everything we are doing.  As each of us steps out to know Jesus better or to simply help those around us, we both take part in transforming the world for the better, and we experience God transforming each of us. <a href="' + getAboutLinkPrefix() + 'about.htm">click to learn more...</a></p></div>';

var smAboutContainer = '<div><h3>What We\'re About:</h3><p>UCF is a group of students at the University of Washington who desire to follow God with all we are.  We seek to be a place to belong, participate and transform.  We place high value on our friendships with each other and work hard to provide opportunities for them to both start and grow.  We welcome anyone to come and be part of UCF. <a href="' + getAboutLinkPrefix() + 'about.htm">click to read more...</a></p></div>';

var links = ["Home", "index.htm", "Activities", "activities.htm", "Teams", "teams.htm", "Service Activities", "service.htm", "Core Study Groups", "cores.htm", "Contact Information", "contact.htm", "About Us", "about.htm"];

var css = ["libs/bootstrap-theme.min.css", "libs/bootstrap.min.css", "css/style.css", "css/layout.css", "css/state.css"];

var important = "<h3>IMPORTANT: SITE UNDER CONSTRUCTION</h3>";

var navDropdownContainer = '<div class="dropdown"><a id="dropdown_link" class="bold" data-toggle="dropdown" href="#">Links</a><ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">' + appendNav() + '</ul></div>';

var navContainer = '<nav><ul>' + appendNav() + '</nav></ul>';

function getAboutLinkPrefix() {
	if ($("title").attr("id") == "index") {
		return "htm/";
	} else {
		return "";
	}
}

function getNavPrefix(i) {
	if ($("title").attr("id") == "index") {
		if (i == 0) {
			return "";
		} else {
			return "htm/";
		}
	} else {
		if (i == 0) {
			return "../";
		} else {
			return "";
		}
	}
}

function appendNav() {
	var s = "";
	for (var i = 0; i < links.length; i += 2) {
		s += link(links[i], links[i + 1], getNavPrefix(i));
	}
	return s;
}

function link(name, url, pre) {
	return '<li><a href="' + pre + url + '">' + name + '</a></li>';
}