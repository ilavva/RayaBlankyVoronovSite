
function setUpperMenu(filename, relative_path) {
	var myMenu = new Array(8);
	relative_path = typeof relative_path !== 'undefined' ? relative_path : "";

	for (i = 0; i < myMenu.length; i++) {
		myMenu[i] = new Array(3);
	}
	myMenu[0]['page'] = "דף הבית";
	myMenu[0]['title'] = "index";
	myMenu[0]['file'] = "index.html";

	myMenu[1]['page'] = "מתחילים";
	myMenu[1]['title'] = "start";
	myMenu[1]['file'] = "pages/start.html";

	myMenu[2]['page'] = "אודותי";
	myMenu[2]['title'] = "about";
	myMenu[2]['file'] = "pages/about.html";

	myMenu[3]['page'] = "טיפולים פרטניים";
	myMenu[3]['title'] = "tipul_partani";
	myMenu[3]['file'] = "pages/tipul_partani.html";

	myMenu[4]['page'] = "טיפולים קבוצתיים";
	myMenu[4]['title'] = "tipul_kvutzati";
	myMenu[4]['file'] = "pages/tipul_kvutzati.html";

	myMenu[5]['page'] = "ייעוץ והדרכה";
	myMenu[5]['title'] = "yiutz_adraha";
	myMenu[5]['file'] = "pages/yiutz_adraha.html";

	myMenu[6]['page'] = "מאמרים";
	myMenu[6]['title'] = "articles";
	myMenu[6]['file'] = "pages/articles.html";

	myMenu[7]['page'] = "צור קשר";
	myMenu[7]['title'] = "contact";
	myMenu[7]['file'] = "pages/contact_us.html";


	document.write("<div id='menu'>");
	for (i = 0; i < myMenu.length; i++) {
		if (i > 0) {

			document.write("<span class='menusSymbol'>&nbsp;&#9834;    &nbsp;</span> ")
		}

		var strClassName = "menusText";
		if (myMenu[i]['title'] == filename) {
			strClassName = "selectedMenuText";
		}
		document.write("<span  class='" + strClassName + "' name='about'><b><a href='");
		document.write(relative_path + myMenu[i]['file']);
		document.write("'>");
		document.write(myMenu[i]['page']);
		document.write("</a></span>");
	}
	document.write("</div>");
}


