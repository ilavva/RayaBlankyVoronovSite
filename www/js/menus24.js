const prices = {
	"price_cbt": "400",
	"price_tipul_bemusika": "450",
	"price_biofeedback": "400",
	"price_tipul_rigshi_kids": "400",
	"price_tipul_rigshi_mevugarim": "400",
	"price_tipul_diadi": "400",
	"price_gil_itbagrut_partani": "400",
	"price_gil_itbagrut_kvuza": "500",
	"price_parents": "500",
	"price_prof_training": "400",
	"price_social_skills_partani": "400",
	"price_social_skills_kvuza": "500",
	"price_start_intake": "400",
	"price_tipul_metziut_meduma": "400",
	"price_tipul_tzlil": "400",
	"price_tipul_dbt": "400",
}

function setUpperMenu() {
	var myMenu = [];
	var strMenu = "";
	var relative_path = "../";
	var page = document.getElementById("header").getAttribute("page");
	if (page === "index") {
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
		<div id="logo_title">
				<h1>קליניקה לפסיכותרפיה</h1>
				<h2>טיפול ~ לימוד ~ הדרכה</h2>
		</div>

		<div id="upper_menu" page="${page}">
  				<input id="menu-toggle" type="checkbox" />
        		<label class='menu-button-container' for="menu-toggle">
        		<div class='menu-button'></div>
      	</label>
	  	<ul class="menu">`;

	for (i = 0; i < myMenu.length; i++) {
		var strClassName = "menuText";
		if (myMenu[i]['title'] == page) {
			strClassName = "selectedMenuText";
			strBreadcrumbs = `<a href="${relative_path}index.html">דף הבית</a> > ${myMenu[i]['page']}`;
		}

		strMenu += `<li  class='${strClassName}' name='${myMenu[i]['title']}'><a href='${relative_path}${myMenu[i]['file']}'>${myMenu[i]['page']}</a></li>`;
	}
	strMenu += "</ul></div>";
	document.getElementById("header").innerHTML = strMenu;
	if (page !== "index" && document.querySelector(".breadcrumbs")) {
		document.querySelector(".breadcrumbs").innerHTML = strBreadcrumbs;
	}
}

function setFooterData() {
	var suffix = "..";
	var relative_path = "../";
	var filename = document.getElementById("header").getAttribute("page");
	if (filename === "index") {
		suffix = ".";
		var relative_path = "./";
	}

	let str = `	<div class="footerDiv">
		<a
		  href="https://api.whatsapp.com/send?phone=9720544934956&text=%D7%94%D7%95%D7%93%D7%A2%D7%94%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%3A%20"
		  target="_blank"
		  ><img src="${relative_path}img/contact/whatsapp_s.png" alt="whatsapp"
		/></a>

		<a href="tel:+97254-4934956" target="_blank"
		  ><img src="${relative_path}img/contact/telephone-call_s.png" alt="telephone-call"
		/></a>

		<a href="mailto:raya.bv@gmail.com" target="_blank"
		  ><img src="${relative_path}img/contact/email_s.png" alt="email"
		/></a>

		<a
		  href="https://www.google.ru/maps/place/%D7%A7%D7%A8%D7%99%D7%AA+%D7%94%D7%A9%D7%A8%D7%95%D7%9F,+%D0%9D%D0%B5%D1%82%D0%B0%D0%BD%D0%B8%D1%8F%E2%80%AD/@32.3006414,34.8595484,14.5z/data=!4m6!3m5!1s0x151d3f92a2a21569:0xb0db5ac6c142ddf0!8m2!3d32.29976!4d34.874061!16s%2Fg%2F1tdhw507?entry=ttu"
		  target="_blank"
		  ><img src="${relative_path}img/contact/home-address_s.png" alt="home-address"
		/></a>
	  </div>`
	document.querySelector("footer").innerHTML = str;

}
function updatePrices() {
	for ([elem_id, price] of Object.entries(prices)) {
		const price_nil = `${price} שח`;
		let elem = document.querySelector(`#${elem_id}`);
		if (elem) {
			elem.innerHTML = price_nil;
		}
		elem = document.querySelector(`.${elem_id}`);
		if (elem) {
			elem.innerHTML = price_nil;
		}

	}
}
setFooterData();
setUpperMenu();
updatePrices();