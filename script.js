const seatCheck = document.getElementById("seatCheck");
const aadharCheck = document.getElementById("aadharCheck");
const ageInput = document.getElementById("ageInput");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");
const busImg = document.getElementById("busImg");

function showMessage(message, color, borderColor) {
    result.textContent = message;
    result.style.color = color;
    busImg.style.border = `5px solid ${borderColor}`;
}

checkBtn.addEventListener("click", () => {
    const isSeatAvailable = seatCheck.checked;
    const hasAadhar = aadharCheck.checked;
    const age = parseInt(ageInput.value);

    if (!isSeatAvailable) {
        showMessage("❌ Seat not available.", "red", "red");
        return;
    }

    if (!age || age < 50) {
        showMessage("❌ Age must be 50 or above.", "red", "red");
        return;
    }

    if (!hasAadhar) {
        showMessage("❌ Aadhar card required.", "red", "red");
        return;
    }

    showMessage("✅ Eligible! Welcome aboard.", "green", "green");
});

resetBtn.addEventListener("click", () => {
    seatCheck.checked = false;
    aadharCheck.checked = false;
    ageInput.value = "";
    result.textContent = "";
    busImg.style.border = "none";
});