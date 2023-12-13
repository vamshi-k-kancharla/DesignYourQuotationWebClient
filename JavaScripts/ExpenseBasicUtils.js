
var ExpenseBasicModule = (function () {

    /**
    * 
    * Takes care of Expense Aggregator Utility Functions
    *
    */

    function expenseCreation(){

        var expenseDataMap = FormDataInputHelperUtilsModule.processFormInputData( null,
            GlobalWebClientModule.expenseFormInputData_InputIds,
            GlobalWebClientModule.expenseFormInputData_Keys);

        if (GlobalWebClientModule.bDebug == true) {

            alert("expenseDataMap.length = " + expenseDataMap.size);
        }

        // Check for required input values

        if (HelperUtilsModule.valueDefined(expenseDataMap) && 
            FormDataInputHelperUtilsModule.checkForRequiredInputData(expenseDataMap,
                GlobalWebClientModule.expenseFormInputData_Keys)) {

            if (GlobalWebClientModule.bDebug == true) {

                alert("All the Required Input Values are Present in Form data..Proceeding further");
            }

        } else {

            alert("One of the Required Input Values are missing in Form data..Please enter all the required expense data");
            return;
        }


        // Web Client Request for Expense Creation

        WebClientRequestHelperModule.webClientRequestAPIWrapperWithCallback("AddExpense", expenseDataMap,
            postExpenseBasicCreation_SuccessCallback, postExpenseBasicCreation_FailureCallback);
    }

    /**
    * 
    * Post processing Callbacks after Web Client Requests
    *
    */

    function postExpenseBasicCreation_SuccessCallback(webReqResponse) {

        alert("Expenses Creation was successful : " + webReqResponse);
        document.location.replace("./HomePage.html");
    }

    function postExpenseBasicCreation_FailureCallback(webReqResponse) {

        alert("Expenses Creation has failed : " + webReqResponse);
        document.location.replace("./ExpenseBasic.html");
    }

    /**
    * 
    * Reveal Private methods & variables
    *
    */

    return {

        expenseCreation: expenseCreation,
    }

})();
