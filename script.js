function sendMessage() {
  const input = document.getElementById('user-input').value;
  const chatBox = document.getElementById('chat-box');

  // Display user message
  const userMessage = document.createElement('p');
  userMessage.textContent = "You: " + input;
  chatBox.appendChild(userMessage);

  // Fixed bot reply
  const botMessage = document.createElement('p');
  botMessage.textContent = "paulGPT: It’s all about your customers!";
  chatBox.appendChild(botMessage);

  // Clear input
  document.getElementById('user-input').value = '';
}
