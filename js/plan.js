// ============================================================
// PEDALHUB - plan.js
// Pricing Page: Calculate My Ride Cost Form
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
        });
    }
}
