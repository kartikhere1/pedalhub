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

                    <form id="ph-form">


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

                            <select
                                class="ph-select"
                                id="canRide"
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
                                How serious is the problem?
                            </label>

                            <select
                                class="ph-select"
                                id="seriousness"
                            >

                                <option value="">
                                    Choose...
                                </option>

                                <option value="small">
                                    Small
                                </option>

                                <option value="moderate">
                                    Moderate
                                </option>

                                <option value="serious">
                                    Serious
                                </option>

                            </select>

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
        // FORM SUBMISSION
        // ====================================================

        form.addEventListener("submit", function(event) {

            // Stop the page from refreshing.

            event.preventDefault();


                const problem =
                    document.getElementById("problem").value;

                const canRide =
                    document.getElementById("canRide").value;

                const seriousness =
                    document.getElementById("seriousness").value;

                const repairLocation =
                    document.getElementById("repairLocation").value;

                const problemDescription =
                    document.getElementById("problemDescription").value;


                if (
                    problem === "" ||
                    canRide === "" ||
                    seriousness === "" ||
                    repairLocation === "" ||
                    problemDescription.trim() === ""
                ) {

                    alert("Please fill in all the fields.");

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
