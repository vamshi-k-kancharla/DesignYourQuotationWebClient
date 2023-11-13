
var AddInventoryUtilsModule = (function () {

    /**
    * 
    * Takes care of quotation details Addition
    *
    */

    function addBricksInventoryItems(){

        if (GlobalWebClientModule.bDebug == true) {

            alert("Adding the bricks Inventory items from form input layout");
        }

        for (var currentInputId of GlobalWebClientModule.BricksInventoryRecordData_InputLabels) {

            if (GlobalWebClientModule.bDebug == true) {

                alert("currentInputId = " + currentInputId);
            }

            var formDataObjectMap = FormDataInputHelperUtilsModule.processInventoryFormInputData(currentInputId,
                GlobalWebClientModule.BasicInventoryRecordData_InputIdAppends,
                GlobalWebClientModule.BasicInventoryRecordData_InputIdAppends_FormInputTypes);

            if (GlobalWebClientModule.bDebug == true) {

                alert("Date = " + formDataObjectMap.get("DateOfPurchase"));
            }

            var currentInputObjectMap = new Map();

            currentInputObjectMap.set("Item_Name", currentInputId);
            currentInputObjectMap.set("Total_Quantity", formDataObjectMap.get("Quantity"));
            currentInputObjectMap.set("Price_Per_Unit", formDataObjectMap.get("PricePerUnit"));
            currentInputObjectMap.set("Date_Of_Purchase", formDataObjectMap.get("DateOfPurchase"));
            currentInputObjectMap.set("Total_Amount", formDataObjectMap.get("Amount"));
            currentInputObjectMap.set("Used_Quantity", 0);

            WebClientRequestHelperModule.webClientRequestAPIWrapper("AddInventory", currentInputObjectMap);

        }

        location.assign("./Kitchen.html");
    }


    /**
    * 
    * Reveal Private methods & variables
    *
    */

    return {

        addBricksInventoryItems: addBricksInventoryItems,
    }


})();
