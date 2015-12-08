var hasPlacementSubmitted = "NO";

function tryanotherimage(){
var img=document.getElementById("ver_code");
var src=img.src;
var array=src.split("=");
var firstpart=array[0];
var secondpart=array[1];
var newsecondpart=secondpart+1;
var newurl=firstpart+newsecondpart;
img.src=newurl;
}

function CrossSellTag(pageValue)
{
   var page=pageValue;
   var adserver;
   var target;
   var random;

   adserver = "https://equifax.adbureau.net";
    target =  "/site=equifax/area=dispute/page="+page+"/aamsz=textlink/";

/*    adserver = "https://equifax.adbureau.net";
	target =  "/site=equifax/area=file_freeze/page="+page+"/aamsz=textlink/";
*/
	// Cache-busting and pageid values
	//random = Math.round(Math.random() * 10000000000);
	//if (!pageNum) var pageNum = Math.round(Math.random() * 10000000000);
	//document.write('<scr');
	//document.write('ipt src="' + adserver + '/jserver/acc_random=' + random + target + '/pageid=' + pageNum + '">');
	//document.write('</scr');
	//document.write('ipt>');

}



/**Function theat calls another function formValidate to validate
all the information entered by the customer in the
freeze placement page and submits the same to the next page*/

function formforward()
{
	if (hasPlacementSubmitted == "NO") {

			 var a=formValidate();
			 	if(a==true)
			 	{
					hasPlacementSubmitted = "YES";
				 	document.frm.submit();
			 	}
	}
}


/** Function that performs validations for the payment details(like credit
 card number, type,cvv number) and specific
freeze options in the payment info page**/

function formValidate()
{
 	/*var flag=document.frm.validatePayment;
  	if(flag.value=="false")
 	{

 		var cardType=document.frm.cmbCreditCardType;
                var ctype=document.frm.cmbCreditCardType.value;
 	 	if(cardType.value=="credit card type")
		{
 			alert("Please select the card type");
 			cardType.focus();
 			return false;
 		}

 		var cardNum=document.frm.cmbCreditCardNumber;
 		if(cardNum.value.length==0 )
		{
			alert("Please enter the credit card number");
			cardNum.focus();
			return(false);
		}

		if(cardNum.value.length<13)
		{
			alert("Please enter a valid credit card number (Minimum of 13 digits)");
			cardNum.focus();
			return(false);
		}

		if((_isnan(cardNum.value))==false)
		{
			alert("Please enter only numbers");
			cardNum.focus();
			return(false);
		}

 		var b=ctypecheck();
 		if(b==false)
 		{
 			cardNum.focus();
 			return(false);
 		}

 		var cvvNum=document.frm.cmbCVVNumber;
 		if(cvvNum.value.length==0)
		{
			alert("Please enter the CVV number");
			cvvNum.focus();
			return(false);
		}
                if(ctype=="AMEX")
                {
                    if((cvvNum.value.length != 4))
                    {
			alert("Please enter a valid 4 digit CVV number");
			cvvNum.focus();
			return(false);
                    }
                }
                else
                {
                    if((cvvNum.value.length != 3))
                    {
			alert("Please enter a valid 3 digit CVV number");
			cvvNum.focus();
			return(false);
                    }
                }
		if((_isnan(cvvNum.value))==false)
		{
			alert("Please enter only numbers for CVV number");
			cvvNum.focus();
			return(false);
		}

		var expMonth=document.frm.cmbExpMonth;
 		if(expMonth.value=="")
 		{
 			alert("Please select the expiry month of your credit card");
 			expMonth.focus();
 			return(false);
 		}

		var isValidExpYear=checkExpiryYear(document.frm.cmbExpYear);
 		if(isValidExpYear==false)
 		{
 		 	return(false);
		}
}//end of initial if
 */

var option=document.frm.frmName;
if(option.value=="FREEZE_LIFT_BY_SPECIFIC_PARTY")
{
	var partyName=document.frm.txtPartyName;
	if(partyName.value=="")
 	{
 		alert("Enter the party name");
 		document.frm.txtPartyName.focus();

		return(false);
 	}
  	if(!_isnac(partyName.value))
 	{
 		alert("Enter only alphabets for party name");
 		document.frm.txtPartyName.focus();

 		return(false);
 	}

 	var isValidPin=checkTenDigitPin(document.frm.txtTenDigitPIN);
 	if(isValidPin==false)
 	{
 		document.frm.txtTenDigitPIN.focus();
 		return(false);
 	}
}//end of option 1


if(option.value=="FREEZE_LIFT_BY_MULTIPLE_PARTY")
{
 	var numOfParties=document.frm.cmbNoOfPins.value;
 	if(numOfParties=="")
 	{
 		alert("Please select the number of parties");
 		document.frm.cmbNoOfPins.focus();
  		return(false);
 	}

	var isValidPin=checkTenDigitPin(document.frm.txtTenDigitPIN);
 	if(isValidPin==false)
 	{
 		return(false);
 	}
}//end of option 2

if(option.value=="FREEZE_LIFT_PERMANENT")
{
	var isValidPin=checkTenDigitPin(document.frm.txtTenDigitPIN);
 	if(isValidPin==false)
 	{

	 	return(false);
 	}
}//end of option 3

if(option.value=="FREEZE_LIFT_BY_DATE_RANGE")
{
 	var fromDay=document.frm.cmbFromDay;
 	var fromMonth=document.frm.cmbFromMonth;
 	var fromYear=document.frm.cmbFromYear;
 	var toDay=document.frm.cmbToDay;
 	var toMonth=document.frm.cmbToMonth;
 	var toYear=document.frm.cmbToYear;
 	var curyr= parseInt(document.frm.curyear.value);
  	var curmon= parseInt(document.frm.curmonth.value)+1;
    var curday=parseInt(document.frm.curdate.value);
 	if(fromMonth.value=="")
 	{
 		alert("Please select 'From' Month for the Date Range");
 		fromMonth.focus();
 		return(false);
 	}

 	if(fromDay.value=="")
 	{
 		alert("Please select 'From' Day for the Date Range");
 		fromDay.focus();
 		return(false);
 	}

 	if(fromYear.value=="")
 	{
 		alert("Please select 'From' Year for the Date Range");
 		fromYear.focus();
 		return(false);
 	}

  	if(parseInt(fromYear.value)<curyr)
  	{
  		alert("From date cannot be lesser than the current date");
 		fromYear.focus();
 		return(false);
  	}
  	if(parseInt(fromYear.value)==curyr)
  	{
  		if(fromMonth.value<curmon)
  		{
  			alert("From date cannot be lesser than the current date");
 			fromMonth.focus();
 			return(false);
 		}
 		else if(fromMonth.value==curmon)
 		{
 			if(fromDay.value<curday)
 			{
 				alert("From date cannot be lesser than the current date");
 				fromDay.focus();
 				return(false);
 			}

 		}

  	}


 	if(!checkYear(fromYear))
 	{
 		alert("Please select valid 'From' year for Date Range");
 		fromYear.focus();
 		return(false);
 	}

 	if(!isValidDate(fromDay,fromMonth,fromYear))
 	{
 		return(false);
 	}

 	if(toMonth.value=="")
 	{
 		alert("Please select 'To' Month for the Date Range");
 		toMonth.focus();
 		return(false);
 	}

 	if(toDay.value=="")
 	{
 		alert("Please select 'To' Day for the Date Range");
 		toDay.focus();
 		return(false);
 	}

 	if(toYear.value=="")
 	{
 		alert("Please select 'To' Year for the Date Range");
 		toYear.focus();
 		return(false);
 	}

  if(parseInt(toYear.value)<curyr)
  	{
  		alert("To date cannot be lesser than the Current date");
 		toYear.focus();
 		return(false);
  	}

  	if(toYear.value==curyr)
  	{
  		if(toMonth.value<curmon)
  		{
  			alert("To date cannot be lesser than the Current date");
 			toMonth.focus();
 			return(false);
 		}
 		else if(toMonth.value==curmon)
 		{
 			if(toDay.value<curday)
 			{
 				alert("To date cannot be lesser than the Current date");
 				toDay.focus();
 				return(false);
 			}

 		}

  	}

 	if(!checkYear(toYear))
 	{
 		alert("Please select valid 'To' year for the Date Range");
 		toYear.focus();
 		return(false);
 	}

 	if(!isValidDate(toDay,toMonth,toYear))
 	{
	 	return(false);
 	}

  	var cmpDate=compareDate(parseInt(toYear.value),toMonth.value,toDay.value,parseInt(fromYear.value),fromMonth.value,fromDay.value);
 	if(cmpDate=="1")
 	{
 		alert("The 'From' Date cannot be greater than the 'To' Date");
 		document.frm.cmbFromMonth.focus();
 		return false;
 	}

 	if(cmpDate=="0")
 	{
 		alert("The 'From' Date cannot be the same as the 'To' Date");
 		document.frm.cmbFromMonth.focus();
 		return false;
 	}

 	if(cmpDate=="2")
 	{
 		alert("Difference between the 'From' Date and the 'To' Date cannot be more than a year  ");
 		document.frm.cmbFromMonth.focus();
 		return false;
 	}

 	var isValidPin=checkTenDigitPin(document.frm.txtTenDigitPIN);
  	if(isValidPin==false)
 	{
	 	return(false);
 	}
}//end of option 4

 	var flag=document.frm.validatePayment;
  	if(flag.value=="false")
 	{

 		var cardType=document.frm.cmbCreditCardType;
 	 	if(cardType.value=="credit card type")
		{
 			alert("Please select the card type");
 			cardType.focus();
 			return false;
 		}

 		var cardNum=document.frm.cmbCreditCardNumber;
 		if(cardNum.value.length==0 )
		{
			alert("Please enter the credit card number");
			cardNum.focus();
			cardNum.select();
			return(false);
		}

		if(cardNum.value.length<13)
		{
			alert("Please enter a valid credit card number (Minimum of 13 digits)");
			cardNum.focus();
			cardNum.select();
			return(false);
		}

		if((_isnan(cardNum.value))==false)
		{
			alert("Please enter only numbers");
			cardNum.focus();
			cardNum.select();
			return(false);
		}

 		var b=ctypecheck();
 		if(b==false)
 		{
 			cardNum.focus();
			cardNum.select();
 			return(false);
 		}

 		var cvvNum=document.frm.cmbCVVNumber;
 		if(cvvNum.value.length==0)
		{
			alert("Please enter the CVV number");
			cvvNum.focus();
			return(false);
		}

		if(cardType.value=="AMEX")
                {
                    if((cvvNum.value.length != 4))
                    {
			alert("Please enter a valid 4 digit CVV number");
			cvvNum.focus();
			return(false);
                    }
                }
                else
                {
                    if((cvvNum.value.length != 3))
                    {
						alert("Please enter a valid 3 digit CVV number");
						cvvNum.focus();
						return(false);
                    }
        	}


		if((_isnan(cvvNum.value))==false)
		{
			alert("Please enter only numbers for CVV number");
			cvvNum.focus();
			return(false);
		}

		var expMonth=document.frm.cmbExpMonth;
 		if(expMonth.value=="")
 		{
 			alert("Please select the expiry month of your credit card");
 			expMonth.focus();
 			return(false);
 		}

		var isValidExpYear=checkExpiryYear(document.frm.cmbExpYear);
 		if(isValidExpYear==false)
 		{
 		 	return(false);
		}
}//end of initial if



return true;

}//end of function formValidate


/*Function checks for validations on bin range and the number of digits in the
credit card number for the entered card type */
function ctypecheck()
{
	var ctype=document.frm.cmbCreditCardType.value;
	var cardNum=document.frm.cmbCreditCardNumber.value;
	var sixdigits=parseInt(cardNum.substring(0,6));

	if(ctype=="VISA")
	{

		if(!(cardNum.length==13 || cardNum.length==16))
		{
		alert("Enter exact number of digits for entered card type VISA (13 OR 16 digits)");
		document.frm.cmbCreditCardNumber.focus();
		document.frm.cmbCreditCardNumber.select();
		return false;
		}
		else
		{
			return true;
		}
	}
	else if(ctype=="MASTERCARD")
	{
		if(!(cardNum.length==16))
		{
			alert("Enter exact number of digits for entered card type MASTERCARD (16 digits)");
			document.frm.cmbCreditCardNumbercardNum.focus();
			document.frm.cmbCreditCardNumber.select();
			return false;
		}
		else
		{
			return true;
		}
	}
	else if(ctype=="AMEX")
	{
		if(!(cardNum.length==15))
		{
			alert("Enter exact number of digits for entered card type AMEX (15 digits)");
			document.frm.cmbCreditCardNumbercardNum.focus();
			document.frm.cmbCreditCardNumber.select();
			return false;
		}
		else
		{
			return true;
		}
	}
	else if(ctype=="DINERSCLUB")
	{
		if(cardNum.length==14 || cardNum.length==16)
		{
			alert("Enter exact number of digits for entered card type DINERSCLUB (14 OR 16 digits)");
			document.frm.cmbCreditCardNumber.focus();
			document.frm.cmbCreditCardNumber.select();
			return false;
		}
		else
		{
			return true;
		}
	}
	else if(ctype=="DISCOVER")
	{
		if(cardNum.length != 16)
		{
			alert("Enter exact number of digits for entered card type DISCOVER (16 digits)");
			document.frm.cmbCreditCardNumber.focus();
			document.frm.cmbCreditCardNumber.select();
			return false;
		}
		else
		{
			return true;
		}
	}


	/*if(ctype=="VISA")
	{

		if(cardNum.length==13 || cardNum.length==16)
		{
			if(!((sixdigits>=400000) && (sixdigits<=499999)))
			{
				alert("Enter valid card number for the selected card type VISA");
				document.frm.cmbCreditCardNumber.focus();
				document.frm.cmbCreditCardNumber.select();
				return false;
			}
			else
			{

				return true;
			}
		}
		else
		{
		alert("Enter exact number of digits for entered card type VISA (13 OR 16 digits)");
		document.frm.cmbCreditCardNumber.focus();
		document.frm.cmbCreditCardNumber.select();
		return false;
		}
	}
	else if(ctype=="MASTERCARD")
	{
		if(cardNum.length==16)
		{

			if(!((sixdigits>=510000) && (sixdigits<=559999)))
			{
				alert("Enter valid card number for the selected card type MASTERCARD");
				document.frm.cmbCreditCardNumber.focus();
				document.frm.cmbCreditCardNumber.select();
				return false;
			}
			else
			{
				return true;
			}
		}
		else
		{
			alert("Enter exact number of digits for entered card type MASTERCARD (16 digits)");
			document.frm.cmbCreditCardNumbercardNum.focus();
			document.frm.cmbCreditCardNumber.select();
			return false;
		}

	}
	else if(ctype=="AMEX")
	{
		if(cardNum.length==15)
		{
			if(!(((sixdigits>=340000) && (sixdigits<=349999))||((sixdigits>=370000) && (sixdigits<=379999))))
			{
				alert("Enter valid card number for the selected card type AMEX");
				document.frm.cmbCreditCardNumber.focus();
				document.frm.cmbCreditCardNumber.select();
				return false;
			}
			else
			{
				return true;
			}
		}
		else
		{
			alert("Enter exact number of digits for entered card type AMEX (15 digits)");
			document.frm.cmbCreditCardNumber.focus();
			document.frm.cmbCreditCardNumber.select();
			return false;
		}

	}
	else if(ctype=="DINERSCLUB")
	{
		if(cardNum.length==14 || cardNum.length==16)
		{
			if(!(((sixdigits>=300000) && (sixdigits<=305999))||((sixdigits>=309500) && (sixdigits<=309599))||((sixdigits>=360000) && (sixdigits<=369999))||((sixdigits>=380000) && (sixdigits<=389999))))
			{
				alert("Enter valid card number for the selected card type DINERSCLUB");
				document.frm.cmbCreditCardNumber.focus();
				document.frm.cmbCreditCardNumber.select();
				return false;
			}
			else
			{
				return true;
			}
		}
		else
		{
		alert("Enter exact number of digits for entered card type DINERSCLUB (14 OR 16 digits)");
		document.frm.cmbCreditCardNumber.focus();
		document.frm.cmbCreditCardNumber.select();
		return false;
		}

	}*/


}

/* Removes leading and trailing spaces from the passed string. Also removes
consecutive spaces and replaces it with one space. If something besides
a string is passed in (null, custom object, etc.) then return the input*/
function trim(inputString){

    if (typeof inputString != "string") {
        return inputString;
    }
    var retValue = inputString;
    var ch = retValue.substring(0, 1);
    while (ch == " ") { // Check for spaces at the beginning of the string
        retValue = retValue.substring(1, retValue.length);
        ch = retValue.substring(0, 1);
    }
    ch = retValue.substring(retValue.length - 1, retValue.length);
    while (ch == " ") { // Check for spaces at the end of the string
        retValue = retValue.substring(0, retValue.length - 1);
        ch = retValue.substring(retValue.length - 1, retValue.length);
    }
    while (retValue.indexOf("  ") != -1) { // Note that there are two spaces in the string - look for multiple spaces within the string
        retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ") + 1, retValue.length); // Again, there are two spaces in each of the strings
    }
    return retValue; // Return the trimmed string back to the user
} // Ends the "trim" function

/** Overcome limitations of isNaN()
 * @param String stringval
 */
function _isnan(stringval){
    if (stringval.length == 0) {
        return (false);
    }
    for (var i = 0; i < stringval.length; i++) {
        if ((stringval.substring(i, i + 1) < '0') || (stringval.substring(i, i + 1) > '9')) {
            return (false);
        }
    }
    return (true);
}

/** Check for alpha and special chars in string
 *  Allowed characters : letters, numbers, hyphen [-] and slash [/]
 * @param String stringval
 */
function _isnacnc(stringval){
    for (var i = 0; i < stringval.length; i++) {
        if ((stringval.substring(i, i + 1) < 'A') || (stringval.substring(i, i + 1) > 'Z')) {
            if ((stringval.substring(i, i + 1) < 'a') || (stringval.substring(i, i + 1) > 'z')) {
                if ((stringval.substring(i, i + 1) < '0') || (stringval.substring(i, i + 1) > '9')) {
                    if ((stringval.substring(i, i + 1) != '-') && (stringval.substring(i, i + 1) != ' ') && (stringval.substring(i, i + 1) != '/') && (stringval.substring(i, i + 1) != '*')) {
                        alert("Please enter only letters, numbers, hyphen -  slash /");
                        return (false);
                    }
                }
            }
        }
    }

    return (true);
}

/** Check for alpha and special chars in string
 * Allowed Characters : Alphabets.
 * @param String stringval
 */
function _isnc(stringval){
    if (stringval.length == 0) {
        return (false);
    }
    for (var i = 0; i < stringval.length; i++) {
        if ((stringval.substring(i, i + 1) < 'A') || (stringval.substring(i, i + 1) > 'Z')) {
            if ((stringval.substring(i, i + 1) < 'a') || (stringval.substring(i, i + 1) > 'z')) {

                return (false);

            }
        }
    }
    return (true);
}

/** Check for alpha and special chars in string
 * Allowed Characters : Alphabets, Hyphen [-] and Space.
 * @param String stringval
 */
function _isnac(stringval){

    if (stringval.length == 0) {
        return (false);
    }

    for (var i = 0; i < stringval.length; i++) {
        if ((stringval.substring(i, i + 1) < 'A') || (stringval.substring(i, i + 1) > 'Z')) {
            if ((stringval.substring(i, i + 1) < 'a') || (stringval.substring(i, i + 1) > 'z')) {
                if ((stringval.substring(i, i + 1) != '-') && (stringval.substring(i, i + 1) != ' ')) {
                    return (false);
                }
            }
        }
    }
    return (true);
}

/**
 * Validate 9 Digit SSN
 * @param {Object} field
 */
function checkSSN(field)
{
   var string = field.value;

   if(!_isnan(string))
   {
      if(string.length != 0)
      {
         alert("Please enter only numbers.");
         field.value = "";
         field.focus();
         return(false);
      }
      else
      {
         return(true);
      }
   }

   if (string.length != 9)
   {
      alert("Please Enter 9 digits of your Social Security Number");
      field.value = "";
      field.focus();
      return(false);
   }
   else
   {
      return(true);
   }
}
/**
 * Validate First 3 Digits in SSN
 * @param {Object} field
 */
function checkSSN1(field)
{
   var string = field.value;

   if(!_isnan(string))
   {
      if(string.length != 0)
      {
         alert("Please enter only numbers.");
         field.focus();
         field.select();
         return(false);
      }
      else
      {
         return(true);
      }
   }

   if (string.length != 3)
   {
      alert("Please Enter first 3 digits of your Social Security Number");
      field.focus();
      field.select();
      return(false);
   }
   else
   {
      return(true);
   }
}
/**
 * Validate Second 2 Digits in SSN
 * @param {Object} field
 */
function checkSSN2(field)
{
   var string = field.value;

   if(!_isnan(string))
   {
      if(string.length != 0)
      {
         alert("Please enter only numbers.");
         field.focus();
         field.select();
         return(false);
      }
      else
      {
         return(true);
      }
   }

   if (string.length != 2)
   {
      alert("Please enter next 2 digits of your Social Security Number");
      field.focus();
      field.select();
      return(false);
   }
   else
   {
      return(true);
   }
}

/**
 * Validate Last 4 Digits in SSN
 * @param {Object} field
 */
function checkSSN3(field)
{
   var string = field.value;

   if(!_isnan(string))
   {
      if(string.length != 0)
      {
         alert("Please enter only numbers.");
         field.focus();
         field.select();
         return(false);
      }
      else
      {
         return(true);
      }
   }

   if (string.length != 4)
   {
      alert("Please Enter last 4 digits of your Social Security Number");
      field.focus();
      field.select();
      return(false);
   }
   else
   {
      return(true);
   }
}
/**
 * Validate 4 digit year
 * @param {Object} field
 */
function checkYear(field)
{

	if(trim(field.value).length==0)
 	{
 		alert("Please enter Year");
 		field.focus();
 		field.select();
 		return false;
 	}

   var string = field.value;

   if(!_isnan(string))
   {
      if(string.length != 0)
      {
         alert("Please enter only numbers.");
         field.focus();
         field.select();
         return false;
      }

   }

   if (string.length != 4)
   {
      alert("Please Enter 4 digits of Year");
      field.focus();
      field.select();
      return false;
   }
   if((string > 2025) || (string <= 1875))
   {
    alert("Please Enter valid Year");
    field.focus();
    field.select();
    return false;
   }

  return true;
}


/*Function checks if expiry date in the credit card is
not less than the current date*/


function checkExpiryYear(field)
{

	if(field.value=="")
 	{
 		alert("Please select expiry Year");
 		field.focus();
 		return false;
 	}

   var string = field.value;


   if(!_isnan(string))
   {
      if(string.length != 0)
      {
         alert("Please enter only numbers.");
         field.value = "";
         field.focus();
         return false;
      }

   }

   if (string.length != 4)
   {
      alert("Please Enter 4 digits of Year");
      field.value = "";
      field.focus();
      return false;
   }
   var curyr= parseInt(document.frm.curyear.value);
   var curmon= parseInt(document.frm.curmonth.value)+1;
    var expMonth=document.frm.cmbExpMonth.value;
   if(string<curyr)
   {
   		alert("select a valid expiration year");
   		field.focus();
   		return(false);
   }
   	if(string==curyr)
   	{

   		if(expMonth<curmon)
   		{

   		alert("select a valid expiration month for the entered year");
   		field.focus();
   		return(false);
   		}
   	}

   if((string > 2025) || (string <= 1875))
   {
      	alert("Please select valid Year");
    	field.focus();
    	return false;
   }

  	return true;
}


/**
 * Validate Street name.
 * @param {Object} field
 */
function checkStreet(field)
{

  var stringval = trim(field.value.toUpperCase());
   if(stringval.length == 0)
   {
      alert("Enter a valid address");
      field.focus();
      field.select();
      return(false);
   }
   var noNumbers=0;
   var stringval1;
   var noAlpha=0;
   var stringval2;
   for(var i=0; i < stringval.length; i++)
   {
     stringval1=parseInt(stringval.substring(i, i+1));
     stringval2=stringval.substring(i, i+1);
     if(isNaN(stringval1))	{
       	if ((stringval2 < 'A') || (stringval2 > 'z'))	{
      		if ((stringval2 != '-') && (stringval2 != ' ') && (stringval2 != '/') && (stringval2 != '.'))	{
                  alert("Please Enter Only Numbers, Letters, Spaces, '-', '.' or '/'.");
                  field.focus();
                  field.select();
                  return(false);
            }
        }
        else	{
        	noAlpha=1;
        }
     }
     else if((stringval1 >= 0) && (stringval1 <= 9))	{
            noNumbers=1;
     }
   }
   if (noNumbers == 0)
   {
   		alert("Please Enter Apartment Number,House Number Or P.O.Box Number In The Address field");
   		field.focus();
   		field.select();
        return(false);
   }

   if (noAlpha == 0)
   {
   		alert("Please Enter The House/Plot Name,Street Name,Area Name");
   	    field.focus();
   	    field.select();
        return(false);
   }
   for(i=0;i<stringval.length;i++)	{

   		if ((stringval.substring(i, i+1) != " ") || (stringval.substring(i, i+1) != "-") || (stringval.substring(i, i+1) != "/") || (stringval.substring(i, i+1) != ","))
      	{
       		flag=1;
   		}
   }
   if(0==flag)	{
   		alert("Please Enter A Valid Address");
  		field.focus();
  		field.select();
   		return(false);
   }

   field.value = stringval;
   return(true);
}

/**
 * Validate 5 digit Zipcode
 * @param {Object} field
 */
function checkZipcode(field)
{
   var string = field.value;

   if(!_isnan(string))
   {
      if(string.length != 0)
      {
         alert("Please enter only numbers.");
         field.focus();
         field.select();
         return(false);
      }
   }

   if (string.length != 5)
   {
      alert("Please Enter 5 digits of your Zipcode");
      field.focus();
      field.select();
      return(false);
   }
  return true;
}


/**
 * Validate 10 digit PIN
 * @param {Object} field
 */
function checkTenDigitPin(field)
{
   var string = field.value;

   if(!_isnan(string))
   {
      if(string.length != 0)
      {
         alert("Please enter only numbers.");
         field.focus();
         field.select();
         return false;
      }
   }

   if (string.length != 10)
   {
      alert("Please Enter 10 digits of your PIN");
      field.focus();
      field.select();
      return false;
   }
  return true;
}


/*checks if the name entered has only alphabets ,hyphens and spaces and
allows no other special charactes*/
function checkName(field)	{
	var stringval = trim(field.value.toUpperCase());
   	var flag=0;
   	if(!_isnac(stringval))	{
    	if(0 != stringval.length )	{
   		    alert("Please Enter Only Letters, Hyphens, Or Spaces.");
        	field.focus();
        	field.select();
         	return(false);
      	}
   }
   for(i=0;i<stringval.length;i++)	{
   		if (stringval.substring(i, i + 1)>="A" && stringval.substring(i, i + 1)<="z")	{
        	flag=1;
        }
   }
   if(0==flag)	{
   		alert("Please Enter A Valid Name");
   		field.focus();
   		field.select();
   		return(false);
   }
   field.value = stringval;
   return(true);
}

/*check if the city name takes onlly alphabets, and spaces
and no other special characters*/
function checkCity(field)	{

	stringval=trim(field.value.toUpperCase());
	if(stringval.length == 0)
   {
      alert("Please Enter A Valid City");
      field.focus();
      field.select();
      return(false);
   }
	for(var i=0; i < stringval.length; i++)	{
    	if ((stringval.substring(i, i+1) < 'A') || (stringval.substring(i, i+1) > 'Z')){
        	if ((stringval.substring(i, i+1) < 'a') || (stringval.substring(i, i+1) > 'z')) {
        		if (!(stringval.substring(i, i+1) == '-' || stringval.substring(i, i+1) == ' ' || stringval.substring(i, i+1) == '.')) {
	            	alert("Please Enter Only Letters, Periods, Hyphens And Spaces ");
	                field.focus();
	                field.select();
	                return(false);
            	}
            }
        }
    }
     for(i=0;i<stringval.length;i++)	{
   		if (stringval.substring(i, i + 1)>="A" || stringval.substring(i, i + 1)<="z")	{
        	flag=1;
        }
   }
   if(0==flag)	{
   		alert("Please Enter A Valid City");
   		field.focus();
   		field.select();
   		return(false);
   }
   field.value = stringval;
    return(true);
}

/*move from one field to another*/
function tabIt(from,to){
	if (from.getAttribute && (from.value.length == from.getAttribute("maxlength")))	{
    	to.focus();
    	to.select();
	}
}



//Checking Valid Mname
function checkMname(field)	{
	var stringVar=field.value;
	if(stringVar<"A" || stringVar>"z")	{
		alert("Please Enter A Valid Initial");
		field.focus();
		field.select();
		return(false);
	}
}



/**
 * TODO: Need to write hte code for this function
 * Find whether the date is valid or not
 * @param {Object} dt
 * @param {Object} mon
 * @param {Object} yr
 */
 function isValidDate(dt, mon, yr) {
	var date=dt.value;
	var month=mon.value;
	var year=yr.value;
	if(month==9||month==2||month==4||month==6||month==11)	{
		if(31==date)	{
			alert("Plesae Select Proper Date For Selected Month");
			mon.focus();
			mon.select();
			return(false);
		}
	}
	if(0==year%4)	{
		if(2==month && 29<date)	{
			alert("Please Select Valid Date For Selected Month And Year");
			dt.focus();
			dt.select();
			return(false);
		}
	}
	else	{
		if(2==month && 28<date){
			alert("Please Select Valid Date For Selected Month");
			dt.focus();
			dt.select();
			return(false);
		}
	}
	return(true);
}



/**
 * Compare two dates and return
 * 		'0' if two dates are equal.
 * 		'1' if fromDate is greater than toDate
 *
 * @param {Object} fromDt
 * @param {Object} fromMon
 * @param {Object} fromYear
 * @param {Object} toDt
 * @param {Object} toMon
 * @param {Object} toYear
 */
function compareDate(toYear,toMonth,toDay,fromYear,fromMonth,fromDay) {

	var retval=3;
	if(toYear<fromYear)
	{
		retval="1";
		return(retval);
	}
	if(toYear==fromYear)

	{
		if(toMonth==fromMonth)
		{
			if(toDay==fromDay)
			{
				retval="0";
				return(retval);
			}
			else if(toDay<fromDay)
			{
				retval="1";
				return(retval);
			}

		}
		else if(toMonth<fromMonth)
		{

			retval="1";
			return(retval);
		}


	}

	if(toYear>fromYear)
	{

		if((toYear-fromYear)>1)
		{

			retval="2";
			return(retval);

		}
	}
	if(toYear-fromYear==1)
	{

		if(toMonth>fromMonth)
		{
			retval="2";
			return(retval);
		}
		else if(toMonth==fromMonth)
		{
			if(toDay>=fromDay)
			{
				retval="2";
				return(retval);
			}
		}
	}
	return retval;
}

/**
 * Disable specific Ctrl keys.
 * Usage : onKeyPress="return disableCtrlKeyCombination(event);" onKeyDown="return disableCtrlKeyCombination(event);"
 * @param Event e
 */
function disableCtrlKeyCombination(e){
    //list all CTRL + key combinations you want to disable
    var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'v', 'j');
    var key;
    var isCtrl;

    if (window.event) {
        key = window.event.keyCode; //IE
        if (window.event.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    else {
        key = e.which; //firefox
        if (e.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }

    //if ctrl is pressed check if other key is in forbidenKeys array
    if (isCtrl) {
        for (i = 0; i < forbiddenKeys.length; i++) {
            //case-insensitive comparation
            if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                /*alert('Key combination CTRL + '
                 +String.fromCharCode(key)
                 +' has been disabled.');*/
                return false;
            }
        }
    }
    return true;
}


/*********************/

function error()
{
document.getElementById("error").value="offline";
document.frm.submit();
}




/**
 * Function to Disable Right click.
 */
var message = "";
///////////////////////////////////
function clickIE(){
    if (document.all) {
        (message);
        return false;
    }
}

function clickNS(e){
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            (message);
            return false;
        }
    }
}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
}
else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}
document.oncontextmenu = new Function("return false");


function changeCVVNoMaxLength(cardType) {
	if ("AMEX" == cardType) {
		document.getElementById("CVV_NUM").setAttribute("maxLength", "4");
	} else {
		document.getElementById("CVV_NUM").setAttribute("maxLength", "3");
	}
}
