
var GlobalWebClientModule = (function () {

    // Globals & Configs

    var bDebug = false;
    var bCurrentDebugFlag = true;
    var webServerPrefix = "http://127.0.0.1:4501/?";
    var imageResourcePath = "./Resources/Pictures/";

    // PDF doc Util : Local cache

    // To do : pdfDoc object instatiation and usage across multiple files
    //         Option1 : cache,
    //         Option2 : global variable,
    //         Option3 : import from other file
    //         Option4 : Open an exclusive jsPDF from an existing pdf file.
    //         Optoin5 : usual fall back option : store the values in cache and write and save them for the last file in
    //         sequence.

    var pdfDoc;

    // Form Data Input Ids, Keys & Validation Reqs

    // User Registration Data

    var userRegistrationData_InputIds = ["UserType", "Name", "Location", "Email", "Address", "UserName", "Password", "Repeat-Password"];
    var userRegistrationData_Keys = ["User_Id", "UserType", "Name", "Location", "Email", "Address", "UserName", "Password", "Repeat-Password"];
    var userRegistrationData_RequiredKeys = ["User_Id", "UserType", "Name", "Email", "Address", "UserName", "Password"];

    // User Authentication Data

    var userAuthenticationData_InputIds = ["UserName", "Pwd"];
    var userAuthenticationData_Keys = ["UserName", "Password"];
    var userAuthenticationData_RequiredKeys = ["UserName", "Password"];




    // House Structure Form Input Data

    var structureFormInputData_InputLabels = ["Aggregates", "RCC Design Mix", "Ceiling Height", "Steel", "Cement", "Bricks"];
    var structureFormInputData_InputIds = ["Aggregates", "RCC_Design_Mix", "Ceiling_Height", "Steel", "Cement", "Bricks"];
    var structureFormInputData_InputTypes = ["text", "select", "text", "select", "select", "select"];
    var structureFormInputData_SelectInputInvokeFunctions = [null, null, null, null, null, null];
    var structureFormLayoutRatio = ["2", "8", "col-sm-1"];

    // Kitchen Form Input Data

    var kitchenFormInputData_InputLabels = ["Wall Tiles", "Main Sink Faucet", "Other faucet & Accessories", "Kitchen Sink"];
    var kitchenFormInputData_InputIds = ["Wall_Tiles", "Main_Sink_Faucet", "Other_Faucet_Accessories", "Kitchen_Sink"];
    var kitchenFormInputData_InputTypes = ["text", "text", "text", "text"];
    var kitchenFormInputData_SelectInputInvokeFunctions = [null, null, null, null];
    var kitchenFormLayoutRatio = ["2", "8", "col-sm-1"];

    // Bathroom Form Input Data

    var bathroomFormInputData_InputLabels = ["BathRoom Wall Tiles", "Sanitary Ware & CP Fittings", "CPVC Pipe", "Bathroom Doors"];
    var bathroomFormInputData_InputIds = ["BathRoom_Wall_Tiles", "Sanitary_Ware_And_CP_Fittings", "CPVC_Pipe", "Bathroom_Doors"];
    var bathroomFormInputData_InputTypes = ["text", "text", "select", "text"];
    var bathroomFormInputData_SelectInputInvokeFunctions = [null, null, null, null];
    var bathroomFormLayoutRatio = ["2", "8", "col-sm-1"];

    // Doors & Windows Form Input Data

    var doorsandwindowsFormInputData_InputLabels = ["Main Door", "Other Doors", "Windows", "Internal Doors", "Hardware"];
    var doorsandwindowsFormInputData_InputIds = ["Main_Door", "Other_Doors", "Windows", "Internal_Doors", "Hardware"];
    var doorsandwindowsFormInputData_InputTypes = ["text", "text", "text", "select", "select"];
    var doorsandwindowsFormInputData_SelectInputInvokeFunctions = [null, null, null, null, null];
    var doorsandwindowsFormLayoutRatio = ["2", "8", "col-sm-1"];

    // Painting Form Input Data

    var paintingFormInputData_InputLabels = ["Interior Painting", "Exterior Painting"];
    var paintingFormInputData_InputIds = ["Interior_Painting", "Exterior_Painting"];
    var paintingFormInputData_InputTypes = ["select", "select"];
    var paintingFormInputData_SelectInputInvokeFunctions = [null, null];
    var paintingFormLayoutRatio = ["2", "8", "col-sm-1"];

    // Flooring Form Input Data

    var flooringFormInputData_InputLabels = ["Living And Dining", "Rooms And Kitchen", "Balcony And Open Area", "Parking", "StairCase"];
    var flooringFormInputData_InputIds = ["Living_And_Dining", "Rooms_And_Kitchen", "Balcony_And_Open_Area", "Parking", "StairCase"];
    var flooringFormInputData_InputTypes = ["text", "text", "text", "text", "text"];
    var flooringFormInputData_SelectInputInvokeFunctions = [null, null, null, null, null];
    var flooringFormLayoutRatio = ["2", "8", "col-sm-1"];

    // Electrical Form Input Data

    var electricalFormInputData_InputLabels = ["Wires", "Switches And Sockets"];
    var electricalFormInputData_InputIds = ["Wires", "Switches_And_Sockets"];
    var electricalFormInputData_InputTypes = ["select", "select"];
    var electricalFormInputData_SelectInputInvokeFunctions = [null, null];
    var electricalFormLayoutRatio = ["2", "8", "col-sm-1"];

    // Miscellaneous Form Input Data

    var miscellaneousFormInputData_InputLabels = ["OverHead Tank", "Underground RCC Sump", "StairCase Railing", "Windows Grills"];
    var miscellaneousFormInputData_InputIds = ["OverHead_Tank", "Underground_RCC_Sump", "StairCase_Railing", "Windows_Grills"];
    var miscellaneousFormInputData_InputTypes = ["select", "select", "select", "text"];
    var miscellaneousFormInputData_SelectInputInvokeFunctions = [null, null, null, null];
    var miscellaneousFormLayoutRatio = ["2", "8", "col-sm-1"];


    // Current User Context : Local cache

    var pdfDimensions_DistanceBetweenLines = 8;
    var pdfDimensions_LineStart = 20;
    var pdfDimensions_LineWidth = 175;
    var pdfDimensions_NumberOfCharsInALine = 56;
    var pdfDimensions_DistanceBetweenLinesAfterHeading = 12;

    var currentLine_Y_Coordinate = 30;
    var newPage_Y_Coordinate = 25;



    // Budget Record Data

    var budgetRecordData_InputIds = ["BudgetName", "Budget_Type", "Place", "StartDate", "EndDate", "Amount"];
    var budgetRecordData_Keys = ["Budget_Id", "BudgetName", "Budget_Type", "Place", "StartDate", "EndDate", "Amount", "UserName"];
    var budgetRecordData_RequiredKeys = ["Budget_Id", "BudgetName", "Budget_Type", "Place", "StartDate", "EndDate", "Amount", "UserName"];



    // dummy Result Object For <Key, Value> Pairs display

    var currentBudgetId_Dummy = "BudgetId_46013020198516384440";
    var dummyResultObject_SummaryDetails = { currentCategory: "dummy", noOfExpenses: "100", expenditure: "4500" };
    var dummyResultObject_ExpenseDetails = { merchantName: "Subway", place: "Hyderabad", expenditure: "200" };

    var requiredKeysForCategorySummary = ["Expenditure", "NumOfExpenses"];

    // File Upload JSON Content Globals

    var uploadFileContent_RequiredFields = ["FileType", "FileData"];

    // Expose local variables for global access

    return {

        // Globals & Configs

        bDebug: bDebug,
        bCurrentDebugFlag: bCurrentDebugFlag,
        webServerPrefix: webServerPrefix,
        imageResourcePath: imageResourcePath,

        // Current User Context : Local cache

		//currentUserName_Key : currentUserName_Key,



        // Pdf Utils Document

        pdfDoc: pdfDoc,



        // Global data related to Form Data Input Processing

        userRegistrationData_InputIds: userRegistrationData_InputIds,
        userRegistrationData_Keys: userRegistrationData_Keys,
        userRegistrationData_RequiredKeys: userRegistrationData_RequiredKeys,

        userAuthenticationData_InputIds: userAuthenticationData_InputIds,
        userAuthenticationData_Keys: userAuthenticationData_Keys,
        userAuthenticationData_RequiredKeys: userAuthenticationData_RequiredKeys,

        budgetRecordData_InputIds: budgetRecordData_InputIds,
        budgetRecordData_Keys: budgetRecordData_Keys,
        budgetRecordData_RequiredKeys: budgetRecordData_RequiredKeys,




        // House Strcture Form Input Data

        structureFormInputData_InputLabels: structureFormInputData_InputLabels,
        structureFormInputData_InputIds: structureFormInputData_InputIds,
        structureFormInputData_InputTypes: structureFormInputData_InputTypes,
        structureFormInputData_SelectInputInvokeFunctions: structureFormInputData_SelectInputInvokeFunctions,
        structureFormLayoutRatio: structureFormLayoutRatio,

        // Kitchen Form Input Data

        kitchenFormInputData_InputLabels: kitchenFormInputData_InputLabels,
        kitchenFormInputData_InputIds: kitchenFormInputData_InputIds,
        kitchenFormInputData_InputTypes: kitchenFormInputData_InputTypes,
        kitchenFormInputData_SelectInputInvokeFunctions: kitchenFormInputData_SelectInputInvokeFunctions,
        kitchenFormLayoutRatio: kitchenFormLayoutRatio,

        // Bathroom Form Input Data

        bathroomFormInputData_InputLabels: bathroomFormInputData_InputLabels,
        bathroomFormInputData_InputIds: bathroomFormInputData_InputIds,
        bathroomFormInputData_InputTypes: bathroomFormInputData_InputTypes,
        bathroomFormInputData_SelectInputInvokeFunctions: bathroomFormInputData_SelectInputInvokeFunctions,
        bathroomFormLayoutRatio: bathroomFormLayoutRatio,

        // Doors & Windows Form Input Data

        doorsandwindowsFormInputData_InputLabels: doorsandwindowsFormInputData_InputLabels,
        doorsandwindowsFormInputData_InputIds: doorsandwindowsFormInputData_InputIds,
        doorsandwindowsFormInputData_InputTypes: doorsandwindowsFormInputData_InputTypes,
        doorsandwindowsFormInputData_SelectInputInvokeFunctions: doorsandwindowsFormInputData_SelectInputInvokeFunctions,
        doorsandwindowsFormLayoutRatio: doorsandwindowsFormLayoutRatio,

        // Painting Form Input Data

        paintingFormInputData_InputLabels: paintingFormInputData_InputLabels,
        paintingFormInputData_InputIds: paintingFormInputData_InputIds,
        paintingFormInputData_InputTypes: paintingFormInputData_InputTypes,
        paintingFormInputData_SelectInputInvokeFunctions: paintingFormInputData_SelectInputInvokeFunctions,
        paintingFormLayoutRatio: paintingFormLayoutRatio,

        // Flooring Form Input Data

        flooringFormInputData_InputLabels: flooringFormInputData_InputLabels,
        flooringFormInputData_InputIds: flooringFormInputData_InputIds,
        flooringFormInputData_InputTypes: flooringFormInputData_InputTypes,
        flooringFormInputData_SelectInputInvokeFunctions: flooringFormInputData_SelectInputInvokeFunctions,
        flooringFormLayoutRatio: flooringFormLayoutRatio,

        // Electrical Form Input Data

        electricalFormInputData_InputLabels: electricalFormInputData_InputLabels,
        electricalFormInputData_InputIds: electricalFormInputData_InputIds,
        electricalFormInputData_InputTypes: electricalFormInputData_InputTypes,
        electricalFormInputData_SelectInputInvokeFunctions: electricalFormInputData_SelectInputInvokeFunctions,
        electricalFormLayoutRatio: electricalFormLayoutRatio,

        // Miscellaneous Form Input Data

        miscellaneousFormInputData_InputLabels: miscellaneousFormInputData_InputLabels,
        miscellaneousFormInputData_InputIds: miscellaneousFormInputData_InputIds,
        miscellaneousFormInputData_InputTypes: miscellaneousFormInputData_InputTypes,
        miscellaneousFormInputData_SelectInputInvokeFunctions: miscellaneousFormInputData_SelectInputInvokeFunctions,
        miscellaneousFormLayoutRatio: miscellaneousFormLayoutRatio,



        // Current Context : Write to pdf generic parameters and contextual params

        pdfDimensions_DistanceBetweenLines: pdfDimensions_DistanceBetweenLines,
        pdfDimensions_LineStart: pdfDimensions_LineStart,
        pdfDimensions_LineWidth: pdfDimensions_LineWidth,
        pdfDimensions_NumberOfCharsInALine: pdfDimensions_NumberOfCharsInALine,
        pdfDimensions_DistanceBetweenLinesAfterHeading: pdfDimensions_DistanceBetweenLinesAfterHeading,

        currentLine_Y_Coordinate: currentLine_Y_Coordinate,

        newPage_Y_Coordinate: newPage_Y_Coordinate,


        // Dummy Result Objects

        currentBudgetId_Dummy: currentBudgetId_Dummy,
        dummyResultObject_SummaryDetails: dummyResultObject_SummaryDetails,
        dummyResultObject_ExpenseDetails: dummyResultObject_ExpenseDetails,

        requiredKeysForCategorySummary: requiredKeysForCategorySummary,

        uploadFileContent_RequiredFields: uploadFileContent_RequiredFields,


	}

}) ();