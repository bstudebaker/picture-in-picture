const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt to selecte the media stream, pass the stream to element, and then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    }catch(error){
        // Catch any errors
        console.log('Sorry the following error has occured: ', error);
    }
}

// Event Listener
buttonElement.addEventListener('click', async () =>{
    // Disable the button
    buttonElement.disabled = true;
    // Start the picture in picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    buttonElement.disabled = false;
});

// On Load
selectMediaStream();