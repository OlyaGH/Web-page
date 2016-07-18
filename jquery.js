$(function() {
	$("#buybutton").on("click", toggle);
	
	function toggle() {
		$("#banner_text").toggleClass("hiddenText");
	}
});
$(function() {
	$(".blocksdiv").mouseover(function() {
		this.style.opacity = "1";
	});
	$(".blocksdiv").mouseout(function() {
		this.style.opacity = "0.5";
	});
});