// textSelection.js: shared functions used to support selection of values for text fields
// requires that common.js be included

function configureTextSelectionPopup(popupButtonId, filterIncluded, ieHorizHack) {
	var xVal = getLeftById(popupButtonId);
	var yVal = getTopById(popupButtonId);

	if (filterIncluded != null && filterIncluded == true) {
		setObjectClass("staticPopupHack", "textSelectionWithFilterHack");
	} else {
		setObjectClass("staticPopupHack", "textSelectionHack");
	}
	setObjectClass("staticPopupArea", "textSelectionArea");
	
	var popupHackObject = document.getElementById("staticPopupHack");
	var popupObject = document.getElementById("staticPopupArea");

	if (browser == "ie6" || browser == "ie7") {
		if (document.getElementById("contextArea") != null) {
			var IExShift = 222;
		} else {
			var IExShift = 207;
		}
		if(ieHorizHack != null) IExShift = ieHorizHack;
		popupObject.style.top = (yVal - 4) + "px";
		popupObject.style.left = (xVal - IExShift) + "px";
		popupHackObject.style.top = (yVal - 4) + "px";
		popupHackObject.style.left = (xVal - IExShift) + "px";
	} else {
		var IE8yShift = 0;
		if (browser == "ie") {
			var shiftString = document.getElementById(popupButtonId).parentNode.currentStyle.verticalAlign;
			var IE8yShift = shiftString.substring(0, shiftString.indexOf("px"));
		}
		popupObject.style.top = (yVal - 11 - IE8yShift) + "px";
		popupObject.style.left = (xVal - 223) + "px";
		popupHackObject.style.top = (yVal - 11 - IE8yShift) + "px";
		popupHackObject.style.left = (xVal - 223) + "px";
	}
}

function configureTextSelectionPopupPRight(popupButtonId) {
	var xVal = getLeftById(popupButtonId);
	var yVal = getTopById(popupButtonId);
	
	setObjectClass("staticPopupHack", "textSelectionHack");
	setObjectClass("staticPopupArea", "textSelectionArea");
	
	var popupHackObject = document.getElementById("staticPopupHack");
	var popupObject = document.getElementById("staticPopupArea");

	if (browser == "ie6" || browser == "ie7") {
		popupObject.style.top = (yVal - 4) + "px";
		popupObject.style.left = (xVal - 6) + "px";
		popupHackObject.style.top = (yVal - 4) + "px";
		popupHackObject.style.left = (xVal - 6) + "px";
	} else {
		var IE8yShift = 0;
		if (browser == "ie") {
			var shiftString = document.getElementById(popupButtonId).parentNode.currentStyle.verticalAlign;
			var IE8yShift = shiftString.substring(0, shiftString.indexOf("px"));
		}
		popupObject.style.top = (yVal - 11 - IE8yShift) + "px";
		popupObject.style.left = (xVal - 7) + "px";
		popupHackObject.style.top = (yVal - 11 - IE8yShift) + "px";
		popupHackObject.style.left = (xVal - 7) + "px";
	}
}

function buildSelectionListHTML(textSelectionId, selectionListId, listLabel, codeArray, decodeArray, filterText, targetFieldId ) {
/* if no filter, send value "null" for filterText */

	var currentFilter = "<span class=\"unavailable\">(none)</span>";
	if (filterText == null) filterText = "";
	if (filterText != "") currentFilter = filterText;
	var listStarted = false;

	var listHTML = "";
	listHTML += "<div class=\"currentFilterArea\">";
	listHTML += "<h4>" + listLabel + "</h4>";
	if (currentFilter != null) {
		listHTML += "<div class=\"currentListFilter\">";
		listHTML += "<span class=\"label\">Filter</span>" + currentFilter;
		listHTML += "</div>";
	}
	listHTML += "</div>";
	listHTML += "<div class=\"textSelectionListRows\">";
	listHTML += "<ul>";
	for ( i=0; i<codeArray.length; i++ ) {
		if (codeArray[i].toUpperCase().indexOf(filterText.toUpperCase()) != -1 || decodeArray[i].toUpperCase().indexOf(filterText.toUpperCase()) != -1) {
			if (!listStarted) {
				listHTML += "<li class=\"first\">";
				listStarted = true;
			} else { listHTML += "<li>"; }
			listHTML += "<span class=\"code\"><a onclick=\"updateTargetTextField('" + targetFieldId + "','" + codeArray[i] + "','" + textSelectionId + "')\">" + codeArray[i] + "</a></span>";
			listHTML += "<span class=\"decode\">" + decodeArray[i] + "</span>";
			listHTML += "</li>";
		}
	}

	listHTML += "</ul>";
	listHTML += "</div>";
	
	return listHTML;
}

function updateSelectionListContent(textSelectionId, selectionListId, listLabel, codeArray, decodeArray, filterText, targetFieldId) {
	var listNode = document.getElementById(selectionListId);
	var newListNode = document.createElement("div");
	newListNode.setAttribute("id", selectionListId);
	listNode.parentNode.replaceChild(newListNode, listNode);
	newListNode.innerHTML = buildSelectionListHTML(textSelectionId, selectionListId, listLabel, codeArray, decodeArray, filterText, targetFieldId);
}

function showCommonTextPopupElements () {
	show("staticPopupLayer", "block");
	show("staticPopupHack", "block");
	show("staticPopupArea", "block");
	show("textSelectionHeader", "block");
	disableBrowserWidgets();
}
function showCommonTextPopupElementsPRight () {
	show("staticPopupLayer", "block");
	show("staticPopupHack", "block");
	show("staticPopupArea", "block");
	show("textSelectionHeaderPRight", "block");
	disableBrowserWidgets();
}

function hideCommonTextPopupElements () {
	hide("staticPopupLayer");
	hide("staticPopupHack");
	hide("staticPopupArea");
	if (document.getElementById("textSelectionHeader") != null) {
		hide("textSelectionHeader");
	}
	if (document.getElementById("textSelectionHeaderPRight") != null) {
		hide("textSelectionHeaderPRight");
	}
	enableBrowserWidgets();
}

function updateTargetTextField(targetFieldId, selectedValue, textSelectionId) {
	document.getElementById(targetFieldId).value = selectedValue;
	hideCommonTextPopupElements();
	hide(textSelectionId);
}


