const actions = document.querySelectorAll(".action");

actions.forEach(action => {
  action.addEventListener("click", () => {
    alert(`${action.textContent} feature coming soon 🚀`);
  });
});
