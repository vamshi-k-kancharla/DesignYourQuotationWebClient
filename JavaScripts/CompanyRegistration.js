
var CompanyRegistrationModule = (function () {

    /**
    * 
    * Takes care of User Registration
    *
    */

    function companyRegistration(){

        var uniqueCompanyId = "CompanyId_" + HelperUtilsModule.returnUniqueIdBasedOnCurrentTime();

        var companyRegistrationDataMap = FormDataInputHelperUtilsModule.processFormInputData(uniqueCompanyId,
            GlobalWebClientModule.companyRegistrationData_InputIds, GlobalWebClientModule.companyRegistrationData_Keys );

        if (GlobalWebClientModule.bDebug == true) {

            alert("companyRegistrationDataMap.length = " + companyRegistrationDataMap.size);
        }

        // Check for required input values

        if (HelperUtilsModule.valueDefined(companyRegistrationDataMap) && 
            FormDataInputHelperUtilsModule.checkForRequiredInputData(companyRegistrationDataMap,
            GlobalWebClientModule.companyRegistrationData_RequiredKeys)) {

            if (GlobalWebClientModule.bDebug == true) {

                alert("All the Required Input Values are Present in Form data..Proceeding further");
            }

        } else {

            alert("One of the Required Input Values are missing in Form data..Please enter all the required company registration data");
            return;
        }

        // Web Client Request for User Registration

        WebClientRequestHelperModule.webClientRequestAPIWrapperWithCallback("AddCompany", companyRegistrationDataMap,
            postCompanySignup_SuccessCallback, postCompanySignup_FailureCallback);
    }

    /**
    * 
    * Post processing Callbacks after Web Client Requests
    *
    */

    function postCompanySignup_SuccessCallback(webReqResponse) {

        alert("Company Registration was successful" + webReqResponse);
        document.location.replace("./HomePage.html");
    }

    function postCompanySignup_FailureCallback(webReqResponse) {

        alert("Company Registration has failed : " + webReqResponse);
        document.location.replace("./SignUpPage.html");
    }

    /**
    * 
    * Reveal Private methods & variables
    *
    */

    return {

        companyRegistration : companyRegistration,
    }

})();
