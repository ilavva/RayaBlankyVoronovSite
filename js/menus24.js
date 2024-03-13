
function setUpperMenu() {
	var myMenu = new Array(8);
	var strMenu = "";
	var relative_path = "../";
	var filename = document.getElementById("upper_menu").getAttribute("page");
	if (filename === "index") {
		relative_path = "./";
	}

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


	strMenu += "<div id='menu'>";
	for (i = 0; i < myMenu.length; i++) {
		var strClassName = "menuText";
		if (myMenu[i]['title'] == filename) {
			strClassName = "selectedMenuText";
		}
		if (i > 0) {

			strMenu += "<span class='menuSymbol'>&#9834;</span>"
		}
		strMenu += `<span  class='${strClassName}' name='about'><a href='${relative_path}${myMenu[i]['file']}'>${myMenu[i]['page']}</a></span>`;
	}
	strMenu += "</div>";
	document.getElementById("upper_menu").innerHTML = strMenu;
}

function setFooterData() {
	var suffix = "..";
	var filename = document.getElementById("upper_menu").getAttribute("page");
	if (filename === "index") {
		suffix = ".";
	}

	var str = '' +
		'<div class="footerData"><span> ד"ר רעיה בלנקי-וורונוב</span></div>' +
		'<div class="footerData">' +
		//	<!-- <span>raya.bv@gmail.com :ד"ר רעיה בלנקי-וורונוב. לקביעת פגישה חייגו: 054-4934956 או כתבו ל</span> -->
		//	<!-- <span>לקביעת פגישה חייגו: 054-4934956<img src="'+suffix+'/img/call_FILL0_wght400_GRAD0_opsz24.png" alt="Call 054-4934956" /></span> -->
		//	<!-- <span>או כתבו ל raya.bv@gmail.com <img src="'+suffix+'/img/mail_FILL0_wght400_GRAD0_opsz24.png" alt="mailto raya.bv@gmail.com" /></span> -->
		'	<span><a href="tel:054-4934956">לקביעת פגישה חייגו: 054-4934956<img src="' + suffix + '/img/call_FILL0_wght400_GRAD0_opsz24.png" alt="Call 054-4934956" /> </a></span>' +
		'	<span><a href="mailto:raya.bv@gmail.com" target="_blank">או כתבו ל raya.bv@gmail.com <img src="' + suffix + '/img/mail_FILL0_wght400_GRAD0_opsz24.png" alt="mailto raya.bv@gmail.com" /> </a></span>' +
		'</div>' +
		'<div class="footerData">' +
		'	<span><a href="https://api.whatsapp.com/send?phone=9720544934956&text=%D7%94%D7%95%D7%93%D7%A2%D7%94%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%3A%20" target="_blank"><img src="' + suffix + '/img/whatsapp.png" > הודעה לווטסאפ</a></span>' +
		'</div> ';
	document.querySelector("footer").innerHTML = str;

}
setFooterData();
setUpperMenu();