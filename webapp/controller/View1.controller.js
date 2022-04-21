sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("tproject1.controller.View1", {
            onInit: function () {
               this.getView().setModel(new JSONModel([]), "oProductTable");
               this._getData();
            },
            _getData:function(){
                var serviceUrl1 = this.getView().getModel().sServiceUrl;
			    var sPath1 = "/product";
			    var aUrl = serviceUrl1 + sPath1;
                var that = this;
			$.ajax({
				url: aUrl,
				method: "GET",
				async: true,
				contentType: "application/json",
				success: function (oData) {
					console.log(oData, "oj");
                    that.getView().getModel("oProductTable").setData(oData.value);
                    that.getView().getModel("oProductTable").refresh(true);
					
				},
				error: function (oError) {
					console.log("Error in fetching user data");
				}
			});
            }
        });
    });
