

const getwords = () => {
	var file = new XMLHttpRequest();
	file.open("GET", "commonwords.txt", false);
	let data = null;
    file.onreadystatechange = function () {
        if(file.readyState === 4) {
            if(file.status === 200 || file.status == 0) {
                var allText = file.responseText;
				let words = allText.split('\n');
				words.forEach((item) => {
				});
				data = words;
            }
        }
    }
    file.send(null);
	return data;
}

const generatetext = (limit) => {
	let words = getwords();
	let paragraph = "";
	for(let i = 0; i < limit; i++) {
		paragraph += words[Math.floor(Math.random()*words.length)] + " ";
	}	
	return paragraph;
}
