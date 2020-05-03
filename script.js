const ids=["filosofici", "giuridici", "napoli","atene", 
"Orazio", "morte", "letterato", "litigio",
 "raccomandazione", "prigione", "politica", "avvocato", 
 "consolato", "pretura","tradimento","fedeltà" ,
"Britannia","Siria","suicidio","pretura2","mediazione",
"repressione","uccisione","misericordia","felicità",
"marcia","accordo"];
let buttons= document.getElementsByClassName('btn btn-outline-light btn-block');
const a=buttons.length;
function disableeven(num){
	buttons[num+1].disabled=true;
	buttons[num+1].style.background='black';
}
function disableodd(num){
	buttons[num-1].disabled=true;
	buttons[num-1].style.background='black';
}
function choice(num){
	const x=document.getElementById(ids[num]);
	if(x.style.display==="none"){
		x.style.display="block";
		window.scrollTo(0,document.body.scrollHeight);
	}
	if (num%2===0){
		disableeven(num);
	}
	else {
		disableodd(num);
	}
};

function studi(){
	const x=document.getElementById("studi");
	if(x.style.display==="none"){
		x.style.display="block";
		window.scrollTo(0,document.body.scrollHeight);
	}
}

function fine(){
	alert("Mi spiace ma non sarai tu il nuovo imperatore");
	window.location.href="loser.html";
}
function win(){
	alert("complimenti sarai tu il nuovo imperatore");
	window.location.href="winner.html";
}

