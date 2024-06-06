document.getElementById("open-whatsapp-chat-btn").addEventListener("click", function () {
    var phoneNumber = '1234567890'; // Replace with your WhatsApp phone number
    var whatsappChatLink = 'https://wa.me/' + phoneNumber;
    window.open(whatsappChatLink, '_blank');
});

// Toggle chatbot widget visibility
var chatbotWidgetContainer = document.getElementById("chatbot-widget-container");
document.getElementById("open-whatsapp-chat-btn").addEventListener("click", function () {
    chatbotWidgetContainer.style.display = "block";
});

document.getElementById("send-btn").addEventListener("click", function () {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        sendMessage(userInput);
        document.getElementById("user-input").value = "";
    }
});

function sendMessage(message) {
    var chatMessages = document.querySelector(".chat-messages");
    var messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom of chat
}
