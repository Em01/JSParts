 function loadScript(XMLscripts, x)
	{
				var newScript = document.createElement("img");
				var prev = document.getElementById("prev");
				var next = document.getElementsByName("next")[0];
				next.onclick = function (){ loadData(x+1); return false; }
				prev.onclick = function (){ loadData(x-1); return false; }
				newScript.src = XMLscripts[x].getElementsByTagName("FILE")[0].firstChild.nodeValue;
				newScript.setAttribute('height', XMLscripts[x].getElementsByTagName("HEIGHT")[0].firstChild.nodeValue);
				newScript.setAttribute('width', XMLscripts[x].getElementsByTagName("WIDTH")[0].firstChild.nodeValue);
				newScript.setAttribute('alt', XMLscripts[x].getElementsByTagName("ALT")[0].firstChild.nodeValue);
				newScript.setAttribute('id', 'toggle');
				if ( document.getElementById("toggle")){
				document.body.removeChild(document.getElementById("toggle"));
				}
				if (x == 0){
				prev.setAttribute('onclick', '');	
				}
				if (x == XMLscripts.length-1){
				next.setAttribute('onclick', '');	
				}
				document.body.appendChild(newScript);

	} 

 function loadData(num)
{
// Create the XML request  
	xmlReq = null;
	if(navigator.appName == "Microsoft Internet Explorer") xmlReq = new ActiveXObject("Microsoft.XMLHTTP");
	 else  xmlReq = new XMLHttpRequest();

	if(xmlReq==null) return; // Failed to create the request
	

	xmlReq.open("GET", "picture.xml", true);
	
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
			loadScript(xmlPar.getElementsByTagName("PICTURE"), num);
			}			
			else{ 
			loadScript(xmlReq.responseXML.getElementsByTagName("PICTURE"),  num);
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