
function setUpperMenu() {
	var myMenu = [];
	var strMenu = "";
	var relative_path = "../";
	var filename = document.getElementById("upper_menu").getAttribute("page");
	if (filename === "index") {
		relative_path = "./";
	}

	myMenu.push({ 'page': "דף הבית", 'title': "index", 'file': "index.html" });
	myMenu.push({ 'page': "מתחילים", 'title': "start", 'file': "pages/start.html" });
	myMenu.push({ 'page': "אודותי", 'title': "about", 'file': "pages/about.html" });
	myMenu.push({ 'page': "טיפולים פרטניים", 'title': "tipul_partani", 'file': "pages/tipul_partani.html" });
	myMenu.push({ 'page': "טיפולים קבוצתיים", 'title': "tipul_kvutzati", 'file': "pages/tipul_kvutzati.html" });
	myMenu.push({ 'page': "ייעוץ והדרכה", 'title': "yiutz_adraha", 'file': "pages/yiutz_adraha.html" });
	myMenu.push({ 'page': "קורסים", 'title': "courses", 'file': "pages/courses.html" });
	myMenu.push({ 'page': "מאמרים", 'title': "articles", 'file': "pages/articles.html" });
	myMenu.push({ 'page': "צור קשר", 'title': "contact", 'file': "pages/contact_us.html" });

	var strBreadcrumbs = "";
	strMenu = `
  <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
        <div class='menu-button'></div>
      </label>
	  <ul class="menu">`;

	for (i = 0; i < myMenu.length; i++) {
		var strClassName = "menuText";
		if (myMenu[i]['title'] == filename) {
			strClassName = "selectedMenuText";
			strBreadcrumbs = `<a href="../index.html">דף הבית</a> > ${myMenu[i]['page']}`;
		}
		strMenu += `<li  class='${strClassName}' name='${myMenu[i]['title']}'><a href='${relative_path}${myMenu[i]['file']}'>${myMenu[i]['page']}</a></li>`;
	}
	strMenu += "</ul><div></div>";
	document.getElementById("upper_menu").innerHTML = strMenu;
	if (filename !== "index" && document.querySelector(".breadcrumbs")) {
		document.querySelector(".breadcrumbs").innerHTML = strBreadcrumbs;
	}
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