document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM fully loaded and parsed."); // Debugging

    // Get form element safely
    const form = document.getElementById("rsvp-form");

    // Only continue if the form actually exists
    if (!form) {
        console.error("❌ RSVP form not found. Check your HTML!");
        return; // Stop script execution if form isn't found
    }

    console.log("✅ RSVP form found. Adding event listener.");

    // Allowed Secret Codes
    const secretCodes = ["Love2025", "YujiRosannaWedding", "SecretGuest2025"]; // Add more if needed

    // Attach submit event
    form.addEventListener("submit", function (event) {
        const codeInput = document.getElementById("code");
        
        if (!codeInput) {
            console.error("❌ Secret code input field not found!");
            return;
        }

        const codeValue = codeInput.value;

        // Check if the secret code is valid
        if (!secretCodes.includes(codeValue)) {
            alert("Invalid secret code. Please enter the code from your invitation.");
            event.preventDefault(); // Stop the form submission
            return;
        }

        console.log("✅ Valid secret code. Form will submit.");
    });

    // Function to show/hide +1 name field
    function togglePlusOneName() {
        const plusOneSelect = document.getElementById("plusone");
        const plusOneNameContainer = document.getElementById("plusone-name-container");
        const plusOneNameInput = document.getElementById("plusone_name");

        if (plusOneSelect && plusOneNameContainer && plusOneNameInput) {
            if (plusOneSelect.value === "yes") {
                plusOneNameContainer.style.display = "block";
                plusOneNameInput.setAttribute("required", "true");
            } else {
                plusOneNameContainer.style.display = "none";
                plusOneNameInput.removeAttribute("required");
            }
        } else {
            console.error("❌ One or more +1 elements not found!");
        }
    }

    // Attach the function to change event
    const plusOneSelect = document.getElementById("plusone");
    if (plusOneSelect) {
        plusOneSelect.addEventListener("change", togglePlusOneName);
    } else {
        console.error("❌ Plus one select field not found!");
    }
});
