window.onload = function() {
	var openEnterForm = document.getElementById("openEnterForm");
	
	openEnterForm.onclick = function() {
		var enter__container = document.getElementById("enter__container");
		var modalWindow = document.getElementById("modalWindow");
		
		enter__container.style.visibility = "visible";
		modalWindow.style.visibility = "visible";
	}
	
	var hideForm = document.getElementById("btn1");
	
	hideForm.onclick = function() {
		var enter__container = document.getElementById("enter__container");
		var modalWindow = document.getElementById("modalWindow");
		
		enter__container.style.visibility = "hidden";
		modalWindow.style.visibility = "hidden";
	}
};  
/*DOM Level 2:
window.onload = function() {
	var openEnterForm = document.getElementById("openEnterForm");
	
	openEnterForm.addEventlistener("click", showContainer);
	function showContainer() {
		var enter__container = document.getElementById("enter__container");
		var modalWindow = document.getElementById("modalWindow");
		
		enter__container.style.visibility = "visible";
		modalWindow.style.visibility = "visible";
	}
	
	var hideForm = document.getElementById("btn1");
	
	hideForm.addEventlistener("click", hideContainer);
	function hideContainer() {
		var enter__container = document.getElementById("enter__container");
		var modalWindow = document.getElementById("modalWindow");
		
		enter__container.style.visibility = "hidden";
		modalWindow.style.visibility = "hidden";
	}
}; */ 