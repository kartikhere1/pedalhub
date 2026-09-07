// ============================================================
// PEDALHUB - forms.js
// Beginner-level JavaScript
// ============================================================


// ============================================================
// STEP 1: FIND THE FORM SECTION
// ============================================================

const section = document.getElementById("ph-form-section");

if (section) {

    // Find out which page we are on.
    const formType = section.getAttribute("data-form");


    // ========================================================
    // STEP 2: COMMON DOCK NAMES
    // ========================================================

    const dockOptions = [
        "Hostel A North",
        "Hostel A South",
        "Hostel B North",
        "Hostel B South",
        "Hostel C West",
        "Hostel C South",
        "Library West",
        "Library East",
        "Academic 1 Entry",
        "Academic 1 East",
        "Academic 2 North",
        "Academic 2 South",
        "Cafeteria Dock",
        "Cafeteria South",
        "Campus Centre",
        "Main Gate",
        "East Gate",
        "South Gate",
        "East Road",
        "Central Road",
        "Sports Complex",
        "Sports East"
    ];


    // ========================================================
    // STEP 3: CREATE THE FORM
    // ========================================================

    let formHTML = "";


    // ========================================================
    // HOME / RENT PAGE
    // ========================================================

    if (formType === "rent") {

        formHTML = `
            <div class="container">

                <span class="section-eyebrow">
                    Campus Bike Rental
                </span>

                <h2>
                    🚲 Find My Bike
                </h2>

                <p class="form-desc">
                    Tell us what you need and we'll find the best bike option for you.
                </p>

                <div class="ph-form-card">

                    <form id="ph-form" novalidate>

                        <div class="ph-field">

                            <label class="ph-label">
                                Where are you now?
                            </label>

                            <select class="ph-select" id="location">

                                <option value="">
                                    Choose...
                                </option>

                                <option value="Hostel A">
                                    Hostel A
                                </option>

                                <option value="Hostel B">
                                    Hostel B
                                </option>

                                <option value="Hostel C">
                                    Hostel C
                                </option>

                                <option value="Library">
                                    Library
                                </option>

                                <option value="Academic Block">
                                    Academic Block
                                </option>

                                <option value="Cafeteria">
                                    Cafeteria
                                </option>

                                <option value="Sports Complex">
                                    Sports Complex
                                </option>

                                <option value="Main Gate">
                                    Main Gate
                                </option>

                            </select>

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                How long do you need it?
                            </label>

                            <select class="ph-select" id="duration">

                                <option value="">
                                    Choose...
                                </option>

                                <option value="1">
                                    Under 1 hour
                                </option>

                                <option value="3">
                                    1–3 hours
                                </option>

                                <option value="6">
                                    3–6 hours
                                </option>

                                <option value="day">
                                    Whole day
                                </option>

                            </select>

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                How many bikes do you need?
                            </label>

                            <select class="ph-select" id="bikeCount">

                                <option value="">
                                    Choose...
                                </option>

                                <option value="1">
                                    1 bike
                                </option>

                                <option value="2">
                                    2 bikes
                                </option>

                                <option value="3">
                                    3 bikes
                                </option>

                                <option value="4">
                                    4 bikes
                                </option>

                            </select>

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                What are you riding for?
                            </label>

                            <select class="ph-select" id="purpose">

                                <option value="">
                                    Choose...
                                </option>

                                <option value="class">
                                    Going to class
                                </option>

                                <option value="explore">
                                    Exploring campus
                                </option>

                                <option value="library">
                                    Going to the library
                                </option>

                                <option value="exercise">
                                    Exercise
                                </option>

                                <option value="other">
                                    Other
                                </option>

                            </select>

                        </div>


                        <button
                            type="submit"
                            class="ph-submit"
                        >
                            Find My Bike →
                        </button>

                    </form>

                </div>


                <div
                    class="ph-success"
                    id="ph-success"
                    style="display:none;"
                ></div>

            </div>
        `;
    }


    // ========================================================
    // PRICING PAGE
    // ========================================================

    if (formType === "plan") {

        formHTML = `
            <div class="container">

                <span class="section-eyebrow">
                    Pricing
                </span>

                <h2>
                    🧮 Calculate My Ride Cost
                </h2>

                <p class="form-desc">
                    See exactly what your ride will cost before you book.
                </p>


                <div class="ph-form-card">

                    <form id="ph-form" novalidate>

                        <div class="ph-field">

                            <label class="ph-label">
                                Choose your plan
                            </label>

                            <select class="ph-select" id="plan">

                                <option value="">
                                    Choose...
                                </option>

                                <option value="student">
                                    Student — ₹15/hr
                                </option>

                                <option value="explorer">
                                    Explorer — ₹22/hr
                                </option>

                                <option value="group">
                                    Group — ₹60/hr
                                </option>

                            </select>

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                How many hours?
                            </label>

                            <input
                                class="ph-input"
                                type="number"
                                id="hours"
                                placeholder="e.g. 3"
                            >

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                How many bikes?
                            </label>

                            <select
                                class="ph-select"
                                id="numberOfBikes"
                            >

                                <option value="">
                                    Choose...
                                </option>

                                <option value="1">
                                    1 bike
                                </option>

                                <option value="2">
                                    2 bikes
                                </option>

                                <option value="3">
                                    3 bikes
                                </option>

                                <option value="4">
                                    4 bikes
                                </option>

                            </select>

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                Need the bike for the whole day?
                            </label>

                            <select
                                class="ph-select"
                                id="wholeDay"
                            >

                                <option value="">
                                    Choose...
                                </option>

                                <option value="yes">
                                    Yes
                                </option>

                                <option value="no">
                                    No
                                </option>

                            </select>

                        </div>


                        <button
                            type="submit"
                            class="ph-submit"
                        >
                            Calculate Cost →
                        </button>

                    </form>

                </div>


                <div
                    class="ph-success"
                    id="ph-success"
                    style="display:none;"
                ></div>

            </div>
        `;
    }


    // ========================================================
    // REPAIR PAGE
    // ========================================================

    if (formType === "repair") {

        formHTML = `
            <div class="container">

                <span class="section-eyebrow">
                    Repairs
                </span>

                <h2>
                    🔧 What's Wrong With Your Bike?
                </h2>

                <p class="form-desc">
                    Tell us what happened and we'll recommend the right service.
                </p>


                <div class="ph-form-card">

                    <form id="ph-form" novalidate>


                        <div class="ph-field">

                            <label class="ph-label">
                                What problem are you having?
                            </label>

                            <select
                                class="ph-select"
                                id="problem"
                            >

                                <option value="">
                                    Choose...
                                </option>

                                <option value="tyre">
                                    Flat tyre
                                </option>

                                <option value="brake">
                                    Brake problem
                                </option>

                                <option value="chain">
                                    Chain problem
                                </option>

                                <option value="gear">
                                    Gear problem
                                </option>

                                <option value="noise">
                                    Strange noise
                                </option>

                                <option value="other">
                                    Other
                                </option>

                            </select>

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                Can you still ride the bike?
                            </label>

                            <div class="ph-radio-group" role="radiogroup" aria-label="Can you still ride the bike?">

                                <label class="ph-radio-option">
                                    <input
                                        type="radio"
                                        name="canRide"
                                        value="yes"
                                        class="ph-radio-input"
                                    >
                                    <span class="ph-radio-text">Yes</span>
                                </label>

                                <label class="ph-radio-option">
                                    <input
                                        type="radio"
                                        name="canRide"
                                        value="no"
                                        class="ph-radio-input"
                                    >
                                    <span class="ph-radio-text">No</span>
                                </label>

                            </div>

                        </div>


                        <div class="ph-field">

                            <div class="ph-range-header">
                                <label class="ph-label" for="seriousnessSlider">
                                    How serious is the problem?
                                </label>
                                <span class="ph-range-badge severity-moderate" id="seriousnessBadge">
                                    Moderate
                                </span>
                            </div>

                            <input
                                type="range"
                                min="1"
                                max="3"
                                step="1"
                                value="2"
                                id="seriousnessSlider"
                                class="ph-range-slider"
                                aria-label="How serious is the problem"
                            >

                            <input
                                type="hidden"
                                id="seriousness"
                                value="moderate"
                            >

                            <div class="ph-range-labels">
                                <span class="ph-range-tick" data-val="1">🟢 Small</span>
                                <span class="ph-range-tick active" data-val="2">🟡 Moderate</span>
                                <span class="ph-range-tick" data-val="3">🔴 Serious</span>
                            </div>

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                Where is the bike?
                            </label>

                            <select
                                class="ph-select"
                                id="repairLocation"
                            >

                                <option value="">
                                    Choose...
                                </option>

                                <option value="Hostel A">
                                    Hostel A
                                </option>

                                <option value="Hostel B">
                                    Hostel B
                                </option>

                                <option value="Hostel C">
                                    Hostel C
                                </option>

                                <option value="Library">
                                    Library
                                </option>

                                <option value="Academic Block">
                                    Academic Block
                                </option>

                                <option value="Cafeteria">
                                    Cafeteria
                                </option>

                                <option value="Sports Complex">
                                    Sports Complex
                                </option>

                                <option value="Main Gate">
                                    Main Gate
                                </option>

                            </select>

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                Describe the problem
                            </label>

                            <textarea
                                class="ph-textarea"
                                id="problemDescription"
                                placeholder="Tell us what happened..."
                            ></textarea>

                        </div>


                        <button
                            type="submit"
                            class="ph-submit"
                        >
                            Diagnose Problem →
                        </button>

                    </form>

                </div>


                <div
                    class="ph-success"
                    id="ph-success"
                    style="display:none;"
                ></div>

            </div>
        `;
    }


    // ========================================================
    // REWARDS PAGE
    // ========================================================

    if (formType === "achievement") {

        formHTML = `
            <div class="container">

                <span class="section-eyebrow">
                    Rider Rewards
                </span>

                <h2>
                    🏆 Check Your Ranking
                </h2>

                <p class="form-desc">
                    Enter your riding activity to see your score, badges and position on the PedalHub leaderboard.
                </p>


                <div class="ph-form-card">

                    <form id="ph-form" novalidate>


                        <div class="ph-field">

                            <label class="ph-label">
                                Your Name
                            </label>

                            <input
                                class="ph-input"
                                type="text"
                                id="riderName"
                                placeholder="e.g. Kartik Sharma"
                            >

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                Number of rides
                            </label>

                            <input
                                class="ph-input"
                                type="number"
                                id="rides"
                                placeholder="e.g. 25"
                            >

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                Total distance ridden (km)
                            </label>

                            <input
                                class="ph-input"
                                type="number"
                                id="distance"
                                placeholder="e.g. 120"
                            >

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                Did you complete a ride before 8 AM?
                            </label>

                            <select
                                class="ph-select"
                                id="earlyRide"
                            >

                                <option value="">
                                    Choose...
                                </option>

                                <option value="yes">
                                    Yes
                                </option>

                                <option value="no">
                                    No
                                </option>

                            </select>

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                Have you booked a repair?
                            </label>

                            <select
                                class="ph-select"
                                id="bookedRepair"
                            >

                                <option value="">
                                    Choose...
                                </option>

                                <option value="yes">
                                    Yes
                                </option>

                                <option value="no">
                                    No
                                </option>

                            </select>

                        </div>


                        <button
                            type="submit"
                            class="ph-submit"
                        >
                            Check My Ranking →
                        </button>

                    </form>

                </div>


                <div
                    class="ph-success"
                    id="ph-success"
                    style="display:none;"
                ></div>

            </div>
        `;
    }


    // ========================================================
    // MAP PAGE
    // ========================================================

    if (formType === "dock") {

        formHTML = `
            <div class="container">

                <span class="section-eyebrow">
                    Campus Map
                </span>

                <h2>
                    📍 Find the Best Dock
                </h2>

                <p class="form-desc">
                    Tell us where you're going and we'll suggest the best place to pick up your bike.
                </p>


                <div class="ph-form-card">

                    <form id="ph-form" novalidate>


                        <div class="ph-field">

                            <label class="ph-label">
                                Where are you starting?
                            </label>

                            <select
                                class="ph-select"
                                id="startLocation"
                            >

                                <option value="">
                                    Choose...
                                </option>

                                <option value="Hostel A">
                                    Hostel A
                                </option>

                                <option value="Hostel B">
                                    Hostel B
                                </option>

                                <option value="Hostel C">
                                    Hostel C
                                </option>

                                <option value="Library">
                                    Library
                                </option>

                                <option value="Academic Block">
                                    Academic Block
                                </option>

                                <option value="Cafeteria">
                                    Cafeteria
                                </option>

                                <option value="Sports Complex">
                                    Sports Complex
                                </option>

                                <option value="Main Gate">
                                    Main Gate
                                </option>

                            </select>

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                Where are you going?
                            </label>

                            <select
                                class="ph-select"
                                id="destination"
                            >

                                <option value="">
                                    Choose...
                                </option>

                                <option value="Hostel A">
                                    Hostel A
                                </option>

                                <option value="Hostel B">
                                    Hostel B
                                </option>

                                <option value="Hostel C">
                                    Hostel C
                                </option>

                                <option value="Library">
                                    Library
                                </option>

                                <option value="Academic Block">
                                    Academic Block
                                </option>

                                <option value="Cafeteria">
                                    Cafeteria
                                </option>

                                <option value="Sports Complex">
                                    Sports Complex
                                </option>

                                <option value="Main Gate">
                                    Main Gate
                                </option>

                            </select>

                        </div>


                        <div class="ph-field">

                            <label class="ph-label">
                                Bike preference
                            </label>

                            <select
                                class="ph-select"
                                id="bikePreference"
                            >

                                <option value="">
                                    Choose...
                                </option>

                                <option value="any">
                                    Any bike
                                </option>

                                <option value="regular">
                                    Regular bike
                                </option>

                                <option value="fast">
                                    Fast bike
                                </option>

                                <option value="electric">
                                    Electric bike
                                </option>

                            </select>

                        </div>


                        <button
                            type="submit"
                            class="ph-submit"
                        >
                            Find Best Dock →
                        </button>

                    </form>

                </div>


                <div
                    class="ph-success"
                    id="ph-success"
                    style="display:none;"
                ></div>

            </div>
        `;
    }


    // ========================================================
    // STEP 4: PUT THE FORM ON THE PAGE
    // ========================================================

    section.innerHTML = formHTML;


    // ========================================================
    // STEP 5: NAME VALIDATION
    // ========================================================

    // This prevents numbers and symbols from being entered
    // into the name field.

    const nameInput = document.getElementById("riderName");

    if (nameInput) {

        nameInput.addEventListener("input", function() {

            let name = this.value;

            let newName = "";


            // Look at every character in the name.

            for (let i = 0; i < name.length; i++) {

                const character = name[i];


                // Allow only letters and spaces.

                if (
                    (character >= "a" && character <= "z") ||
                    (character >= "A" && character <= "Z") ||
                    character === " "
                ) {

                    newName = newName + character;
                }
            }


            // Put the cleaned name back into the input.

            this.value = newName;
        });
    }


    // ========================================================
    // STEP 6: FIND THE FORM
    // ========================================================

    const form = document.getElementById("ph-form");


    if (form) {

        // Setup Range Slider for Repair Form (if present)
        const slider = document.getElementById("seriousnessSlider");
        const seriousnessHidden = document.getElementById("seriousness");
        const badge = document.getElementById("seriousnessBadge");
        const ticks = document.querySelectorAll(".ph-range-tick");

        const severityMap = {
            "1": { value: "small", label: "Small", class: "severity-small" },
            "2": { value: "moderate", label: "Moderate", class: "severity-moderate" },
            "3": { value: "serious", label: "Serious", class: "severity-serious" }
        };

        function updateSeverity(val) {
            const config = severityMap[val] || severityMap["2"];
            if (seriousnessHidden) {
                seriousnessHidden.value = config.value;
            }
            if (badge) {
                badge.textContent = config.label;
                badge.className = "ph-range-badge " + config.class;
            }
            ticks.forEach(tick => {
                if (tick.getAttribute("data-val") === String(val)) {
                    tick.classList.add("active");
                } else {
                    tick.classList.remove("active");
                }
            });
        }

        if (slider) {
            slider.addEventListener("input", function() {
                updateSeverity(this.value);
            });

            ticks.forEach(tick => {
                tick.addEventListener("click", function() {
                    const val = this.getAttribute("data-val");
                    slider.value = val;
                    updateSeverity(val);
                });
            });
        }

        // Setup Radio Button highlighting for Question 2
        const radioOptions = document.querySelectorAll('input[name="canRide"]');
        radioOptions.forEach(radio => {
            radio.addEventListener("change", function() {
                document.querySelectorAll(".ph-radio-option").forEach(opt => opt.classList.remove("selected"));
                if (this.checked && this.closest(".ph-radio-option")) {
                    this.closest(".ph-radio-option").classList.add("selected");
                }
            });
        });

        // ====================================================
        // FORM SUBMISSION
        // ====================================================

        form.addEventListener("submit", function(event) {

            // Stop the page from refreshing.

            event.preventDefault();


            // =================================================
            // HOME / RENT
            // =================================================

            if (formType === "rent") {

                const location =
                    document.getElementById("location").value;

                const duration =
                    document.getElementById("duration").value;

                const bikeCount =
                    document.getElementById("bikeCount").value;

                const purpose =
                    document.getElementById("purpose").value;


                // =================================================
                // JAVASCRIPT VALIDATION
                // =================================================

                if (!location) {
                    alert("Please select your current location.");
                    document.getElementById("location").focus();
                    return;
                }

                if (!duration) {
                    alert("Please select how long you need the bike.");
                    document.getElementById("duration").focus();
                    return;
                }

                if (!bikeCount) {
                    alert("Please select how many bikes you need.");
                    document.getElementById("bikeCount").focus();
                    return;
                }

                if (!purpose) {
                    alert("Please select what you are riding for.");
                    document.getElementById("purpose").focus();
                    return;
                }


                // Choose the closest dock.

                let recommendedDock = "Campus Centre";


                if (location === "Hostel A") {

                    recommendedDock = "Hostel A North";
                }

                else if (location === "Hostel B") {

                    recommendedDock = "Hostel B North";
                }

                else if (location === "Hostel C") {

                    recommendedDock = "Hostel C West";
                }

                else if (location === "Library") {

                    recommendedDock = "Library East";
                }

                else if (location === "Academic Block") {

                    recommendedDock = "Academic 1 Entry";
                }

                else if (location === "Cafeteria") {

                    recommendedDock = "Cafeteria Dock";
                }

                else if (location === "Sports Complex") {

                    recommendedDock = "Sports Complex";
                }

                else if (location === "Main Gate") {

                    recommendedDock = "Main Gate";
                }


                // Choose the plan.

                let recommendedPlan = "Student Plan";
                let price = 15;


                if (bikeCount >= 3) {

                    recommendedPlan = "Group Plan";
                    price = 60;
                }

                else if (purpose === "explore") {

                    recommendedPlan = "Explorer Plan";
                    price = 22;
                }


                const success =
                    document.getElementById("ph-success");


                success.innerHTML = `

                    <div class="ph-success-icon">
                        🚲
                    </div>

                    <h3>
                        We found your bike!
                    </h3>

                    <p>
                        Your nearest recommended dock is
                        <strong>${recommendedDock}</strong>.
                    </p>

                    <p>
                        Recommended plan:
                        <strong>${recommendedPlan}</strong>
                    </p>

                    <p>
                        Starting from ₹${price}/hour
                    </p>

                    <p>
                        🚲 Bikes available: 6
                    </p>

                `;


                form.parentNode.style.display = "none";

                success.style.display = "block";
            }


            // =================================================
            // PRICING
            // =================================================

            if (formType === "plan") {

                const plan =
                    document.getElementById("plan").value;

                const hours =
                    document.getElementById("hours").value;

                const numberOfBikes =
                    document.getElementById("numberOfBikes").value;

                const wholeDay =
                    document.getElementById("wholeDay").value;


                // =================================================
                // JAVASCRIPT VALIDATION
                // =================================================

                if (!plan) {
                    alert("Please choose a plan.");
                    document.getElementById("plan").focus();
                    return;
                }

                if (!hours || isNaN(hours) || Number(hours) < 1) {
                    alert("Please enter a valid number of hours (at least 1 hour).");
                    document.getElementById("hours").focus();
                    return;
                }

                if (!numberOfBikes) {
                    alert("Please select how many bikes you need.");
                    document.getElementById("numberOfBikes").focus();
                    return;
                }

                if (!wholeDay) {
                    alert("Please select whether you need the bike for the whole day.");
                    document.getElementById("wholeDay").focus();
                    return;
                }


                const hoursNumber =
                    Number(hours);

                const bikesNumber =
                    Number(numberOfBikes);


                let hourlyPrice = 0;

                let planName = "";


                if (plan === "student") {

                    hourlyPrice = 15;

                    planName = "Student Plan";
                }

                else if (plan === "explorer") {

                    hourlyPrice = 22;

                    planName = "Explorer Plan";
                }

                else if (plan === "group") {

                    hourlyPrice = 60;

                    planName = "Group Plan";
                }


                let totalCost =
                    hourlyPrice *
                    hoursNumber *
                    bikesNumber;


                // Use day pricing if the user selected
                // the whole-day option.

                if (wholeDay === "yes") {

                    if (plan === "student") {

                        totalCost =
                            80 * bikesNumber;
                    }

                    else if (plan === "explorer") {

                        totalCost =
                            150 * bikesNumber;
                    }

                    else if (plan === "group") {

                        totalCost =
                            350 * bikesNumber;
                    }
                }


                const success =
                    document.getElementById("ph-success");


                success.innerHTML = `

                    <div class="ph-success-icon">
                        🧮
                    </div>

                    <h3>
                        Your estimated cost
                    </h3>

                    <h2>
                        ₹${totalCost}
                    </h2>

                    <p>
                        <strong>${planName}</strong>
                    </p>

                    <p>
                        ${hoursNumber} hour(s)
                        ×
                        ${bikesNumber} bike(s)
                    </p>

                    <p>
                        ${
                            wholeDay === "yes"
                            ? "Whole day price applied"
                            : "Hourly price applied"
                        }
                    </p>

                `;


                form.parentNode.style.display = "none";

                success.style.display = "block";
            }


            // =================================================
            // REPAIRS
            // =================================================

            if (formType === "repair") {

                const problem =
                    document.getElementById("problem").value;

                const canRideRadio =
                    document.querySelector('input[name="canRide"]:checked');

                const canRide =
                    canRideRadio ? canRideRadio.value : "";

                const seriousness =
                    document.getElementById("seriousness") ?
                    document.getElementById("seriousness").value :
                    "";

                const repairLocation =
                    document.getElementById("repairLocation").value;

                const problemDescription =
                    document.getElementById("problemDescription").value;


                // =================================================
                // JAVASCRIPT VALIDATION
                // =================================================

                if (!problem) {
                    alert("Please select what problem you are having.");
                    document.getElementById("problem").focus();
                    return;
                }

                if (!canRide) {
                    alert("Please select whether you can still ride the bike.");
                    const firstRadio = document.querySelector('input[name="canRide"]');
                    if (firstRadio) firstRadio.focus();
                    return;
                }

                if (!seriousness) {
                    alert("Please select how serious the problem is.");
                    const slider = document.getElementById("seriousnessSlider");
                    if (slider) slider.focus();
                    return;
                }

                if (!repairLocation) {
                    alert("Please select where the bike is located.");
                    document.getElementById("repairLocation").focus();
                    return;
                }

                if (!problemDescription.trim()) {
                    alert("Please describe the problem you are experiencing.");
                    document.getElementById("problemDescription").focus();
                    return;
                }


                let service = "Full Inspection";

                let repairPrice = 200;

                let repairTime = "30 minutes";


                if (problem === "tyre") {

                    service = "Puncture Repair";

                    repairPrice = 150;

                    repairTime = "20 minutes";
                }

                else if (problem === "brake") {

                    service = "Brake Tuning";

                    repairPrice = 250;

                    repairTime = "35 minutes";
                }

                else if (problem === "chain") {

                    service = "Chain Repair";

                    repairPrice = 300;

                    repairTime = "40 minutes";
                }

                else if (problem === "gear") {

                    service = "Gear Adjustment";

                    repairPrice = 300;

                    repairTime = "40 minutes";
                }

                else if (problem === "noise") {

                    service = "Full Inspection";

                    repairPrice = 200;

                    repairTime = "30 minutes";
                }


                let warning = "";


                if (
                    canRide === "no" &&
                    seriousness === "serious"
                ) {

                    warning = `

                        <p>
                            ⚠️
                            <strong>
                                Do not ride the bike.
                            </strong>

                            Our mechanic should visit your location.
                        </p>

                    `;
                }


                const success =
                    document.getElementById("ph-success");


                success.innerHTML = `

                    <div class="ph-success-icon">
                        🔧
                    </div>

                    <h3>
                        Recommended Service
                    </h3>

                    <h2>
                        ${service}
                    </h2>

                    <p>
                        <strong>
                            ₹${repairPrice}
                        </strong>
                    </p>

                    <p>
                        Estimated time:
                        ${repairTime}
                    </p>

                    <p>
                        📍 Mechanic location:
                        ${repairLocation}
                    </p>

                    ${warning}

                    <p>
                        Your diagnosis has been recorded.
                    </p>

                `;


                form.parentNode.style.display = "none";

                success.style.display = "block";
            }


            // =================================================
            // REWARDS / LEADERBOARD
            // =================================================

            if (formType === "achievement") {

                const riderName =
                    document.getElementById("riderName").value.trim();

                const rides =
                    document.getElementById("rides").value;

                const distance =
                    document.getElementById("distance").value;

                const earlyRide =
                    document.getElementById("earlyRide").value;

                const bookedRepair =
                    document.getElementById("bookedRepair").value;


                // =================================================
                // CHECK THE NAME
                // =================================================

                // Count how many letters are in the name.

                let letterCount = 0;


                for (let i = 0; i < riderName.length; i++) {

                    const character = riderName[i];


                    if (
                        (character >= "a" && character <= "z") ||
                        (character >= "A" && character <= "Z")
                    ) {

                        letterCount++;
                    }
                }


                // If there are fewer than 2 letters,
                // the name is not valid.

                if (letterCount < 2) {

                    alert("Please enter a valid name.");

                    return;
                }


                // =================================================
                // CHECK THE OTHER FIELDS VIA JAVASCRIPT
                // =================================================

                if (rides === "" || isNaN(rides) || Number(rides) < 0) {
                    alert("Please enter a valid number of rides (0 or more).");
                    document.getElementById("rides").focus();
                    return;
                }

                if (distance === "" || isNaN(distance) || Number(distance) < 0) {
                    alert("Please enter a valid distance in km (0 or more).");
                    document.getElementById("distance").focus();
                    return;
                }

                if (!earlyRide) {
                    alert("Please choose whether you completed a ride before 8 AM.");
                    document.getElementById("earlyRide").focus();
                    return;
                }

                if (!bookedRepair) {
                    alert("Please choose whether you have booked a repair.");
                    document.getElementById("bookedRepair").focus();
                    return;
                }


                const rideNumber =
                    Number(rides);

                const distanceNumber =
                    Number(distance);


                // =================================================
                // 500 PRE-FEEDDED RIDERS
                // =================================================

                const firstNames = [

                    "Aarav",
                    "Aditi",
                    "Aditya",
                    "Akash",
                    "Akshay",
                    "Ananya",
                    "Anika",
                    "Ankit",
                    "Arjun",
                    "Aryan",
                    "Avni",
                    "Ayush",
                    "Bhavya",
                    "Chetan",
                    "Daksh",
                    "Dev",
                    "Diya",
                    "Dhruv",
                    "Ishaan",
                    "Isha",
                    "Kabir",
                    "Karan",
                    "Kartik",
                    "Kavya",
                    "Kiara",
                    "Krishna",
                    "Manav",
                    "Meera",
                    "Mihir",
                    "Naina",
                    "Naman",
                    "Neha",
                    "Nikhil",
                    "Pallavi",
                    "Parth",
                    "Pranav",
                    "Priya",
                    "Rahul",
                    "Riya",
                    "Rohan",
                    "Rohit",
                    "Sakshi",
                    "Samarth",
                    "Sanya",
                    "Shivam",
                    "Shreya",
                    "Siddharth",
                    "Simran",
                    "Tanvi",
                    "Varun"
                ];


                const lastNames = [

                    "Sharma",
                    "Singh",
                    "Mehta",
                    "Kapoor",
                    "Verma",
                    "Gupta",
                    "Malhotra",
                    "Khan",
                    "Patel",
                    "Joshi"
                ];


                // This array will store all 500 riders.

                const riders = [];


                // Create 500 riders.

                for (let i = 0; i < 500; i++) {

                    const firstName =
                        firstNames[i % firstNames.length];


                    const lastName =
                        lastNames[
                            Math.floor(
                                i / firstNames.length
                            )
                        ];


                    const riderRides =
                        5 + ((i * 7) % 96);


                    const riderDistance =
                        20 + ((i * 13) % 481);


                    // Calculate points.

                    let riderPoints =
                        riderRides * 10;


                    riderPoints =
                        riderPoints + riderDistance;


                    // Every third rider gets
                    // early-riding points.

                    if (i % 3 === 0) {

                        riderPoints =
                            riderPoints + 50;
                    }


                    // Every fourth rider gets
                    // repair points.

                    if (i % 4 === 0) {

                        riderPoints =
                            riderPoints + 25;
                    }


                    const rider = {

                        name:
                            firstName + " " + lastName,

                        rides:
                            riderRides,

                        distance:
                            riderDistance,

                        points:
                            riderPoints,

                        isUser:
                            false
                    };


                    riders.push(rider);
                }


                // =================================================
                // CALCULATE USER POINTS
                // =================================================

                let userPoints =
                    rideNumber * 10;


                userPoints =
                    userPoints + distanceNumber;


                if (earlyRide === "yes") {

                    userPoints =
                        userPoints + 50;
                }


                if (bookedRepair === "yes") {

                    userPoints =
                        userPoints + 25;
                }


                // =================================================
                // ADD USER TO LEADERBOARD
                // =================================================

                const user = {

                    name:
                        riderName,

                    rides:
                        rideNumber,

                    distance:
                        distanceNumber,

                    points:
                        userPoints,

                    isUser:
                        true
                };


                riders.push(user);


                // =================================================
                // FIND USER RANK
                // =================================================

                let userRank = 1;


                for (let i = 0; i < riders.length; i++) {

                    if (
                        riders[i].points > userPoints
                    ) {

                        userRank++;
                    }
                }


                // =================================================
                // MAKE A COPY OF THE RIDERS
                // =================================================

                const sortedRiders = [];


                for (let i = 0; i < riders.length; i++) {

                    sortedRiders.push(riders[i]);
                }


                // =================================================
                // SORT RIDERS
                // HIGHEST POINTS FIRST
                // =================================================

                // We use a simple bubble sort here.

                for (
                    let i = 0;
                    i < sortedRiders.length;
                    i++
                ) {

                    for (
                        let j = 0;
                        j < sortedRiders.length - 1;
                        j++
                    ) {

                        if (
                            sortedRiders[j].points <
                            sortedRiders[j + 1].points
                        ) {

                            const temporary =
                                sortedRiders[j];


                            sortedRiders[j] =
                                sortedRiders[j + 1];


                            sortedRiders[j + 1] =
                                temporary;
                        }
                    }
                }


                // =================================================
                // FIND USER POSITION
                // =================================================

                let userPosition = 0;


                for (
                    let i = 0;
                    i < sortedRiders.length;
                    i++
                ) {

                    if (
                        sortedRiders[i].isUser === true
                    ) {

                        userPosition = i;

                        break;
                    }
                }


                // =================================================
                // CREATE USER BADGES
                // =================================================

                let badges = "";


                if (rideNumber >= 20) {

                    badges =
                        badges +
                        "<span>🌿 Eco Warrior</span>";
                }


                if (distanceNumber >= 100) {

                    badges =
                        badges +
                        "<span>💯 Century Rider</span>";
                }


                if (earlyRide === "yes") {

                    badges =
                        badges +
                        "<span>🌅 Early Bird</span>";
                }


                if (bookedRepair === "yes") {

                    badges =
                        badges +
                        "<span>🔧 Repair Rookie</span>";
                }


                if (badges === "") {

                    badges =
                        "<span>🚲 New Rider</span>";
                }


                // =================================================
                // CREATE NEARBY LEADERBOARD
                // =================================================

                let leaderboardHTML = "";


                let startPosition =
                    userPosition - 5;


                let endPosition =
                    userPosition + 5;


                if (startPosition < 0) {

                    startPosition = 0;
                }


                if (
                    endPosition >= sortedRiders.length
                ) {

                    endPosition =
                        sortedRiders.length - 1;
                }


                // Add nearby riders to the table.

                for (
                    let i = startPosition;
                    i <= endPosition;
                    i++
                ) {

                    const currentRider =
                        sortedRiders[i];


                    const rank =
                        i + 1;


                    let rowStyle = "";


                    if (
                        currentRider.isUser === true
                    ) {

                        rowStyle =
                            ' style="font-weight:bold;"';
                    }


                    leaderboardHTML =
                        leaderboardHTML +

                        `
                            <tr${rowStyle}>

                                <td>
                                    ${rank}
                                </td>

                                <td>
                                    ${currentRider.name}
                                </td>

                                <td>
                                    ${currentRider.points}
                                </td>

                            </tr>
                        `;
                }


                // =================================================
                // SHOW RESULT
                // =================================================

                const success =
                    document.getElementById("ph-success");


                success.innerHTML = `

                    <div class="ph-success-icon">
                        🏆
                    </div>


                    <h3>
                        Your PedalHub Ranking
                    </h3>


                    <h2>
                        #${userRank}
                    </h2>


                    <p>
                        out of ${riders.length} riders
                    </p>


                    <p>
                        <strong>
                            ${userPoints} points
                        </strong>
                    </p>


                    <p>
                        You are currently ahead of
                        <strong>
                            ${riders.length - userRank}
                        </strong>
                        riders!
                    </p>


                    <hr>


                    <h3>
                        Your Badges
                    </h3>


                    <div>
                        ${badges}
                    </div>


                    <hr>


                    <h3>
                        Nearby Leaderboard
                    </h3>


                    <table
                        style="
                            width:100%;
                            border-collapse:collapse;
                            margin-top:15px;
                        "
                    >

                        <thead>

                            <tr>

                                <th
                                    style="
                                        text-align:left;
                                        padding:8px;
                                    "
                                >
                                    Rank
                                </th>

                                <th
                                    style="
                                        text-align:left;
                                        padding:8px;
                                    "
                                >
                                    Rider
                                </th>

                                <th
                                    style="
                                        text-align:left;
                                        padding:8px;
                                    "
                                >
                                    Points
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            ${leaderboardHTML}

                        </tbody>

                    </table>

                `;


                form.parentNode.style.display = "none";

                success.style.display = "block";
            }


            // =================================================
            // MAP / DOCK
            // =================================================

            if (formType === "dock") {

                const startLocation =
                    document.getElementById("startLocation").value;

                const destination =
                    document.getElementById("destination").value;

                const bikePreference =
                    document.getElementById("bikePreference").value;


                // =================================================
                // JAVASCRIPT VALIDATION
                // =================================================

                if (!startLocation) {
                    alert("Please select where you are starting.");
                    document.getElementById("startLocation").focus();
                    return;
                }

                if (!destination) {
                    alert("Please select where you are going.");
                    document.getElementById("destination").focus();
                    return;
                }

                if (startLocation === destination) {
                    alert("Starting location and destination cannot be the same. Please choose different locations.");
                    document.getElementById("destination").focus();
                    return;
                }

                if (!bikePreference) {
                    alert("Please select your bike preference.");
                    document.getElementById("bikePreference").focus();
                    return;
                }


                let recommendedDock =
                    "Campus Centre";

                let walkingTime =
                    3;

                let bikesAvailable =
                    8;


                if (startLocation === "Hostel A") {

                    recommendedDock =
                        "Hostel A North";

                    walkingTime = 2;
                }

                else if (startLocation === "Hostel B") {

                    recommendedDock =
                        "Hostel B North";

                    walkingTime = 2;
                }

                else if (startLocation === "Hostel C") {

                    recommendedDock =
                        "Hostel C West";

                    walkingTime = 2;
                }

                else if (startLocation === "Library") {

                    recommendedDock =
                        "Library East";

                    walkingTime = 1;
                }

                else if (startLocation === "Academic Block") {

                    recommendedDock =
                        "Academic 1 Entry";

                    walkingTime = 2;
                }

                else if (startLocation === "Cafeteria") {

                    recommendedDock =
                        "Cafeteria Dock";

                    walkingTime = 1;
                }

                else if (startLocation === "Sports Complex") {

                    recommendedDock =
                        "Sports Complex";

                    walkingTime = 1;
                }

                else if (startLocation === "Main Gate") {

                    recommendedDock =
                        "Main Gate";

                    walkingTime = 2;
                }


                // Change the number of bikes depending
                // on the user's preference.

                if (bikePreference === "electric") {

                    bikesAvailable = 2;
                }

                if (bikePreference === "fast") {

                    bikesAvailable = 4;
                }


                // Show result.

                const success =
                    document.getElementById("ph-success");


                success.innerHTML = `

                    <div class="ph-success-icon">
                        📍
                    </div>


                    <h3>
                        Recommended Dock
                    </h3>


                    <h2>
                        ${recommendedDock}
                    </h2>


                    <p>
                        🚶 ${walkingTime} minute walk
                    </p>


                    <p>
                        🚲 ${bikesAvailable} bikes available
                    </p>


                    <p>
                        Destination:
                        <strong>
                            ${destination}
                        </strong>
                    </p>


                    <p>
                        Your preference:
                        <strong>
                            ${
                                bikePreference === "any"
                                ? "Any bike"
                                : bikePreference
                            }
                        </strong>
                    </p>

                `;


                form.parentNode.style.display = "none";

                success.style.display = "block";
            }

        });
    }
}
