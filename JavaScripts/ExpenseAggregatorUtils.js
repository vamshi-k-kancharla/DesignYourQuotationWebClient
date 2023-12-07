
var ExpenseAggregatorModule = (function () {

    /**
    * 
    * Takes care of Expense Aggregator Utility Functions
    *
    */

    function expenseAggregatorCreation(){

        //var uniqueUserId = "UserId_" + HelperUtilsModule.returnUniqueIdBasedOnCurrentTime();

        var expenseAggregatorDataMap = FormDataInputHelperUtilsModule.processFormInputData( null,
            GlobalWebClientModule.expenseAggregatorFormInputData_InputIds,
            GlobalWebClientModule.expenseAggregatorFormInputData_Keys);

        if (GlobalWebClientModule.bDebug == true) {

            alert("expenseAggregatorDataMap.length = " + expenseAggregatorDataMap.size);
        }

        // Check for required input values

        if (HelperUtilsModule.valueDefined(expenseAggregatorDataMap) && 
            FormDataInputHelperUtilsModule.checkForRequiredInputData(expenseAggregatorDataMap,
                GlobalWebClientModule.expenseAggregatorFormInputData_Keys)) {

            if (GlobalWebClientModule.bDebug == true) {

                alert("All the Required Input Values are Present in Form data..Proceeding further");
            }

        } else {

            alert("One of the Required Input Values are missing in Form data..Please enter all the required expense aggregator data");
            return;
        }

        expenseAggregatorDataMap.set("PaidAmount", 0);
        expenseAggregatorDataMap.set("BalanceAmount", expenseAggregatorDataMap.get("TotalAmount"));
        expenseAggregatorDataMap.set("NoOfExpenses", 0);


        // Web Client Request for User Registration

        WebClientRequestHelperModule.webClientRequestAPIWrapperWithCallback("AddExpenseAggregator", expenseAggregatorDataMap,
            postExpenseAggregatorCreation_SuccessCallback, postExpenseAggregatorCreation_FailureCallback);
    }

    /**
    * 
    * Post processing Callbacks after Web Client Requests
    *
    */

    function postExpenseAggregatorCreation_SuccessCallback(webReqResponse) {

        alert("Expenses Aggregator Creation was successful : " + webReqResponse);
        document.location.replace("./HomePage.html");
    }

    function postExpenseAggregatorCreation_FailureCallback(webReqResponse) {

        alert("Expenses Aggregator Creation has failed : " + webReqResponse);
        document.location.replace("./ExpenseAggregator.html");
    }

    /**
    * 
    * Reveal Private methods & variables
    *
    */

    return {

        expenseAggregatorCreation: expenseAggregatorCreation,
    }

})();
