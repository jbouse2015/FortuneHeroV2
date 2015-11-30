// stateSelection.js: shared functions used to support selection of values for state fields
// requires that common.js, textSelection.js be included

function buildStateSelectionListHTML(textSelectionId, selectionListId, listLabel, codeArray, decodeArray, filterText, targetFieldId ) {
/* if no filter, send value "null" for filterText */

	var currentFilter = "<span class=\"unavailable\">(none)</span>";
	if (filterText != '') currentFilter = filterText;

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
		if (i == 0) listHTML += "<li class=\"first\">";
		else listHTML += "<li>";
		listHTML += "<span class=\"code\"><a onclick=\"updateTargetStateField('" + targetFieldId + "','" + codeArray[i] + "','" + textSelectionId + "')\">" + codeArray[i] + "</a></span>";
		listHTML += "<span class=\"decode\">" + decodeArray[i] + "</span>";
		listHTML += "</li>";
	}

	listHTML += "</ul>";
	listHTML += "</div>";
	
	return listHTML;
}

function updateStateSelectionListContent(textSelectionId, selectionListId, targetFieldId) {
/* requires inclusion of stateSelectionValues.js (arrays of state codes, names) */
	var listNode = document.getElementById(selectionListId);
	var newListNode = document.createElement("div");
	newListNode.setAttribute("id", selectionListId);
	listNode.parentNode.replaceChild(newListNode, listNode);
	newListNode.innerHTML = buildStateSelectionListHTML(textSelectionId, selectionListId, "States", stateCodes, stateNames, null, targetFieldId);
}

function updateTargetStateField(targetFieldId, selectedValue, textSelectionId) {
	document.getElementById(targetFieldId).value = selectedValue;
	stateWithSelectOnBlurListener.call(document.getElementById(targetFieldId));
	hideCommonTextPopupElements();
	hide(textSelectionId);
	
}

