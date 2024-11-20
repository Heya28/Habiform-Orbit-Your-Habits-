// addEventListener("keydown", function(event){
//     if(event.key=="Enter"){
//         const planetName=document.querySelector("#planetName").value;
//         const planetMeaning=document.querySelector("#planetMean").value;
//     }   
// });
// let selectedCheckboxes = [];

// function updateSelectedCheckboxes() {
//     selectedCheckboxes = [];
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
//     checkboxes.forEach(checkbox => {
//         selectedCheckboxes.push(checkbox.id); 
//     });
//     console.log(selectedCheckboxes);
// }
// document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
//     checkbox.addEventListener('change', updateSelectedCheckboxes);
// });

// document.getElementById('habitnum').addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') { 
//         let habitNumber = document.getElementById('habitnum').value;
        
//         if (habitNumber >= 1 && habitNumber <= 10) {
//             localStorage.setItem('habitNumber', habitNumber); 
//         }
//     }
// });

// document.getElementById('sched').addEventListener('input', function() {
//     let scheduleValue = document.getElementById('sched').value;
//     localStorage.setItem('starshipSchedule', scheduleValue);
//     console.log('Stored schedule value:', scheduleValue); 
// });

// document.getElementById('barrier').addEventListener('change', function () {
//     let selectedObstacle = this.value;
//     localStorage.setItem('cosmicObstacle', selectedObstacle);
//     console.log('Stored Cosmic Obstacle:', selectedObstacle); 
// });

// const radioButtons = document.querySelectorAll('input[name="power"]');
// radioButtons.forEach((radio) => {
//     radio.addEventListener('change', () => {
//         const selectedPower = radio.value;
//         localStorage.setItem('motivationCatalyst', selectedPower);
//         console.log('Stored Motivation Catalyst:', selectedPower); 
//     });
// });
// document.getElementById('launchButton').addEventListener('click', () => {
//     const mainContent = document.getElementById('main-content');
//     mainContent.style.animation = 'fadeOut 1s forwards';
//     setTimeout(() => {
//         mainContent.classList.add('hidden'); 
//         showNextContent(); 
//     }, 1000); 
// });


// function showNextContent() {
//     const planetName = localStorage.getItem('planetName') || 'your planet'; // Default fallback
//     const planetMeaning = localStorage.getItem('planetMean') || 'a meaningful journey';
//     const selectedFocusAreas = selectedCheckboxes.length > 0 
//         ? selectedCheckboxes.map(area => `<li>${area}</li>`).join('')
//         : '<li>Unspecified focus areas</li>';
//     const habitNumber = localStorage.getItem('habitNumber') || 'an undefined number of';
//     const scheduleValue = localStorage.getItem('starshipSchedule') || 'unspecified time';
//     const cosmicObstacle = localStorage.getItem('cosmicObstacle') || 'no obstacle';
//     const motivationCatalyst = localStorage.getItem('motivationCatalyst') || 'an unknown force';

//     const mainContent = document.getElementById('main-content');
//     mainContent.innerHTML = `
//         <section id="next-section">
//             <h1>Stellar Transformation Begins!</h1>
//             <p>🌌 Congratulations, Cosmic Explorer!</p>
//             <p><strong>Planet Name:</strong> ${planetName}</p>
//             <p><strong>Planet Meaning:</strong> ${planetMeaning}</p>
//             <h2>Your Terraforming Focus Areas:</h2>
//             <ul>
//                 ${selectedFocusAreas}
//             </ul>
//             <p>You committed to building <strong>${habitNumber} habits</strong>.</p>
//             <p>You allocated <strong>${scheduleValue} hours/day</strong> for this mission.</p>
//             <p>Potential Challenge: <strong>${cosmicObstacle}</strong>.</p>
//             <p>Your journey will be powered by: <strong>${motivationCatalyst}</strong>.</p>
//             <p>Stay committed and watch your efforts light up the stars! 🚀</p>
//             <button class="button-space" id="startMission">Begin Your Mission</button>
//         </section>
//     `;
// }


// // // Function to retrieve the stored value later
// // function getStoredMotivationCatalyst() {
// //     let storedPower = localStorage.getItem('motivationCatalyst');
// //     console.log('Retrieved Motivation Catalyst:', storedPower);
// //     return storedPower;
// // }


// // // Function to retrieve the stored value later
// // function getStoredObstacle() {
// //     let storedObstacle = localStorage.getItem('cosmicObstacle');
// //     console.log('Retrieved Cosmic Obstacle:', storedObstacle);
// //     return storedObstacle;
// // }


// // // Later, you can retrieve and use the stored value
// // function getStoredSchedule() {
// //     let storedSchedule = localStorage.getItem('starshipSchedule');
// //     console.log('Stored Starship Schedule:', storedSchedule);
// //     // You can use the value wherever you need to display or process it
// // }


// // // You can later retrieve all stored values like this:
// // function getStoredData() {
// //     let storedHabitNumber = localStorage.getItem('habitNumber');
    
// //     // When you want to display the stored data (for example, on a new page or section)
// //     console.log("Stored Habit Number:", storedHabitNumber);
// // }


// // addEventListener("keydown", function (event) {
// //     const val = str.value;
// //     const num = parseInt(document.querySelector("#num").value); 
// //     let holder = document.querySelector("#oconcat");
  
// //     if (event.key == "Enter") {
// //       let arr = [];
  
// //       for (let i = 0; i < num; i++) {
// //         let element = document.createElement("input");
// //         element.setAttribute("type", "text");
// //         element.setAttribute("id", "concatin");
// //         element.setAttribute("placeholder", `Enter string ${i + 1}`);
// //         document.body.appendChild(element);
// //         arr.push(element.value); 
// //       }
  
// //       let concatButton = document.createElement("button");
// //       concatButton.textContent = "Concatenate Strings";
// //       document.body.appendChild(concatButton);
  
// //       concatButton.addEventListener("click", function (event) {
// //         let newstr = val; 
  
// //         for (let input of arr) {
// //           newstr = newstr.concat(input);
// //         }
  
// //         holder.innerHTML = `The string obtained after concatenation is "${newstr}".`;
// //       });
// //     }
// //   });


// Listen for the 'Enter' key to save planet name and meaning
addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        const planetName = document.querySelector("#planetName").value;
        const planetMeaning = document.querySelector("#planetMean").value;

        // Save the values to localStorage
        localStorage.setItem('planetName', planetName);
        localStorage.setItem('planetMean', planetMeaning);
    }   
});

// Initialize selected checkboxes array
let selectedCheckboxes = [];

// Update the selected checkboxes and store them in localStorage
function updateSelectedCheckboxes() {
    selectedCheckboxes = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        selectedCheckboxes.push(checkbox.id);
    });
    console.log(selectedCheckboxes);

    // Store the selected checkboxes in localStorage
    localStorage.setItem('focusAreas', JSON.stringify(selectedCheckboxes));
}

// Add event listeners to checkboxes to update selectedCheckboxes on change
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectedCheckboxes);
});




// Save starship schedule to localStorage whenever it is changed
document.getElementById('sched').addEventListener('input', function() {
    let scheduleValue = document.getElementById('sched').value;
    localStorage.setItem('starshipSchedule', scheduleValue);
    console.log('Stored schedule value:', scheduleValue); 
});

// Save cosmic obstacle to localStorage when changed
document.getElementById('barrier').addEventListener('change', function () {
    let selectedObstacle = this.value;
    localStorage.setItem('cosmicObstacle', selectedObstacle);
    console.log('Stored Cosmic Obstacle:', selectedObstacle); 
});

// Save motivation catalyst to localStorage when selected
const radioButtons = document.querySelectorAll('input[name="power"]');
radioButtons.forEach((radio) => {
    radio.addEventListener('change', () => {
        const selectedPower = radio.value;
        localStorage.setItem('motivationCatalyst', selectedPower);
        console.log('Stored Motivation Catalyst:', selectedPower); 
    });
});

// Transition to the next content section when the launch button is clicked
document.getElementById('launchButton').addEventListener('click', () => {
    const mainContent = document.getElementById('main-content');
    mainContent.style.animation = 'fadeOut 1s forwards';
    setTimeout(() => {
        mainContent.style.display = 'none'; 
        showNextContent(); 
    }, 1000); 
});

// Display the next section with stored information
function showNextContent() {
    const planetName = localStorage.getItem('planetName') || 'your planet';
    const planetMeaning = localStorage.getItem('planetMean') || 'a meaningful journey';
    const selectedFocusAreas = JSON.parse(localStorage.getItem('focusAreas')) || [];
    const habitNumber = localStorage.getItem('habitNumber') || 'an undefined number of';
    const scheduleValue = localStorage.getItem('starshipSchedule') || 'unspecified time';
    const cosmicObstacle = localStorage.getItem('cosmicObstacle') || 'no obstacle';
    const motivationCatalyst = localStorage.getItem('motivationCatalyst') || 'an unknown force';

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <section id="next-section">
            <h1>Stellar Transformation Begins!</h1>
            <p>🌌 Congratulations, Cosmic Explorer!</p>
            <p><strong>Planet Name:</strong> ${planetName}</p>
            <p><strong>Planet Meaning:</strong> ${planetMeaning}</p>
            <h2>Your Terraforming Focus Areas:</h2>
            <ul>
                ${selectedFocusAreas.length > 0 ? selectedFocusAreas.map(area => `<li>${area}</li>`).join('') : '<li>Unspecified focus areas</li>'}
            </ul>
            <p>You committed to building <strong>${habitNumber} habits</strong>.</p>
            <p>You allocated <strong>${scheduleValue} hours/day</strong> for this mission.</p>
            <p>Potential Challenge: <strong>${cosmicObstacle}</strong>.</p>
            <p>Your journey will be powered by: <strong>${motivationCatalyst}</strong>.</p>
            <p>Stay committed and watch your efforts light up the stars! 🚀</p>
            <button class="button-space" id="startMission">Begin Your Mission</button>
        </section>
    `;
}


