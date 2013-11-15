$("#pm_button").hide();
$("#sw-nextmonth_container").hide();
$("#nm_button").click(function(event) {
	$("#nm_button").hide();
	$("#pm_button").show();
	$("#sw-nextmonth_container").show();
	$("#thismonth_container").hide();
});
$("#pm_button").click(function(event) {
	$("#pm_button").hide();
	$("#nm_button").show();
	$("#sw-nextmonth_container").hide();
	$("#thismonth_container").show();
});