function toggleClass(event) {
  // Read dataset of clicked button
  console.log(event.target.dataset);

  // Find target element from dataset
  let target = document.querySelector(event.target.dataset.targetElement);
  console.log(target);

  // Toggle class on target
  target.classList.toggle(event.target.dataset.toggleClass);
}
