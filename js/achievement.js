// ============================================================
// PEDALHUB - achievement.js
// Rewards Page: Rider Rewards & Leaderboard Form
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
                    Rider Rewards
                </span>

                <h2>
                    🏆 Check Your Ranking
                </h2>

                <p class="form-desc">
                    Enter your riding activity to see your score, badges and position on the PedalHub leaderboard.
                </p>


                <div class="ph-form-card">

                    <form id="ph-form">


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
                                min="0"
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
                                min="0"
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


    // ========================================================
    // STEP 3: PUT THE FORM ON THE PAGE
    // ========================================================

    section.innerHTML = formHTML;

    // ========================================================
    // STEP 4: NAME VALIDATION
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
    // STEP 5: FIND THE FORM
    // ========================================================

    const form = document.getElementById("ph-form");

    if (form) {

        // ====================================================
        // FORM SUBMISSION
        // ====================================================

        form.addEventListener("submit", function(event) {

            // Stop the page from refreshing.

            event.preventDefault();


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
                // CHECK THE OTHER FIELDS
                // =================================================

                if (
                    rides === "" ||
                    distance === "" ||
                    earlyRide === "" ||
                    bookedRepair === ""
                ) {

                    alert("Please fill in all the fields.");

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
        });
    }
}
