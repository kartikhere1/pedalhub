// ============================================================
// PEDALHUB - dock.js
// Map Page: Find Best Dock Form
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
                    Campus Map
                </span>

                <h2>
                    📍 Find the Best Dock
                </h2>

                <p class="form-desc">
                    Tell us where you're going and we'll suggest the best place to pick up your bike.
                </p>


                <div class="ph-form-card">

                    <form id="ph-form">


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


                const startLocation =
                    document.getElementById("startLocation").value;

                const destination =
                    document.getElementById("destination").value;

                const bikePreference =
                    document.getElementById("bikePreference").value;


                if (
                    startLocation === "" ||
                    destination === "" ||
                    bikePreference === ""
                ) {

                    alert("Please fill in all the fields.");

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
        });
    }
}
