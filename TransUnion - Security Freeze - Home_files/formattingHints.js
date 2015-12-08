// formattingHints.js: shared functions used to support formatting hints for fields
var selectOverride = false;

function limitedFieldOnSelectListener() {
	selectOverride = true;
}

// auto-tab
function autoTab(currentFieldObj, count, nextFieldId, e){
	var key = 0;
	if (browser == "ie" || browser == "ie6" || browser == "ie7") {
		key = event.keyCode;
	} else {
		key = e.which;
	}
	// don't autotab if the user pressed the control key
	if (key != 16) {
		if (!selectOverride) {
			if (currentFieldObj.value.length == count) {
				document.getElementById(nextFieldId).focus();
			}
		}
		selectOverride = false;
	}
}
function std2CharOnKeyUpListener(e) {
	autoTab(this, 2, getNextInputFieldId(this), e);
}
function std3CharOnKeyUpListener(e) {
	autoTab(this, 3, getNextInputFieldId(this), e);
}
function std4CharOnKeyUpListener(e) {
	autoTab(this, 4, getNextInputFieldId(this), e);
}
function std5CharOnKeyUpListener(e) {
	autoTab(this, 5, getNextInputFieldId(this), e);
}

// date format hint display
function dateOnFocusListener() {
	if(this.value == "(mm/dd/yyyy)") {
        _gaq.push(['_trackEvent', 'Forms', 'Register','Date of Birth']);
        ga('send', 'event', 'Forms', 'Register','Date of Birth');
		this.value = "";
		this.className = "stdDate";
	}
}
function startDateOnFocusListener() {
	if(this.value == "(mm/dd/yyyy)") {
        _gaq.push(['_trackEvent', 'Forms', 'Register','Start Date']);
        ga('send', 'event', 'Forms', 'Register','Start Date');
		this.value = "";
		this.className = "stdDate";
	}
}
function endDateOnFocusListener() {
	if(this.value == "(mm/dd/yyyy)") {
        _gaq.push(['_trackEvent', 'Forms', 'Register','End Date']);
        ga('send', 'event', 'Forms', 'Register','End Date');
		this.value = "";
		this.className = "stdDate";
	}
}
function dateOnBlurListener() {
	if(this.value == "" || this.value == "(mm/dd/yyyy)") {
		this.value = "(mm/dd/yyyy)";
		this.className = "stdDateWithFormat";
	} else {
        _gaq.push(['_trackEvent', 'Forms', 'Register','Date of Birth']);
        ga('send', 'event', 'Forms', 'Register','Date of Birth');
		this.className = "stdDate";
	}
}

function startDateOnBlurListener() {
	if(this.value == "" || this.value == "(mm/dd/yyyy)") {
		this.value = "(mm/dd/yyyy)";
		this.className = "stdDateWithFormat";
	} else {
        _gaq.push(['_trackEvent', 'Forms', 'Add Lift','Start Date']);
        ga('send', 'event', 'Forms', 'Add Lift','Start Date');
		this.className = "stdDate";
	}
}

function endDateOnBlurListener() {
	if(this.value == "" || this.value == "(mm/dd/yyyy)") {
		this.value = "(mm/dd/yyyy)";
		this.className = "stdDateWithFormat";
	} else {
        _gaq.push(['_trackEvent', 'Forms', 'Add Lift','End Date']);
        ga('send', 'event', 'Forms', 'Add Lift','End Date');
		this.className = "stdDate";
	}
}

function dateOnBlurListeners() {
	if(this.value == "" || this.value == "(mm/yyyy)") {
		this.value = "(mm/yyyy)";
		this.className = "stdDateWithFormat";
	} else {
		this.className = "stdDate";
	}
}
function dateWithSelectOnFocusListener() {
	if(this.value == "(mm/dd/yyyy)") {
		this.value = "";
		this.className = "stdDate";
	}
}
function dateWithSelectOnBlurListener() {
	if(this.value == "" || this.value == "(mm/dd/yyyy)") {
		this.value = "(mm/dd/yyyy)";
		this.className = "stdDateWithFormat";
	} else {
		this.className = "stdDate";
	}
}
function monthOnFocusListener() {
	if(this.value == "(mm/yyyy)") {
		this.value = "";
		this.className = "stdDate";
	}
}
function monthOnBlurListener() {
    _gaq.push(['_trackEvent', 'Forms', 'Register','Expiration Date']);
    ga('send', 'event', 'Forms', 'Register','Expiration Date');
	if(this.value == "" || this.value == "(mm/yyyy)") {
		this.value = "(mm/yyyy)";
		this.className = "stdDateWithFormat";
	} else {
		this.className = "stdDate";
	}
}
function isoDateOnFocusListener() {
	if(this.value == "(yyyy-mm-dd)") {
		this.value = "";
		this.className = "stdDate";
	}
}
function isoDateOnBlurListener() {
	if(this.value == "" || this.value == "(yyyy-mm-dd)") {
		this.value = "(yyyy-mm-dd)";
		this.className = "stdDateWithFormat";
	} else {
		this.className = "stdDate";
	}
}
function isoDateWithSelectOnFocusListener() {
	if(this.value == "(yyyy-mm-dd)") {
		this.value = "";
		this.className = "stdDate";
	}
}
function isoDateWithSelectOnBlurListener(){
	if(this.value == "" || this.value == "(yyyy-mm-dd)") {
		this.value = "(yyyy-mm-dd)";
		this.className = "stdDateWithFormat";
	} else {
		this.className = "stdDate";
	}
}
function isoMonthOnFocusListener() {
	if(this.value == "(yyyy-mm)") {
		this.value = "";
		this.className = "stdDate";
	}
}
function isoMonthOnBlurListener() {
	if(this.value == "" || this.value == "(yyyy-mm)") {
		this.value = "(yyyy-mm)";
		this.className = "stdDateWithFormat";
	} else {
		this.className = "stdDate";
	}
}

// state format hint display
function stateWithSelectOnFocusListener() {
	if(this.value == "(AA)") {
		this.value = "";
		this.className = "std3Char";
	}
}
function stateWithSelectOnBlurListener() {
	if(this.value == "" || this.value == "(AA)") {
		this.value = "(AA)";
		this.className = "std3CharWithFormat";
	} else {
		this.className = "std3Char";
	}
}

// validate values entered
function validCharacter(type, e) {
	var key = 0;
	if (browser == "ie" || browser == "ie6" || browser == "ie7") {
		key = event.keyCode;
	} else {
		key = e.which;
	}
	if (key >= 32 && key <= 127) {
		switch (type) {
		case "N":
			if (key < 48 || key > 57) return false;
			break;
		case "A":
			if (!((key >= 65 && key <= 90)||(key >= 97 && key <= 122))) return false;
			break;
		case "AN":
			if (!((key >= 48 && key <= 57)||(key >= 65 && key <= 90)||(key >= 97 && key <= 122))) return false;
		default:
			break;
		}	
	}
	return true;
}

function numOnKeyPressListener(e) {
	return validCharacter("N", e);
}
function alphaOnKeyPressListener(e) {
	return validCharacter("A", e);
}
function alphaNumOnKeyPressListener(e) {
	return validCharacter("AN", e);
}

// character limits for text fields
function allowKeyPress(field, maxLength, e) {
	var key = 0;
	if (browser == "ie" || browser == "ie6" || browser == "ie7") {
		key = event.keyCode;
	} else {
		key = e.which;
	}
	if(key >= 32 && key <= 127 && field.value.length >= maxLength) return false;
	return true;
}

function dateOnKeyPressListener(e) {
	if (!selectOverride) {
		return allowKeyPress(this, 10, e);
	}
	selectOverride = false;
}
function monthOnKeyPressListener(e) {
	if (!selectOverride) {
		return allowKeyPress(this, 7, e);
	}
	selectOverride = false;
}
function stateOnKeyPressListener(e) {
	if (!selectOverride) {
		return allowKeyPress(this, 2, e);
	}
	selectOverride = false;
}

function lastNameOnFocusListener() {
	if(this.value == "(last name)") {
		this.value = "";
		this.className = "stdWidth";
	}
}
function lastNameOnBlurListener() {
	if(this.value == "" || this.value == "(last name)") {
		this.value = "(last name)";
		this.className = "stdWidthWithFormat";
	} else {
		this.className = "stdWidth";
	}
}

function firstNameOnFocusListener() {
	if(this.value == "(first name)") {
		this.value = "";
		this.className = "stdWidth";
	}
}
function firstNameOnBlurListener() {
	if(this.value == "" || this.value == "(first name)") {
		this.value = "(first name)";
		this.className = "stdWidthWithFormat";
	} else {
		this.className = "stdWidth";
	}
}

// market/submarket format hint display
function mktSubmktOnFocusListener() {
	if(this.value == "(9999)") {
		this.value = "";
		this.className = "std4Char";
	}
}
function mktSubmktOnBlurListener() {
	if(this.value == "" || this.value == "(9999)") {
		this.value = "(9999)";
		this.className = "std4CharWithFormat";
	} else {
		this.className = "std4Char";
	}
}
function mktSubmktOnKeyPressListener(e) {
	if (!selectOverride) {
		return allowKeyPress(this, 4, e);
	}
	selectOverride = false;
}

// subscriber code format hint display
function subscriberOnFocusListener() {
	if(this.value == "(A9999999)") {
		this.value = "";
		this.className = "stdWidth";
	}
}
function subscriberOnBlurListener() {
	if(this.value == "" || this.value == "(A9999999)") {
		this.value = "(A9999999)";
		this.className = "stdWidthWithFormat";
	} else {
		this.className = "stdWidth";
	}
}
function subscriberOnKeyPressListener(e) {
	if (!selectOverride) {
		return allowKeyPress(this, 7, e);
	}
	selectOverride = false;
}


// character count for long text fields
function updateCharsRemaining(fieldId, fieldCounterId, maxLength) {
	var counterNode = document.getElementById(fieldCounterId);
	var newCounterText = "(" + (maxLength - document.getElementById(fieldId).value.length) + " characters remain)";

	var newCounterNode = document.createElement("span");
	newCounterNode.setAttribute("id", fieldCounterId);
	var newCounter = createChild("text", newCounterNode, newCounterText);

	counterNode.parentNode.replaceChild(newCounterNode, counterNode);
}

function setupDateFieldListeners(fieldName) {
	document.getElementById(fieldName).onfocus = dateOnFocusListener;
	document.getElementById(fieldName).onblur = dateOnBlurListener;
	document.getElementById(fieldName).onkeypress = dateOnKeyPressListener;
	document.getElementById(fieldName).onselect = limitedFieldOnSelectListener;
}
function setupStartDateFieldListeners(fieldName) {
	document.getElementById(fieldName).onfocus = startDateOnFocusListener;
	document.getElementById(fieldName).onblur = startDateOnBlurListener;
	document.getElementById(fieldName).onkeypress = dateOnKeyPressListener;
	document.getElementById(fieldName).onselect = limitedFieldOnSelectListener;
}
function setupEndDateFieldListeners(fieldName) {
	document.getElementById(fieldName).onfocus = endDateOnFocusListener;
	document.getElementById(fieldName).onblur = endDateOnBlurListener;
	document.getElementById(fieldName).onkeypress = dateOnKeyPressListener;
	document.getElementById(fieldName).onselect = limitedFieldOnSelectListener;
}

function setupDateWithSelectFieldListeners(fieldName) {
	document.getElementById(fieldName).onfocus = dateWithSelectOnFocusListener;
	document.getElementById(fieldName).onblur = dateWithSelectOnBlurListener;
	document.getElementById(fieldName).onkeypress = dateOnKeyPressListener;
	document.getElementById(fieldName).onselect = limitedFieldOnSelectListener;
}
function setupIsoDateFieldListeners(fieldName) {
	document.getElementById(fieldName).onfocus = isoDateOnFocusListener;
	document.getElementById(fieldName).onblur = isoDateOnBlurListener;
	document.getElementById(fieldName).onkeypress = dateOnKeyPressListener;
	document.getElementById(fieldName).onselect = limitedFieldOnSelectListener;
}
function setupIsoDateWithSelectFieldListeners(fieldName) {
	document.getElementById(fieldName).onfocus = isoDateWithSelectOnFocusListener;
	document.getElementById(fieldName).onblur = isoDateWithSelectOnBlurListener;
	document.getElementById(fieldName).onkeypress = dateOnKeyPressListener;
	document.getElementById(fieldName).onselect = limitedFieldOnSelectListener;
}
function setupMonthFieldListeners(fieldName) {
	document.getElementById(fieldName).onfocus = monthOnFocusListener;
	document.getElementById(fieldName).onblur = monthOnBlurListener;
	document.getElementById(fieldName).onkeypress = monthOnKeyPressListener;
	document.getElementById(fieldName).onselect = limitedFieldOnSelectListener;
}
function setupStateWithSelectFieldListeners(fieldName) {
	document.getElementById(fieldName).onfocus = stateWithSelectOnFocusListener;
	document.getElementById(fieldName).onblur = stateWithSelectOnBlurListener;
	document.getElementById(fieldName).onkeypress = stateOnKeyPressListener;
	document.getElementById(fieldName).onselect = limitedFieldOnSelectListener;
}
function setupZipCodeFieldListeners(fieldRoot) {
	document.getElementById(fieldRoot + "Code").onkeyup = std5CharOnKeyUpListener;
	document.getElementById(fieldRoot + "Code").onselect = limitedFieldOnSelectListener;
}
function setupPhoneFieldListeners(fieldRoot) {
	document.getElementById(fieldRoot + "Area").onkeyup = std3CharOnKeyUpListener;
	document.getElementById(fieldRoot + "Area").onselect = limitedFieldOnSelectListener;
	document.getElementById(fieldRoot + "Exchange").onkeyup = std3CharOnKeyUpListener;
	document.getElementById(fieldRoot + "Exchange").onselect = limitedFieldOnSelectListener;
}
function setupPhoneFieldWithExtListeners(fieldRoot) {
	document.getElementById(fieldRoot + "Area").onkeyup = std3CharOnKeyUpListener;
	document.getElementById(fieldRoot + "Area").onselect = limitedFieldOnSelectListener;
	document.getElementById(fieldRoot + "Exchange").onkeyup = std3CharOnKeyUpListener;
	document.getElementById(fieldRoot + "Exchange").onselect = limitedFieldOnSelectListener;
	document.getElementById(fieldRoot + "Number").onkeyup = std4CharOnKeyUpListener;
	document.getElementById(fieldRoot + "Number").onselect = limitedFieldOnSelectListener;
}
function setupSsnFieldListeners(fieldRoot) {
	document.getElementById(fieldRoot + "1").onkeyup = std3CharOnKeyUpListener;
	document.getElementById(fieldRoot + "1").onselect = limitedFieldOnSelectListener;
	document.getElementById(fieldRoot + "2").onkeyup = std2CharOnKeyUpListener;
	document.getElementById(fieldRoot + "2").onselect = limitedFieldOnSelectListener;
}
function setupLastNameFieldListeners(fieldName) {
	document.getElementById(fieldName).onfocus = lastNameOnFocusListener;
	document.getElementById(fieldName).onblur = lastNameOnBlurListener;
}
function setupFirstNameFieldListeners(fieldName) {
	document.getElementById(fieldName).onfocus = firstNameOnFocusListener;
	document.getElementById(fieldName).onblur = firstNameOnBlurListener;
}
function setupSubcodeBureauFieldListeners(bureauFieldId) {
	document.getElementById(bureauFieldId).onkeyup = std4CharOnKeyUpListener;
	document.getElementById(bureauFieldId).onselect = limitedFieldOnSelectListener;
}

function setupMktSubmktFieldListeners(fieldName) {
	document.getElementById(fieldName).onfocus = mktSubmktOnFocusListener;
	document.getElementById(fieldName).onblur = mktSubmktOnBlurListener;
	document.getElementById(fieldName).onkeypress = mktSubmktOnKeyPressListener;
	document.getElementById(fieldName).onselect = limitedFieldOnSelectListener;
}
function setupSubscriberFieldListeners(fieldName) {
	document.getElementById(fieldName).onfocus = subscriberOnFocusListener;
	document.getElementById(fieldName).onblur = subscriberOnBlurListener;
	document.getElementById(fieldName).onkeypress = subscriberOnKeyPressListener;
	document.getElementById(fieldName).onselect = limitedFieldOnSelectListener;
}
