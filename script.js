const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");
const buttonStart = document.querySelector("#button-start");

button.addEventListener("click", async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => videoElement.play();
    } catch (error) {
        console.log(`Something went wrong ${error}`)
    }
});

// Starting the PiP mode on click
buttonStart.addEventListener("click", async () => {
    await videoElement.requestPictureInPicture();
});

document.addEventListener('contextmenu', event => event.preventDefault());