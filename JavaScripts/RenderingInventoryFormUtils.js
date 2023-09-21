
var RenderingInventoryFormUtilsModule = (function () {

    /**
     *
     * @param {DOMElement} formNode : Element id of Form Node
     * @param {string} formInputType : Input Type of form node element to be added
     * @param {string} formInputLabel : Label value of form Input node
     * @param {string} formInputId : Form Input Element Id
     * @param {Array} formLayoutRatio : Array of layout ratio for "Label: Input Node" of current form
     * @param {string} inputOnChangeInvokeFunction : Form input onchange Event trigger function
     *
     */

    function renderInventoryFormInputNode(formNode, formInputLabel, formInputIdAppends, formInputTypes, formLayoutRatio,
        inputOnChangeInvokeFunction) {

        var divNode = RenderingHelperUtilsModule.createNewElementWithAttributes("DIV", null, "form-group", null);
        {

            var innerDivNode = RenderingHelperUtilsModule.createNewElementWithAttributes("DIV", null, "col-sm-12",
                "text-align:center; padding-bottom: 3%");
            {   var lableNodeClass = "control-label col-sm-12";
                var labelNode = RenderingHelperUtilsModule.createNewElementWithAttributes("LABEL", null, lableNodeClass,
                    "text-align:center");
                labelNode.innerHTML = formInputLabel;

                innerDivNode.appendChild(labelNode);
            }

            divNode.appendChild(innerDivNode);


            var innerDivNodeForFormInputs = RenderingHelperUtilsModule.createNewElementWithAttributes("DIV", null, "col-sm-12",
                "text-align:right; padding-bottom: 3%");
            {

                var currentIndex = 0;
                for (var currentIdAppend of formInputIdAppends) {


                    var innerDivNodeForLabelAndFormElementNode = RenderingHelperUtilsModule.createNewElementWithAttributes("DIV", null, "col-sm-12",
                        "text-align: right; padding-bottom: 2%; padding-top: 2%;");
                    {
                        var innerDivNodeForLabelValue = RenderingHelperUtilsModule.createNewElementWithAttributes("DIV", null, "col-sm-4", "text-align: right");
                        {

                            var labelNode1 = RenderingHelperUtilsModule.createNewElementWithAttributes("LABEL", null, null, "text-align: right");
                            labelNode1.innerHTML = currentIdAppend;

                            innerDivNodeForLabelValue.appendChild(labelNode1);
                        }

                        innerDivNodeForLabelAndFormElementNode.appendChild(innerDivNodeForLabelValue);

                        var innerDivNodeForInputNode = RenderingHelperUtilsModule.createNewElementWithAttributes("DIV", null, "col-sm-8", null);
                        {

                            var currentNodeInputId = formInputLabel + "_" + currentIdAppend;

                            var childInputNode = RenderingHelperUtilsModule.createFormInputElement(formInputTypes[currentIndex], currentIdAppend, currentNodeInputId,
                                inputOnChangeInvokeFunction);

                            innerDivNodeForInputNode.appendChild(childInputNode);
                        }

                        innerDivNodeForLabelAndFormElementNode.appendChild(innerDivNodeForInputNode);
                    }

                    innerDivNodeForFormInputs.appendChild(innerDivNodeForLabelAndFormElementNode);
                    currentIndex++;
                }
            }

            divNode.appendChild(innerDivNodeForFormInputs);

        }

        formNode.appendChild(divNode);
        formNode.appendChild(RenderingHelperUtilsModule.createNewElementWithAttributes("DIV", null, null, "padding-bottom:20px"));
    }

    /****************************************************************************************
        Reveal private methods & variables
    *****************************************************************************************/

    return {

        renderInventoryFormInputNode: renderInventoryFormInputNode,

    };

})();
