
        const themeToggle = document.getElementById("themeToggle");
        const calculateBtn = document.getElementById("calculateBtn");
        const clearBtn = document.getElementById("clearBtn");
        const container = document.querySelector(".container");
        const planetSelect = document.getElementById("planetSelect");
        const massInput = document.getElementById("massInput");
        const result = document.getElementById("result");
        const backgroundSlides = document.querySelectorAll(".background-slide");

        themeToggle.addEventListener("click", toggleTheme);
        calculateBtn.addEventListener("click", calculateWeight);
        clearBtn.addEventListener("click", clearInputs);
        planetSelect.addEventListener("change", changeBackground);

        if (localStorage.getItem("theme") === "dark") {
            container.classList.add("dark-theme");
        }

        function toggleTheme() {
            container.classList.toggle("dark-theme");
            const themePreference = container.classList.contains("dark-theme") ? "dark" : "light";
            localStorage.setItem("theme", themePreference);
        }

        function calculateWeight() {
            const selectedPlanetGravity = parseFloat(planetSelect.value);
            const userWeightOnEarth = parseFloat(massInput.value);

            if (isNaN(userWeightOnEarth)) {
                result.textContent = "Please enter a valid weight.";
                return;
            }

            const weightOnPlanet = (userWeightOnEarth * selectedPlanetGravity).toFixed(2);
            result.textContent = `Your weight on the selected planet is approximately ${weightOnPlanet} Newtons.`;
        }

        function clearInputs() {
            massInput.value = "";
            result.textContent = "";
        }

        function changeBackground() {
            const selectedIndex = planetSelect.selectedIndex;
            backgroundSlides.forEach((slide, index) => {
                slide.classList.toggle("active", index === selectedIndex);
            });
        }

        /*/ <option value="0.38">Mercury</option>
        <option value="0.91">Venus</option>
        <option value="0.38">Mars</option>
        <option value="2.34">Jupiter</option>
        <option value="0.93">Saturn</option>
        <option value="0.92">Uranus</option>
        <option value="1.12">Neptune</option>*/


        /* <div class="background-slide active">
        <img src="mercury2.jpg" alt="Background Image 1">
    </div>
    <div class="background-slide">
        <img src="venusm.jpg" alt="Background Image 2">
    </div>
    <div class="background-slide">
        <img src="mars.jpg" alt="Background Image 3">
    </div>
    <div class="background-slide">
        <img src="jupii.jpg" alt="Background Image 4">
    </div>
    <div class="background-slide">
        <img src="saturn.jpg" alt="Background Image 5">
    </div>
    <div class="background-slide">
        <img src="uranus.jpg" alt="Background Image 6">
    </div>
    <div class="background-slide">
        <img src="nepi.jpg" alt="Background Image 7">*/