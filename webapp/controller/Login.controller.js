sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.swigy.controller.Login", {
			onInit: function () {
                
            },

            validateLogin : function(Name,Pwd){

                if (Name == Pwd) {
                    return true;
                } else {
                    return false;
                }
            },

            onLogin : function(){
                var oName = this.getView().byId("idName");
                var oPwd = this.getView().byId("idPwd");
                if(oName.getValue() == "")
                {
                    alert("Enter Credential");
                }
                else if (this.validateLogin(oName.getValue() , oPwd.getValue()) == true) {
                  this.getOwnerComponent().getRouter().navTo("RouteView2");  
                } else {
                   alert("Invalid Credential"); 
                }
             
            },
            onReset : function(){
                this.getView().byId("idName").setValue("") ;
                this.getView().byId("idPwd").setValue("");
             }
		});
	});
