// Planet Name and Planet Mean
addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        localStorage.setItem("planetName", document.querySelector("#planetName").value);
        localStorage.setItem("planetMean", document.querySelector("#planetMean").value);
    }
});

// Checkbox
document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            let checkedValues = [];
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    checkedValues.push(checkbox.value);
                }
            });
            localStorage.setItem("checkedFocusAreas", JSON.stringify(checkedValues));
        }
    });
});

// Habit Blueprint
addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        localStorage.setItem("habit1", document.querySelector("#habit1").value);
        localStorage.setItem("habit2", document.querySelector("#habit2").value);
        localStorage.setItem("habit3", document.querySelector("#habit3").value);
    }
});

// Range
document.querySelector("#sched").addEventListener("input", function () {
    let rangeValue = document.querySelector("#sched").value;
    localStorage.setItem("rangeVal", rangeValue);
});

// Dropdown
document.querySelector("#barrier").addEventListener("change", function () {
    let selectedFocus = document.querySelector("#barrier").value;
    localStorage.setItem("selectedFocus", selectedFocus);
});

// Radio Button
document.querySelectorAll('input[name="power"]').forEach(function (radioButton) {
    radioButton.addEventListener("change", function () {
        let selectedPower = document.querySelector('input[name="power"]:checked').id;
        localStorage.setItem("selectedPower", selectedPower);
    });
});

// Launch Button
document.querySelector("#launchButton").addEventListener("click", function () {
    window.location.href = "final.html";
});
