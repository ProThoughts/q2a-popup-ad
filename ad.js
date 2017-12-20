<script>
$(document).ready(function () {
	var popup = new $.Popup({
		width : ^box_width,
		height: ^box_height
	});
        popupHtml = '^html';
        
	percentage = ^percentage;
        documentHeight = $(document).height();
        scrollHeight = documentHeight * (percentage / 100)

	popupflg = false;
	if (percentage <= 0) {
		popup.open(popupHtml, 'html');
		popupflg = true;
	}
	$(^window).scroll(function (e) {
		var target_area = $(e.currentTarget);
		var scrollTop = target_area.scrollTop();

		if ( !popupflg && scrollHeight <= scrollTop) {
			window['optimizely'] = window['optimizely'] || [];
			window.optimizely.push(["trackEvent", "popup_show_" + percentage]);
			popup.open(popupHtml, 'html');
			window['optimizely'] = window['optimizely'] || [];
			window.optimizely.push(["trackEvent", "popup_show_" + percentage]); 
			popupflg = true;
		}
	});
});
</script>
