const getTime = async () => {
    console.log(new Date().getTime())
    var offset = -6
    fetch('http://localhost:4000/prediction', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "time": (new Date().getTime() + offset * 3600 * 1000) / 1000
        })
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if(jsonResponse.prediction == 1) {
            start()
        }
        return false;
      }).catch (error => {
        console.log(error)
      })
  }



function start() {
    document.getElementById("tt1").style.display = 'none';
    document.getElementById("tt2").style.display = 'none';
    document.getElementById("tick").style.display = 'none';
    document.getElementById("countimage").style.display = 'none';
    document.getElementById("countimage1").style.display = 'block';
    const iframe = document.createElement("iframe");
    //iframe.style.display = "none";
    iframe.src = "count/audio.mp3"
    iframe.allow="autoplay"
    document.body.appendChild(iframe);
}