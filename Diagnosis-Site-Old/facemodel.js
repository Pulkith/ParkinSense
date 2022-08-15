  
  async function detect(sidebar = false) {
	const canvas = document.querySelector("#vid");
	const context = canvas.getContext("2d");
	const faceDetector = new FaceDetector({ fastMode: true });
	const mediaStream = await navigator.mediaDevices.getUserMedia({
	  video: { facingMode: "environment" }
	});
  
	const video = document.createElement("video");
	video.srcObject = mediaStream;
	video.autoplay = true;
	video.onloadedmetadata = () => {
	  canvas.width = video.videoWidth;
	  canvas.height = video.videoHeight;
	};
  
	function render() {
	  faceDetector
		.detect(video)
		.then((faces) => {
		  context.clearRect(0, 0, canvas.width, canvas.height);
		  context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
		  context.strokeStyle = "#FFFF00";
		  context.lineWidth = 5;
		  faces.forEach((face) => {
			const { top, left, width, height } = face.boundingBox;
			context.beginPath();
			context.rect(left, top, width, height);
			context.stroke();
		  });
		})
		.catch(console.error);
	}
  
	(function renderLoop() {
	  requestAnimationFrame(renderLoop);
	  render();
	})();

  }
    
  async function detect2() {
	const canvas = document.querySelector("#vid2");
	const context = canvas.getContext("2d");
	const faceDetector = new FaceDetector({ fastMode: true });
	const mediaStream = await navigator.mediaDevices.getUserMedia({
	  video: { facingMode: "environment" }
	});
  
	const video = document.createElement("video");
	video.srcObject = mediaStream;
	video.autoplay = true;
	video.onloadedmetadata = () => {
	  canvas.width = video.videoWidth;
	  canvas.height = video.videoHeight;
	};
  
	function render() {
	  faceDetector
		.detect(video)
		.then((faces) => {
		  context.clearRect(0, 0, canvas.width, canvas.height);
		  context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
		  context.strokeStyle = "#FFFF00";
		  context.lineWidth = 5;
		  faces.forEach((face) => {
			const { top, left, width, height } = face.boundingBox;
			context.beginPath();
			context.rect(left, top, width, height);
			context.stroke();
		  });
		})
		.catch(console.error);
	}
  
	(function renderLoop() {
	  requestAnimationFrame(renderLoop);
	  render();
	})();

  }
  