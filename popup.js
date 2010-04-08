$(function() {
	$.get('http://iwiw.hu/pages/activity/activities.jsp', function(data) {
		$('<div/>').html(data).find('ul.activities').appendTo('body');
	});
});
