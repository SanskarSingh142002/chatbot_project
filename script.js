function openChat() {
    var chatModal = document.getElementById('chatModal');
    chatModal.style.display = 'block';
}

function closeChat() {
    var chatModal = document.getElementById('chatModal');
    chatModal.style.display = 'none';
}

function sendMessage() {
    var input = document.getElementById('chatInput');
    var message = input.value.trim();
    if (message) {
        appendMessage('You: ' + message);
        input.value = ''; // Clear the input field
        
        // Get a response from the chatbot
        var reply = getBotResponse(message);
        
        // Display the bot's response
        appendMessage('Bot: ' + reply);
    }
}

function getBotResponse(message) {
    // Basic responses
    var responses = {
        "hi": "Hello! How can I assist you today?",
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm doing great, thank you! How about you?",
        "what is your name": "I am your friendly chatbot.",
        "bye": "Goodbye! Have a great day!"
    };

    // Default response if no match
    return responses[message.toLowerCase()] || "Sorry, I didn't understand that.";
}

function appendMessage(message) {
    var chatMessages = document.getElementById('chatMessages');
    var messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
}
