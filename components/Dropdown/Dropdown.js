class Dropdown {
  constructor(element) {
    this.element = element;
    // Assign this.element to the dropdown element
    this.element = document.querySelector(".dropdown");

    this.button = this.element.querySelector(".dropdown-button");

    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener("click", () => {
      this.toggleContent(event);
    });
  }

  toggleContent(event) {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle("dropdown-hidden");
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll(".dropdown");
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));
