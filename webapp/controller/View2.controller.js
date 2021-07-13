sap.ui.define([
	"sap/ui/core/mvc/Controller","accenture/fin/ar/model/models"
], function(Controller, oModels) {
	"use strict";

	return Controller.extend("accenture.fin.ar.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf accenture.fin.ar.view.View2
		 */
		   onInit: function() {
		    // Create an instance of JSON model 
		    var oJSONModel = oModels.createJSONModel("model/Data/SimpleForm.json");
		    var oTableJSONModel = oModels.createJSONModel("model/Data/Table.json");
		    
		    // Set the model at the View level - this one will be used for Simple Form 
		    this.getView().setModel(oJSONModel);
		    
		    //This model will be used exclusively for Table Control
		    this.getView().byId("idTable").setModel(oTableJSONModel);
			},
           onBack: function(){ 
           	this.getView().getParent().to("idView1");
           },
           //Counter to be set to 1 after first onAdd action performed by user
           onAddCounter: 0,
           
           // teamData is an array of Objects. The objects are the Model properties
           arrayteamData: [],
				         
		   addTeamData: function() { 
		   	var oModel = this.getView().getModel();
		   	
		   	// Get all the properties of the Model that are bound to the Simple Form Input values
           	var teamName = oModel.getProperty("/team/0/teamName");
           	var captainName = oModel.getProperty("/team/0/captainName");
           	var tshirtColor = oModel.getProperty("/team/0/tshirtColor");
           	
           	
	        // This is a locla variable which will store the user entries from the SimpleForm
		    var oNewEntries =  {"teamName":teamName,
				                "captainName":captainName,
				                "tshirtColor":tshirtColor};	         
           	
           	// When counter is 0, no need to push entries
           	if(this.onAddCounter){ 
           		this.arrayteamData = [oNewEntries];
           	}else{ 
           		this.arrayteamData.push(oNewEntries);
           	}
           	
		   },     
           onAdd: function(){ 
            // 1 Add and maintain the JSON Model data
           	this.addTeamData();
           	
           	//2 Set the JSON Model property "/team" with the latest value of this.arrayteamData inside the "table" model
           	this.getView().byId("idTable").getModel().setProperty("/team",this.arrayteamData);
           	
           	//3 Bind the table
           	this.bindTable();
           },
           
           bindTable: function(){ 
           	// Aggregation Binding of the rows of the Table using Absolute path
           	this.getView().byId("idTable").bindAggregation("rows","/team");
           	
           	// Bind the Input Controls with the data from the Simple Form i.e. Model Data using the relative path
           	this.getView().byId("idTeamName").bindProperty("text","teamName");
           	this.getView().byId("idCaptainName").bindProperty("text","captainName");
           	this.getView().byId("idTshirtColor").bindProperty("text","tshirtColor");
           }
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf accenture.fin.ar.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf accenture.fin.ar.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf accenture.fin.ar.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});