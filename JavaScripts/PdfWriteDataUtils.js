
var PdfWriteDataUtilsModule = (function () {

    /**
    * 
    * Takes care of quotation details Addition
    *
    */

    function saveHouseStructureQuotationInput(){

        printDesignsAndDrawingsItem();

        if (GlobalWebClientModule.bDebug == true) {

            alert("All the Required Input Values are present in the Quotation");
        }

        printHouseStructureItem();

        location.assign("./Kitchen.html");

    }

    /**
    * 
    * Takes care of quotation details Addition
    *
    */

    function saveKitchenQuotationInput() {

        printKitchenItem();

        if (GlobalWebClientModule.bDebug == true) {

            alert("Finished printing Kitchen Items");
        }

        location.assign("./Bathroom.html");
    }


    /**
    * 
    * Takes care of quotation details Addition
    *
    */

    function saveBathRoomQuotationInput() {

        printBathRoomItem();

        if (GlobalWebClientModule.bDebug == true) {

            alert("Finished printing BathRoom Items");
        }

        location.assign("./DoorsAndWindows.html");

    }

    /**
    * 
    * Takes care of quotation details Addition
    *
    */

    function saveDoorsAndWindowsQuotationInput() {

        printDoorsAndWindowsItem();

        if (GlobalWebClientModule.bDebug == true) {

            alert("Finished printing Doors & Windows Items");
        }

        location.assign("./Painting.html");

    }

    /**
    * 
    * Takes care of quotation details Addition
    *
    */

    function savePaintingQuotationInput() {

        printPaintingItem();

        if (GlobalWebClientModule.bDebug == true) {

            alert("Finished printing Painting Items");
        }

        location.assign("./Flooring.html");

    }

    /**
    * 
    * Takes care of quotation details Addition
    *
    */

    function saveFlooringQuotationInput() {

        printFlooringItem();

        if (GlobalWebClientModule.bDebug == true) {

            alert("Finished printing flooring Items");
        }

        location.assign("./Electrical.html");

    }

    /**
    * 
    * Takes care of quotation details Addition
    *
    */

    function saveElectricalQuotationInput() {

        printElectricalItem();

        if (GlobalWebClientModule.bDebug == true) {

            alert("Finished printing Electrical Items");
        }

        location.assign("./Miscellaneous.html");

    }

    /**
    * 
    * Takes care of quotation details Addition
    *
    */

    function saveMiscellaneousQuotationInput() {

        printMiscellaneousItem();

        const { jsPDF } = window.jspdf;
        const pdfDoc = new jsPDF();


        AddHeaderAndFooterToThePage(pdfDoc);

        printGenericParagraphItem("DesignsAndDrawingObject", 4, pdfDoc);
        printGenericParagraphItem("HouseStructureObject", 6, pdfDoc);
        printGenericParagraphItem("KitchenObject", 4, pdfDoc);

        if (GlobalWebClientModule.bDebug == true) {

            alert("After printing Bath Room Object details : " + GlobalWebClientModule.currentLine_Y_Coordinate);
        }

        printGenericParagraphItem("BathRoomObject", 4, pdfDoc);

        if (GlobalWebClientModule.bDebug == true) {

            alert("After printing Bath Room Object details : " + GlobalWebClientModule.currentLine_Y_Coordinate);
        }

        printGenericParagraphItem("DoorsAndWindowsObject", 4, pdfDoc);

        if (GlobalWebClientModule.bDebug == true) {

            alert("After printing Doors & Windows Object details : " + GlobalWebClientModule.currentLine_Y_Coordinate);
        }

        printGenericParagraphItem("PaintingObject", 2, pdfDoc);
        printGenericParagraphItem("FlooringObject", 5, pdfDoc);
        printGenericParagraphItem("ElectricalObject", 2, pdfDoc);
        printGenericParagraphItem("MiscellaneousObject", 4, pdfDoc);

        if (GlobalWebClientModule.bDebug == true) {

            alert("Finished Printing Miscellaneous Items");
        }

        pdfDoc.save("SimpleQuotation.Pdf");

    }

    /**
    * 
    * Print the DesignAndDrawing values into PDF file
    *
    */

    function AddHeaderAndFooterToThePage(pdfDoc)
    {

        pdfDoc.setFont("Times", "bold");
        pdfDoc.setFontSize(25);

        pdfDoc.text(GlobalWebClientModule.headerContent, GlobalWebClientModule.header_X_Coordinate,
            GlobalWebClientModule.header_Y_Coordinate);

        pdfDoc.setFont("Times", "normal");
        pdfDoc.setFontSize(12);

        pdfDoc.text(GlobalWebClientModule.footerContent, GlobalWebClientModule.footer_X_Coordinate,
            GlobalWebClientModule.footer_Y_Coordinate);

    }

    /**
    * 
    * Print the DesignAndDrawing values into PDF file
    *
    */

    function printDesignsAndDrawingsItem() {

        window.localStorage.setItem("DesignsAndDrawingObject.Heading", "Design & Drawings");
        window.localStorage.setItem("DesignsAndDrawingObject.Line.0", "Architectural Layout");
        window.localStorage.setItem("DesignsAndDrawingObject.Line.1", "Basic Elevation");
        window.localStorage.setItem("DesignsAndDrawingObject.Line.2", "Structural Design");
        window.localStorage.setItem("DesignsAndDrawingObject.Line.3", "3d Elevation");

        if (GlobalWebClientModule.bDebug == true) {

            alert("check in same function Heading :=> " + window.localStorage.getItem("DesignsAndDrawingObject.Heading"));
            alert("check in same function Line 0 :=> " + window.localStorage.getItem("DesignsAndDrawingObject.Line.0"));
        }

    }

    /**
    * 
    * Print the HouseStructure Data values into PDF file
    *
    */

    function printHouseStructureItem() {


        window.localStorage.setItem("HouseStructureObject.Heading", "House Structure");

        var i = 0;

        for (var currentItem of GlobalWebClientModule.structureFormInputData_InputLabels) {

            var basicKey = "HouseStructureObject.Line.";

            var currentKey = basicKey + i.toString();

            window.localStorage.setItem( currentKey, currentItem + " : " +
                document.getElementById(GlobalWebClientModule.structureFormInputData_InputIds[i]).value);

            i++;
        }

    }

    /**
    * 
    * Print the Kitchen Item Data values into PDF file
    *
    */

    function printKitchenItem() {

        if (GlobalWebClientModule.bDebug == true) {

            alert("check in different function Heading :=> " + window.localStorage.getItem("HouseStructureObject.Heading"));
            alert("check in different function Line 0 :=> " + window.localStorage.getItem("HouseStructureObject.Line.0"));
        }

        window.localStorage.setItem("KitchenObject.Heading", "Kitchen");

        var i = 0;

        for (var currentItem of GlobalWebClientModule.kitchenFormInputData_InputLabels) {

            var basicKey = "KitchenObject.Line.";

            var currentKey = basicKey + i.toString();

            window.localStorage.setItem(currentKey, currentItem + " : " +
                document.getElementById(GlobalWebClientModule.kitchenFormInputData_InputIds[i]).value);

            i++;
        }

    }


    /**
    * 
    * Print the Bathroom Item Data values into PDF file
    *
    */

    function printBathRoomItem() {

        window.localStorage.setItem("BathRoomObject.Heading", "BathRoom");

        var i = 0;

        for (var currentItem of GlobalWebClientModule.bathroomFormInputData_InputLabels) {

            var basicKey = "BathRoomObject.Line.";

            var currentKey = basicKey + i.toString();

            window.localStorage.setItem(currentKey, currentItem + " : " +
                document.getElementById(GlobalWebClientModule.bathroomFormInputData_InputIds[i]).value);

            i++;
        }

    }

    /**
    * 
    * Print the Doors And Windows Data values into PDF file
    *
    */

    function printDoorsAndWindowsItem() {

        window.localStorage.setItem("DoorsAndWindowsObject.Heading", "Doors & Windows");

        var i = 0;

        for (var currentItem of GlobalWebClientModule.doorsandwindowsFormInputData_InputLabels) {

            var basicKey = "DoorsAndWindowsObject.Line.";

            var currentKey = basicKey + i.toString();

            window.localStorage.setItem(currentKey, currentItem + " : " +
                document.getElementById(GlobalWebClientModule.doorsandwindowsFormInputData_InputIds[i]).value);

            i++;
        }
    }

    /**
    * 
    * Print the Painting Data values into PDF file
    *
    */

    function printPaintingItem() {

        window.localStorage.setItem("PaintingObject.Heading", "Painting");

        var i = 0;

        for (var currentItem of GlobalWebClientModule.paintingFormInputData_InputLabels) {

            var basicKey = "PaintingObject.Line.";

            var currentKey = basicKey + i.toString();

            window.localStorage.setItem(currentKey, currentItem + " : " +
                document.getElementById(GlobalWebClientModule.paintingFormInputData_InputIds[i]).value);

            i++;
        }
    }

    /**
    * 
    * Print the Painting Data values into PDF file
    *
    */

    function printFlooringItem() {

        window.localStorage.setItem("FlooringObject.Heading", "Flooring");

        var i = 0;

        for (var currentItem of GlobalWebClientModule.flooringFormInputData_InputLabels) {

            var basicKey = "FlooringObject.Line.";

            var currentKey = basicKey + i.toString();

            window.localStorage.setItem(currentKey, currentItem + " : " +
                document.getElementById(GlobalWebClientModule.flooringFormInputData_InputIds[i]).value);

            i++;
        }
    }

    /**
    * 
    * Print the Electrical Data values into PDF file
    *
    */

    function printElectricalItem() {

        window.localStorage.setItem("ElectricalObject.Heading", "Electrical");

        var i = 0;

        for (var currentItem of GlobalWebClientModule.electricalFormInputData_InputLabels) {

            var basicKey = "ElectricalObject.Line.";

            var currentKey = basicKey + i.toString();

            window.localStorage.setItem(currentKey, currentItem + " : " +
                document.getElementById(GlobalWebClientModule.electricalFormInputData_InputIds[i]).value);

            i++;
        }
    }

    /**
    * 
    * Print the Miscellaneous Data values into PDF file
    *
    */

    function printMiscellaneousItem() {

        window.localStorage.setItem("MiscellaneousObject.Heading", "Miscellaneous");

        var i = 0;

        for (var currentItem of GlobalWebClientModule.miscellaneousFormInputData_InputLabels) {

            var basicKey = "MiscellaneousObject.Line.";

            var currentKey = basicKey + i.toString();

            window.localStorage.setItem(currentKey, currentItem + " : " +
                document.getElementById(GlobalWebClientModule.miscellaneousFormInputData_InputIds[i]).value);

            i++;
        }
    }

    /**
    * 
    * Print the the generic quotation paragraph
    *
    */

    function printGenericParagraphItem(objectName, noOfLines, pdfDoc) {

        if (GlobalWebClientModule.bDebug == true) {

            alert("GenericParagraph Item enter the function");
            alert(window.localStorage.getItem(objectName.toString() + ".Heading"));
        }

        checkStatusAndAddPage(pdfDoc);

        pdfDoc.setFont("Courier", "bold");
        pdfDoc.setFontSize(20);

        pdfDoc.text(
            window.localStorage.getItem(objectName+ ".Heading"), GlobalWebClientModule.pdfDimensions_LineStart,
            GlobalWebClientModule.currentLine_Y_Coordinate);

        GlobalWebClientModule.currentLine_Y_Coordinate += GlobalWebClientModule.pdfDimensions_DistanceBetweenLinesAfterHeading;

        pdfDoc.setFont("Times", "normal");
        pdfDoc.setFontSize(13);

        let i = 0;

        while (i < noOfLines) {

            if (GlobalWebClientModule.bCurrentDebug == true) {

                alert("currentItem = " + window.localStorage.getItem(objectName + ".Line." + i) +
                    " , Y-Coordinate " + GlobalWebClientModule.currentLine_Y_Coordinate);
            }

            var currentLineForDisplay = window.localStorage.getItem(objectName + ".Line." + i);

            if (currentLineForDisplay.length <= GlobalWebClientModule.pdfDimensions_NumberOfCharsInALine) {

                checkStatusAndAddPage(pdfDoc);

                pdfDoc.setFont("Times", "normal");
                pdfDoc.setFontSize(13);

                pdfDoc.text(window.localStorage.getItem(objectName + ".Line." + i),
                    GlobalWebClientModule.pdfDimensions_LineStart,
                    GlobalWebClientModule.currentLine_Y_Coordinate);
                GlobalWebClientModule.currentLine_Y_Coordinate += GlobalWebClientModule.pdfDimensions_DistanceBetweenLines;
            }
            else {

                let startPos = 0;

                while (startPos < currentLineForDisplay.length) {

                    let endPos = (startPos + GlobalWebClientModule.pdfDimensions_NumberOfCharsInALine >
                        currentLineForDisplay.length) ? currentLineForDisplay.length :
                        startPos + GlobalWebClientModule.pdfDimensions_NumberOfCharsInALine;

                    let currentSubPart = currentLineForDisplay.substring(startPos, endPos);

                    checkStatusAndAddPage(pdfDoc);

                    pdfDoc.setFont("Times", "normal");
                    pdfDoc.setFontSize(13);

                    pdfDoc.text(currentSubPart,
                        GlobalWebClientModule.pdfDimensions_LineStart,
                        GlobalWebClientModule.currentLine_Y_Coordinate);
                    GlobalWebClientModule.currentLine_Y_Coordinate += GlobalWebClientModule.pdfDimensions_DistanceBetweenLines;

                    startPos = endPos;
                }
                
            }

            i++;
        }

        GlobalWebClientModule.currentLine_Y_Coordinate += GlobalWebClientModule.pdfDimensions_DistanceBetweenLinesAfterHeading;
    }


    /**
    * 
    * Print the the generic quotation paragraph
    *
    */

    function checkStatusAndAddPage(pdfDoc) {

        if (GlobalWebClientModule.currentLine_Y_Coordinate >= 270) {

            pdfDoc.addPage("a4", "portrait");

            AddHeaderAndFooterToThePage(pdfDoc);
            GlobalWebClientModule.currentLine_Y_Coordinate = GlobalWebClientModule.newPage_Y_Coordinate;
        }

    }

    /**
    * 
    * Reveal Private methods & variables
    *
    */

    return {

        saveHouseStructureQuotationInput: saveHouseStructureQuotationInput,
        saveKitchenQuotationInput: saveKitchenQuotationInput,
        saveBathRoomQuotationInput: saveBathRoomQuotationInput,
        saveDoorsAndWindowsQuotationInput: saveDoorsAndWindowsQuotationInput,
        savePaintingQuotationInput: savePaintingQuotationInput,
        saveFlooringQuotationInput: saveFlooringQuotationInput,
        saveElectricalQuotationInput: saveElectricalQuotationInput,
        saveMiscellaneousQuotationInput: saveMiscellaneousQuotationInput,

    }

})();
