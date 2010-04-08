$(function() {
	$.get('http://iwiw.hu/pages/activity/activities.jsp', function(data, textStatus) {
		var activities;
		if(textStatus == 'success') {
			activities = $('<div/>').html(data).find('ul.activities');
		}
		if(activities.length > 0) {
			activities.appendTo('#container');
		} else {
			$('body').html('<p>Valami nem frankó. Talán nem vagy bejelentkezve az <a href="http://iwiw.hu" target="_blank">iWiW</a>-re?</p>');
		}
	});
});
