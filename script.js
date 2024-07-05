let startTime;
let isTyping = false;

function startTyping() {
    const textInput = document.getElementById("textInput").value;
    
    if (!isTyping) {
        isTyping = true;
        startTime = new Date().getTime();
        setInterval(calculateSpeed, 1000);
    }
}

function calculateSpeed() {
    const currentTime = new Date().getTime();
    const timeElapsed = (currentTime - startTime) / 1000; // in seconds
    
    const textInput = document.getElementById("textInput").value;
    const wordsTyped = textInput.trim().split(/\s+/).length;

    const typingSpeed = Math.round((wordsTyped / timeElapsed) * 60);

    document.getElementById("time").innerText = timeElapsed.toFixed(1);
    document.getElementById("words").innerText = wordsTyped;
    document.getElementById("speed").innerText = typingSpeed;
}
