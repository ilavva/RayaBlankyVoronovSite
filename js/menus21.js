
function setUpperMenu(filename, relative_path)
{
	var myMenu=new Array(8);
	relative_path = typeof relative_path !== 'undefined' ? relative_path : "";
	
	for (i=0;i<myMenu.length ; i++)
	{
		myMenu[i] = new Array(3);
	}
	myMenu[0]['page']="�� ����";
	myMenu[0]['title']="index";
	myMenu[0]['file']="index.html";
	
	myMenu[1]['page']="�������";
	myMenu[1]['title']="start";
	myMenu[1]['file']="pages/start.html";
	
	myMenu[2]['page']="������";
	myMenu[2]['title']="about";
	myMenu[2]['file']="pages/about.html";
	
	myMenu[3]['page']="������� �������";
	myMenu[3]['title']="tipul_partani";
	myMenu[3]['file']="pages/tipul_partani.html";
	
	myMenu[4]['page']="������� ��������";
	myMenu[4]['title']="tipul_kvutzati";
	myMenu[4]['file']="pages/tipul_kvutzati.html";
	
	myMenu[5]['page']="����� ������";
	myMenu[5]['title']="yiutz_adraha";
	myMenu[5]['file']="pages/yiutz_adraha.html";
	
	myMenu[6]['page']="������";
	myMenu[6]['title']="articles";
	myMenu[6]['file']="pages/articles.html";
	
	myMenu[7]['page']="��� ���";
	myMenu[7]['title']="contact";
	myMenu[7]['file']="pages/contact_us.html";
	

	document.write("<table cellpadding=0 cellspacing=2 id='menu' dir='rtl' align='right'>");
	document.write("<tr>");

	for(i = 0; i < myMenu.length; i++)
	{
		if(i>0)
		{ document.write("<td class='menusSymbol'>&nbsp;&#9834;&nbsp;</td>"); }
		if (myMenu[i]['title']==filename)
		{
			document.write("<td  class='selectedMenuText' name='about'><b><a href='");
			document.write(relative_path + myMenu[i]['file']);
			document.write("'>");
			document.write(myMenu[i]['page']);
			document.write("</a></b></td>");
		}else
		{
			document.write("<td  class='menusText' name='about'><a href='");
			document.write(relative_path + myMenu[i]['file']);
			document.write("'>");
			document.write(myMenu[i]['page']);
			document.write("</a></td>");
		}
	}

	document.write("</tr>");
	document.write("</table>");
}


