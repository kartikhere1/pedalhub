// ============================================================
// PEDALHUB - rent.js
// Home / Rent Page: Find My Bike Form
// Beginner-level JavaScript
// ============================================================


// ============================================================
// STEP 1: FIND THE FORM SECTION
// ============================================================

const section = document.getElementById("ph-form-section");

if (section) {

    // ========================================================
    // STEP 2: CREATE THE FORM
    // ========================================================

    const formHTML = `
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


    // ========================================================
    // STEP 3: PUT THE FORM ON THE PAGE
    // ========================================================

    section.innerHTML = formHTML;


    // ========================================================
    // STEP 4: FIND THE FORM
    // ========================================================

    const form = document.getElementById("ph-form");

    if (form) {

        // ====================================================
        // FORM SUBMISSION
        // ====================================================

        form.addEventListener("submit", function(event) {

            // Stop the page from refreshing.

            event.preventDefault();


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
        });
    }
}
