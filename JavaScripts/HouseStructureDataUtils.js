
var HouseStrcutureDataUtilsModule = (function () {

    /**
    * 
    * Takes care of quotation details Addition
    *
    */

    function saveQuotationInput(){

        /* Experment : To Do
         * 
         * figure out bold, italic, underline options.
         * figure out save to a specific location.
         * 
        */


        const { jsPDF } = window.jspdf;
        const pdfDoc = new jsPDF();

        printDesignsAndDrawingsItem(pdfDoc);

        alert("All the Required Input Values are present in the Quotation");

        printHouseStructureItem(pdfDoc);

        alert("Finished printing House Structure Item");

        pdfDoc.save("SimpleQuotation.Pdf");

    }

    /**
    * 
    * Print the DesignAndDrawing values into PDF file
    *
    */

    function printDesignsAndDrawingsItem(pdfDoc) {

        let designsAndDrawingObject = new Object();

        designsAndDrawingObject["Heading"] = "Design & Drawings";

        let designsAndDrawingsValueArray = [];

        designsAndDrawingsValueArray[0] = "Architectural Layout";
        designsAndDrawingsValueArray[1] = "Basic Elevation";
        designsAndDrawingsValueArray[2] = "Structural Design";
        designsAndDrawingsValueArray[3] = "3d Elevation";

        designsAndDrawingObject["ParagraphLines"] = designsAndDrawingsValueArray;

        printGenericParagraphItem(designsAndDrawingObject, pdfDoc);

    }

    /**
    * 
    * Print the HouseStructure Data values into PDF file
    *
    */

    function printHouseStructureItem(pdfDoc) {

        let houseStructureObject = new Object();

        houseStructureObject["Heading"] = "House Structure";

        let houseStructureValuesArray = [];

        houseStructureValuesArray[0] = "Aggregates : " + document.getElementById("Aggregates").value;
        houseStructureValuesArray[1] = "RCC Design Mix : " + document.getElementById("RCC_Design_Mix").value;
        houseStructureValuesArray[2] = "Ceiling Height : " + document.getElementById("Ceiling_Height").value;
        houseStructureValuesArray[3] = "Steel : " + document.getElementById("Steel").value;
        houseStructureValuesArray[4] = "Cement : " + document.getElementById("Cement").value;
        houseStructureValuesArray[5] = "Bricks : " + document.getElementById("Bricks").value;

        houseStructureObject["ParagraphLines"] = houseStructureValuesArray;

        alert("Printing House Structure Item after taking inputs");

        printGenericParagraphItem(houseStructureObject, pdfDoc);

    }

    /**
    * 
    * Print the the generic quotation paragraph
    *
    */

    function printGenericParagraphItem(inputDataObject, pdfDoc) {

        pdfDoc.setFont("Courier-Bold");
        pdfDoc.setFontSize(20);
        pdfDoc.text(inputDataObject["Heading"], GlobalWebClientModule.pdfDimensions_LineStart,
            GlobalWebClientModule.currentLine_Y_Coordinate);

        GlobalWebClientModule.currentLine_Y_Coordinate += GlobalWebClientModule.pdfDimensions_DistanceBetweenLinesAfterHeading;

        pdfDoc.setFont("Times-Italic");
        pdfDoc.setFontSize(15);

        for (var currentItem of inputDataObject["ParagraphLines"]) {

            alert("currentItem = " + currentItem + " , Y-Coordinate " + GlobalWebClientModule.currentLine_Y_Coordinate);
            pdfDoc.text(currentItem, GlobalWebClientModule.pdfDimensions_LineStart,
                GlobalWebClientModule.currentLine_Y_Coordinate);

            GlobalWebClientModule.currentLine_Y_Coordinate += GlobalWebClientModule.pdfDimensions_DistanceBetweenLines;

        }

        GlobalWebClientModule.currentLine_Y_Coordinate += GlobalWebClientModule.pdfDimensions_DistanceBetweenLinesAfterHeading;

    }


    /**
    * 
    * Reveal Private methods & variables
    *
    */

    return {

        saveQuotationInput: saveQuotationInput,
    }

})();
