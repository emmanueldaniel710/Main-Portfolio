const form = document.querySelector(".chat-input");
const input = document.querySelector("input");
const chatBox = document.querySelector(".chat-box");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!input.value.trim()) return;

  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = input.value;
  chatBox.appendChild(userMsg);

  input.value = "";

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.textContent = "This is a demo response 🤖";
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 700);
});
