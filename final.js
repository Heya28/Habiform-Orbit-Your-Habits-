window.onload = function() {
    // Retrieve and use values from localStorage
    let planetName = localStorage.getItem("planetName");
    let planetMean = localStorage.getItem("planetMean");
    let checkedFocusAreas = JSON.parse(localStorage.getItem("checkedFocusAreas"));
    let habit1 = localStorage.getItem("habit1");
    let habit2 = localStorage.getItem("habit2");
    let habit3 = localStorage.getItem("habit3");
    let rangeVal = localStorage.getItem("rangeVal");
    let selectedFocus = localStorage.getItem("selectedFocus");
    let selectedPower = localStorage.getItem("selectedPower");
    document.querySelector("#finish").innerHTML="";
    
};
