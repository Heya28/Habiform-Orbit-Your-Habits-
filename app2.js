//planetName and planetMean
addEventListener("keydown", function (event) {

    if (event.key == "Enter") {
        // let planetName = localStorage.getItem("planetName");
        // let planetMean = localStorage.getItem("planetMean");
        localStorage.setItem("planetName", document.querySelector("#planetName").value);
        localStorage.setItem("planetMean", document.querySelector("#planetMean").value);
    }
});
//Checkbox
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
    // let check=localStorage.getItem("checkedFocusAreas");
});

//Habit blueprint
addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        // let habit1 = localStorage.getItem("habit1");
        // let habit2 = localStorage.getItem("habit2");
        // let habit3 = localStorage.getItem("habit3");
        localStorage.setItem("habit1", document.querySelector("#habit1").value);
        localStorage.setItem("habit2", document.querySelector("#habit2").value);
        localStorage.setItem("habit3", document.querySelector("#habit3").value);
    }
});
//range
document.querySelector("#sched").addEventListener("input", function () {
    let rangeValue = document.querySelector("#sched").value;
    localStorage.setItem("rangeVal", rangeValue);
    // let range = localStorage.getItem("rangeVal");
});

//dropdown
document.querySelector("#barrier").addEventListener("change", function () {
    let selectedFocus = document.querySelector("#barrier").value;
    localStorage.setItem("selectedFocus", selectedFocus);
    // let combo=localStorage.getItem("selectedFocus");
});
//radio 
document.querySelectorAll('input[name="power"]').forEach(function (radioButton) {
    radioButton.addEventListener("change", function () {
        let selectedPower = document.querySelector('input[name="power"]:checked').id;
        localStorage.setItem("selectedPower", selectedPower);
    });
    // let radio=localStorage.getItem("selectedPower");
});
document.querySelector("#launchButton").addEventListener("click", function () {
    window.location.href = "final.html";
});

