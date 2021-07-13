sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("accenture.fin.ar.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf accenture.fin.ar.view.View1
		 */
		//	onInit: function() {
		//
		//	},
           onNext: function(){
           	
           	this.getView().getParent().to("idView2");
           },
           
           onSearch: function(oEvent){ 
           	// Get the user entry from the Search Field and display it as the title on View2(Title property exists in Page object of View 2)
           	var whatuserTyped = oEvent.getParameter("query");
           	
           	// Get the parent of the view1 i.e App container control object
           	var oApp = this.getView().getParent();
           	
           	// The App container control object has 2 pages - View1 and View2, View2 is at index 1 of the array
           	var oView2 = oApp.getPages()[1];
           	
           	//Within View2, there is a content aggregation which has the Page object at index 0. We need to set the title of the Page object
           	oView2.getContent()[0].setTitle(whatuserTyped);
            
            // Go on the next page, reuse the onNext method
            this.onNext();
           },
           
           onDelete: function(){ 
           	// Get the List object 
           	var oList = this.getView().byId("idList");
           	
           	// Get all the items selected using MultiSelect
           	var aItems = oList.getSelectedItems();
          
           	// This is a very important concept - When you delete items from a List, always delete in descending order
           	for(var i=aItems.length; i >= 0; i--){ 
           		oList.removeItem(aItems[i]);
           	}
           	
           }
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf accenture.fin.ar.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf accenture.fin.ar.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf accenture.fin.ar.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});