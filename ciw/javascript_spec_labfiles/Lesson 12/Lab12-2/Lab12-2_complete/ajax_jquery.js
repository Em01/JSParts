 function loadScript(XMLscripts)
	{
		for( i=0; i < XMLscripts.length; i++){
		var dynScript = XMLscripts.item(i).firstChild.nodeValue;
		var newScript = document.createElement("script");
		newScript.src = dynScript;
		document.body.appendChild(newScript);
		}
	} 

  function loadData()
{
	
// Create the XML request  
	xmlReq = null;
	if(navigator.appName == "Microsoft Internet Explorer") xmlReq = new ActiveXObject("Microsoft.XMLHTTP");
	 else  xmlReq = new XMLHttpRequest();

	if(xmlReq==null) return; // Failed to create the request
	

	xmlReq.open("GET", "script.xml", true);
// Anonymous function to handle changed request states
xmlReq.setRequestHeader("Content-Type", "text/xml");
xmlReq.onreadystatechange = function()
	{
		switch(xmlReq.readyState)
		{
		case 0:	// Uninitialized
			break;
		case 1: // Loading
			break;
		case 2: // Loaded
			break;
		case 3: // Interactive
			break;
		case 4:	// Done!
		// Retrieve the data between the <script> tags
			if(navigator.appName == "Microsoft Internet Explorer"){
			xmlPar=new ActiveXObject("Microsoft.XMLDOM");
			xmlPar.async="false";
			xmlPar.loadXML(xmlReq.responseText); 
			loadScript(xmlPar.getElementsByTagName("SCRIPT"));
			}			
			else{ 
			loadScript(xmlReq.responseXML.getElementsByTagName("SCRIPT"));
			}
			break;
		default:
			break;
		}
	}

// Make the request
	xmlReq.send (null);
}

  // JavaScript Document