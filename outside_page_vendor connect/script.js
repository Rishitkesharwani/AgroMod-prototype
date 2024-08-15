// Load the JSON data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const stateSelect = document.getElementById("state-select");
    const districtSelect = document.getElementById("district-select");

    // Populate the state dropdown
    data.states.forEach((state) => {
      const option = document.createElement("option");
      option.value = state.name;
      option.textContent = state.name;
      stateSelect.appendChild(option);
    });

    // Event listener for state selection
    stateSelect.addEventListener("change", function () {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        document.body.classList.remove("fade-out");
      }, 500); // Duration of the fade-out effect

      const selectedState = data.states.find(
        (state) => state.name === this.value
      );
      districtSelect.innerHTML = '<option value="">Select District</option>'; // Reset districts
      if (selectedState) {
        selectedState.districts.forEach((district) => {
          const option = document.createElement("option");
          option.value = district;
          option.textContent = district;
          districtSelect.appendChild(option);
        });
      }
    });

    // Event listener for district selection
    districtSelect.addEventListener("change", function () {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        document.body.classList.remove("fade-out");
      }, 500); // Duration of the fade-out effect
    });
  })
  .catch((error) => console.error("Error loading the JSON data:", error));
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("toggle-menu"),
  closeMenu = document.querySelector(".header__close");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
