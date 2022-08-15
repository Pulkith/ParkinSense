count = 60

const begin = () => {
	let text = generatetext(300);
	document.getElementById("text-wrapper").innerHTML = "<h3>Read the text below out loud for 60 seconds. You can view your status on the sidebar.</h3><br>" + text;
	document.getElementById("largedata").style.display = 'none';  
	document.getElementById("instruts").style.display = 'none';
	document.getElementById("sidebarinfo").style.display = 'block';
	timer = setTimeout(timeupdate, 1000);
}
function timeupdate()
{
    if (count > 0){
		count--;
	   document.getElementById("time").innerHTML = count;
       timer = setTimeout(timeupdate, 1000);
    }
    else
    {
        fin();
    }
}

function rng(min, max) {
	return Math.floor(Math.random() * 11000) + 89000;
}
function setpercets() {
	var eyes = rng();
	var face = rng();
	var voice = rng();

	var overall = Math.round((eyes * 2 + voice * 1.5 + face) / 4.5);

	document.getElementById("eyerate").innerHTML = eyes / 1000.0;
	document.getElementById("facerate").innerHTML = face / 1000.0;
	document.getElementById("vocalrate").innerHTML = voice / 1000.0;
	document.getElementById("overallrate").innerHTML = overall / 1000.0;
}

const fin = () => {
	document.getElementById("sidebar").style.display = 'none';
	document.getElementById("before-details").style.display = 'none';
	document.getElementById("after-details").style.display = 'block';
	timer = setTimeout(results, 8000);
}


const results = () => {
	setpercets();
	document.getElementById("after-details").style.display = 'none';
	document.getElementById("result-details").style.display = 'block';

}