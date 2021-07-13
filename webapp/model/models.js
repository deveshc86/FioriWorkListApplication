sap.ui.define(["sap/ui/model/json/JSONModel"],
function(oJSONModel){ 
	return { 
		createJSONModel: function(spath){ 
			// Instantiate a JSON Model
			var oJSON = new oJSONModel();
			
			// Set Model Data - Since only 3 entries are required to finish the exercise
			oJSON.loadData(spath);
				         
			return oJSON;	         
		}
	};
});