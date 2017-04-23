function disp_delai() 
{document.forms[0].elements[0].value=delai(2003,1,1,0,0); 
setTimeout("disp_delai()",1000); 
} 

function delai(annee,mois,jour,heure,min) 
{var date_fin=new Date(annee,mois-1,jour,heure,min) 
var date_jour=new Date(); 
var tps=(date_fin.getTime()-date_jour.getTime())/1000; 
var j=Math.floor(tps/3600/24); // récupere le nb de jour 
tps=tps % (3600*24); 
var h=Math.floor(tps / 3600);	// recupère le nb d'heure 
tps=tps % 3600; 
var m=Math.floor(tps/60);	// récupère le nb minute 
tps=tps % 60 
var s=Math.floor(tps); 

var txt=j+" j "+h+" h "+m+" min et "+s+" sec"; 
date_fin=don_date(date_fin); 
return txt;} 

function don_date_jour() 
{var date_jour=new Date(); 
date_jour=don_date(date_jour); 
return date_jour;} 

function don_heure() 
{var date_jour=new Date(); 
var heure=date_jour.getHours(); 
var min=date_jour.getMinutes(); 
if (heure<10) heure="0"+heure; 
if (min<10) min="0"+min; 
heure=heure+":"+min; 
return heure;} 

function don_date(une_date) 
{var la_date; 
var months=new Array(12); 
months[1]="Janvier"; 
months[2]="Février"; 
months[3]="Mars"; 
months[4]="Avril"; 
months[5]="Mai"; 
months[6]="Juin"; 
months[7]="Juillet"; 
months[8]="Aout"; 
months[9]="Septembre"; 
months[10]="Octobre"; 
months[11]="Novembre"; 
months[12]="Décembre"; 

var days=new Array(7); 
days[1]="Lundi"; 
days[2]="Mardi"; 
days[3]="Mercredi"; 
days[4]="Jeudi"; 
days[5]="Vendredi"; 
days[6]="Samedi"; 
days[0]="Dimanche"; 

var month=months[une_date.getMonth() + 1]; 
var day=days[une_date.getDay()]; 
var date=une_date.getDate(); 
var year=une_date.getYear(); 

year=1900+year; 

la_date=day + " " + date + " " + month + " " + year; 
return la_date; 
} 
</SCRIPT> 

</head> 

<body text="#000000" alink="#FF8C00" link="#FF8C00" vlink="#FF8C00" onLoad="disp_delai()"> 

<FONT FACE="Arial" SIZE="-1" COLOR="navy"> 
<script TYPE="text/JavaScript"><!-- 
document.write("Aujourd'hui, nous sommes le "+don_date_jour()+" Il est"+don_heure()+"<BR>"); 