// Select the scroll line element
const scrollLine = document.querySelector(".scroll-line");

// Function to update scroll progress
function updateScrollProgress() {
  const windowHeight = window.innerHeight; // Height of the viewport
  const fullHeight = document.documentElement.scrollHeight; // Total document height
  const scrolled = window.scrollY; // How much the page has been scrolled
  const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100; // Percentage of scroll
  scrollLine.style.width = `${percentScrolled}%`; // Set the width of the scroll line
}

// Call the function to initialize the scroll line on page load
updateScrollProgress();

// Variable to prevent multiple requests for updating during scroll
let ticking = false;

// Event listener for scroll
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateScrollProgress(); // Update scroll progress
      ticking = false;
    });
    ticking = true;
  }
});

// Event listener for window resizing
window.addEventListener("resize", updateScrollProgress);
