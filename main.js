var date=new Date();
const render= ()=>{
date.setDate(1);
console.log(date.getDay());
var current=date.getDay();
var last=new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
console.log(last);
var  months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];
var Monthdays=document.querySelector(".days");
var lastDate=new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
console.log(lastDate);
var lastDay=new Date(date.getFullYear(),date.getMonth(),0).getDate();

document.querySelector(".smonth").innerHTML=months[date.getMonth()];
document.querySelector(".date").innerHTML=date.toDateString();

var days="";
for(var x=current;x>0;x--)
{
	days+='<div class="prevday">'+(lastDay-x+1)+'</div>';
}

for(var i=1;i<=lastDate;i++){
	if(i === new Date().getDate()&&date.getMonth() === new Date().getMonth()){
		days+='<div class="today">'+i+'</div>';
	}
else{
	days+='<div>'+i+'</div>';
}
	
	Monthdays.innerHTML=days;
}
for(var y=1;y<=6-last;y++){
	days+='<div class="nextday">'+y+'</div>'
	Monthdays.innerHTML=days;

}
}
date.setDate(1);
console.log(date.getDay());
var current=date.getDay();
var last=new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
console.log(last);
var  months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];
var Monthdays=document.querySelector(".days");
var lastDate=new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
console.log(lastDate);
var lastDay=new Date(date.getFullYear(),date.getMonth(),0).getDate();

document.querySelector(".smonth").innerHTML=months[date.getMonth()];
document.querySelector(".date").innerHTML=new Date().toDateString();

var days="";
for(var x=current;x>0;x--)
{
	days+='<div class="prevday">'+(lastDay-x+1)+'</div>';
}

for(var i=1;i<=lastDate;i++){
	if(i === new Date().getDate()&&date.getMonth() === new Date().getMonth()){
		days+='<div class="today">'+i+'</div>';
	}
else{
	days+='<div>'+i+'</div>';
}
	
	Monthdays.innerHTML=days;
}
for(var y=1;y<=6-last;y++){
	days+='<div class="nextday">'+y+'</div>'
	Monthdays.innerHTML=days;

}

document.querySelector(".prev").addEventListener("click",()=>{
	date.setMonth(date.getMonth()-1);
	render();

});


document.querySelector(".next").addEventListener("click",()=>{
date.setMonth(date.getMonth()+1);
render();

});
render();

