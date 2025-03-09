const quotes = {
    happy: [
        "Happiness depends upon ourselves. – Aristotle",
        "The most important thing is to enjoy your life—to be happy—it’s all that matters. – Audrey Hepburn",
        "For every minute you are angry you lose sixty seconds of happiness. – Ralph Waldo Emerson"
    ],
    sad: [
        "Tears come from the heart and not from the brain. – Leonardo da Vinci",
        "Sadness flies away on the wings of time. – Jean de La Fontaine",
        "It is okay to cry. – Unknown"
    ],
    motivated: [
        "The future depends on what you do today. – Mahatma Gandhi",
        "The way to get started is to quit talking and begin doing. – Walt Disney",
        "Your limitation—it’s only your imagination. – Unknown"
    ],
    anxious: [
        "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight. – Benjamin Franklin",
        "Nothing diminishes anxiety faster than action. – Walter Anderson",
        "Do one thing every day that scares you. – Eleanor Roosevelt"
    ],
    confident: [
        "You have to be odd to be number one. – Dr. Seuss",
        "Confidence is not ‘they will like me’. Confidence is ‘I’ll be fine if they don’t’. – Unknown",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson"
    ]
};

function generateQuote() {
    const emotion = document.getElementById("emotion").value; // get selected emotion
    const quoteDisplay = document.getElementById("quoteDisplay");

    if (emotion === "") {
        quoteDisplay.innerHTML = "Select an emotion to get a quote!"; // no emotion selected
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes[emotion].length); // get random quote
    const randomQuote = quotes[emotion][randomIndex]; // pick random quote

    quoteDisplay.innerHTML = `"${randomQuote}"`; // display the quote
}
