// Appends CSS documents
function appendCSS(index) {
	for (var i = 0; i < css.length; i++) {
		$("head").append('<link rel="stylesheet" type="text/css" href="' + index + css[i] + '">');
	}
}

if ($("title").attr("id") != "index") {
	appendCSS("../");
} else {
	appendCSS("");
}

// called at end of html
function load() {

	// Appending HTML
	var container = $(".container");
	var header = $("#header").html();
	var content = $("#content_row").html();
	var breadCrumbs = $("#map").html();

	container.html("");
	container.append(header);
	$("#header_container").append(headerContainer);
	container.append(smAboutRow, mapRow, pageTitleRow, bodyRow);
	$("#title_container").html(titleContainer);
	$("#sm-title_container").html(smTitleContainer);
	$("#about_container").html(aboutContainer);
	$("#sm-about_container").html(smAboutContainer);
	$("#important_container").html(important);
	$("#nav-dropdown_container").html(navDropdownContainer);
	$("#nav_container").html(navContainer);
	$("#content_row").html(content);
	if ($("title").attr("id") != 'index' && $("title").attr("id") != 'dyn') {
		$("#page-title_container").html('<h2>' + $("title").attr("id") + '</h2>');
	}
	if ($("title").attr('id') == "Activities") {
		$("#page-title_container").append('<a href="calendar.htm">Full Quarter Calendar</a>');
	}
	$("#map_container").html(breadCrumbs);

	// Initial logo adjust and background extention
	$(window).ready(function() {
		if ($(".container").height() < $(window).height()) {
			$(".container").height($(window).height());
		}
	});
	// Resize logo adjust
	$(window).resize(function() {
		if ($(".container").height() < $(window).height()) {
			$(".container").height($(window).height());
		}
	});
}




