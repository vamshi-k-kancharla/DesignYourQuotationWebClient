
var PdfWriteDataUtilsModule = (function () {

    /**
    * 
    * Takes care of quotation details Addition
    *
    */

    function saveHouseStructureQuotationInput(){

        /* Experment : To Do
         * 
         * figure out bold, italic, underline options.
         * figure out save to a specific location.
         * 
        */


        const { jsPDF } = window.jspdf;
        GlobalWebClientModule.pdfDoc = new jsPDF();

        window.localStorage.setItem("pdfDocObject", GlobalWebClientModule.pdfDoc);

        printDesignsAndDrawingsItem(GlobalWebClientModule.pdfDoc);

        alert("All the Required Input Values are present in the Quotation");

        printHouseStructureItem(GlobalWebClientModule.pdfDoc);


        /*
        alert("Finished printing House Structure Item");

        GlobalWebClientModule.pdfDoc.save("SimpleQuotation.Pdf");
        */
    }

    /**
    * 
    * Takes care of quotation details Addition
    *
    */

    function saveKitchenQuotationInput() {

        printKitchenItem(GlobalWebClientModule.pdfDoc);

        const { jsPDF } = window.jspdf;
        const pdfDoc = new jsPDF();


        printGenericParagraphItem("DesignsAndDrawingObject", 4, pdfDoc);
        printGenericParagraphItem("HouseStructureObject", 6, pdfDoc);
        printGenericParagraphItem("KitchenObject", 4, pdfDoc);

        alert("Finished printing Kitchen Items");

        pdfDoc.save("SimpleQuotation.Pdf");

    }

    /**
    * 
    * Print the DesignAndDrawing values into PDF file
    *
    */

    function printDesignsAndDrawingsItem(pdfDoc) {

        window.localStorage.setItem("DesignsAndDrawingObject.Heading", "Design & Drawings");
        window.localStorage.setItem("DesignsAndDrawingObject.Line.0", "Architectural Layout");
        window.localStorage.setItem("DesignsAndDrawingObject.Line.1", "Basic Elevation");
        window.localStorage.setItem("DesignsAndDrawingObject.Line.2", "Structural Design");
        window.localStorage.setItem("DesignsAndDrawingObject.Line.3", "3d Elevation");

        alert("check in same function Heading :=> " + window.localStorage.getItem("DesignsAndDrawingObject.Heading"));
        alert("check in same function Line 0 :=> " + window.localStorage.getItem("DesignsAndDrawingObject.Line.0"));

    }

    /**
    * 
    * Print the HouseStructure Data values into PDF file
    *
    */

    function printHouseStructureItem(pdfDoc) {


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

    function printKitchenItem(pdfDoc) {

        alert("check in different function Heading :=> " + window.localStorage.getItem("HouseStructureObject.Heading"));
        alert("check in different function Line 0 :=> " + window.localStorage.getItem("HouseStructureObject.Line.0"));
        
        window.localStorage.setItem("KitchenObject.Heading", "Kitchen");

        var i = 0;

        for (var currentItem of GlobalWebClientModule.kitchenFormInputData_InputLabels) {

            var basicKey = "KitchenObject.Line.";

            var currentKey = basicKey + i.toString();

            window.localStorage.setItem(currentKey, currentItem + " : " +
                document.getElementById(GlobalWebClientModule.kitchenFormInputData_InputIds[i]).value);

            i++
        }

    }


    /**
    * 
    * Print the the generic quotation paragraph
    *
    */

    function printGenericParagraphItem(objectName, noOfLines, pdfDoc) {

        alert("GenericParagraph Item enter the function");
        alert(window.localStorage.getItem(objectName.toString() + ".Heading"));

        pdfDoc.setFont("Courier-Bold");
        pdfDoc.setFontSize(20);

        pdfDoc.text(
            window.localStorage.getItem(objectName+ ".Heading"), GlobalWebClientModule.pdfDimensions_LineStart,
            GlobalWebClientModule.currentLine_Y_Coordinate);

        GlobalWebClientModule.currentLine_Y_Coordinate += GlobalWebClientModule.pdfDimensions_DistanceBetweenLinesAfterHeading;

        pdfDoc.setFont("Times-Italic");
        pdfDoc.setFontSize(15);

        let i = 0;

        while (i < noOfLines) {

            if (GlobalWebClientModule.bCurrentDebug == true) {

                alert("currentItem = " + window.localStorage.getItem(objectName + ".Line." + i) +
                    " , Y-Coordinate " + GlobalWebClientModule.currentLine_Y_Coordinate);
            }

            pdfDoc.text(window.localStorage.getItem(objectName + ".Line."+ i),
                GlobalWebClientModule.pdfDimensions_LineStart,
                GlobalWebClientModule.currentLine_Y_Coordinate);

            GlobalWebClientModule.currentLine_Y_Coordinate += GlobalWebClientModule.pdfDimensions_DistanceBetweenLines;

            i++;
        }

        GlobalWebClientModule.currentLine_Y_Coordinate += GlobalWebClientModule.pdfDimensions_DistanceBetweenLinesAfterHeading;

    }


    /**
    * 
    * Reveal Private methods & variables
    *
    */

    return {

        saveHouseStructureQuotationInput: saveHouseStructureQuotationInput,
        saveKitchenQuotationInput: saveKitchenQuotationInput,
    }

})();
