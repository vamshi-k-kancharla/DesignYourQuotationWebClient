
var AddInventoryUtilsModule = (function () {

    /**
    * 
    * Takes care of quotation details Addition
    *
    */

    function addBasicInventoryItems() {

        addInventoryItems(GlobalWebClientModule.BasicInventoryRecordData_InputLabels, "Basic");
    }

    function addBricksInventoryItems() {

        addInventoryItems(GlobalWebClientModule.BricksInventoryRecordData_InputLabels, "Bricks");
    }

    function addDoorsAndWindowsInventoryItems() {

        addInventoryItems(GlobalWebClientModule.DoorsAndWindowsInventoryRecordData_InputLabels, "DoorsAndWindows");
    }

    function addElectricalInventoryItems() {

        addInventoryItems(GlobalWebClientModule.ElectricalInventoryRecordData_InputLabels, "Electrical");
    }

    function addMiscellaneousInventoryItems() {

        addInventoryItems(GlobalWebClientModule.MiscellaneousInventoryRecordData_InputLabels, "Miscellaneous");
    }

    function addPaintingInventoryItems() {

        addInventoryItems(GlobalWebClientModule.PaintingInventoryRecordData_InputLabels, "Painting");
    }

    function addPlumbingInventoryItems() {

        addInventoryItems(GlobalWebClientModule.PlumbingInventoryRecordData_InputLabels, "Plumbing");
    }

    function addInventoryItems(inputInventoryRecordData, inputGroupName){

        if (GlobalWebClientModule.bDebug == true) {

            alert("Adding Inventory items from form input layout of Group " + inputGroupName);
        }

        for (var currentInputId of inputInventoryRecordData) {

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

        addBasicInventoryItems: addBasicInventoryItems,
        addBricksInventoryItems: addBricksInventoryItems,
        addDoorsAndWindowsInventoryItems: addDoorsAndWindowsInventoryItems,
        addElectricalInventoryItems: addElectricalInventoryItems,
        addMiscellaneousInventoryItems: addMiscellaneousInventoryItems,
        addPaintingInventoryItems: addPaintingInventoryItems,
        addPlumbingInventoryItems: addPlumbingInventoryItems,

    }


})();
