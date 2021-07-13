sap.ui.define(["sap/ui/core/UIComponent","accenture/fin/ar/model/models"],
function(oUIComponent, oModels){
	return oUIComponent.extend("accenture.fin.ar.Component",{ 
		metadata:{},
		init: function() { 
			oUIComponent.prototype.init.apply(this);
		},
		createContent: function() { 
			// Instantiate the root view - App view
			var oView = sap.ui.view("idView",{ 
				viewName:"accenture.fin.ar.view.App",
				type:"XML"
			});
			
			// Create and set the model at the Root view level so that it becomes global and is available to all views and controllers
			var oFruitModel = oModels.createJSONModel("model/Data/fruits.json");
			
			oView.setModel(oFruitModel);
			
			// Instantiate View 1
			var oView1 = sap.ui.view("idView1",{ 
				viewName:"accenture.fin.ar.view.View1",
				type:"XML"
			});
			
			// Instantiate View2
			var oView2 = sap.ui.view({ 
				viewName:"accenture.fin.ar.view.View2",
				type:"XML",
				id:"idView2"
			});
			
			//Root view App container object contains View1 and View 2
			// so get the App container object first
			var oApp = oView.byId("idApp");
			
			// Both oView1 and oView2 return a Page object
			oApp.addPage(oView1).addPage(oView2);
			
			return oView;
			
		}
	});
});