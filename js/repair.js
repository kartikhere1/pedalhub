// ============================================================
// PEDALHUB - repair.js
// Repairs Page: Bike Diagnosis Form
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
        // STEP 4A: SETUP RANGE SLIDER & RADIO BUTTONS
        // ====================================================

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

        // Highlight selected radio card
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
        });
    }
}
