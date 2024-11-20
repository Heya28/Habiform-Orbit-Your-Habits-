// window.onload = function () {

//     let planetName = localStorage.getItem("planetName");
//     let planetMean = localStorage.getItem("planetMean");
//     let checkedFocusAreas = JSON.parse(localStorage.getItem("checkedFocusAreas"));
//     let habit1 = localStorage.getItem("habit1");
//     let habit2 = localStorage.getItem("habit2");
//     let habit3 = localStorage.getItem("habit3");
//     let rangeVal = localStorage.getItem("rangeVal");
//     let selectedFocus = localStorage.getItem("selectedFocus");
//     let selectedPower = localStorage.getItem("selectedPower");
//     console.log({ planetName, planetMean, checkedFocusAreas, habit1, habit2, habit3, rangeVal, selectedFocus, selectedPower });

//     let story = `
// <h2>Welcome to the Stellar Habit Terraformer Mission!</h2>
// <p>Your mission to terraform and nurture the planet <strong>${planetName}</strong> has begun. This planet is special, for it represents <strong>${planetMean}</strong>—a place where growth, habits, and progress take center stage.</p>
// <p>As the Stellar Habit Terraformer, you’ve chosen to nurture this planet by focusing on the following areas:</p>
// <ul>
//     ${checkedFocusAreas.map(area => `<li>${area}</li>`).join('')}
// </ul>
// <p>To fuel your planet’s transformation, you have crafted the following Habit Blueprint:</p>
// <ul>
//     <li><strong>Habit 1:</strong> ${habit1}</li>
//     <li><strong>Habit 2:</strong> ${habit2}</li>
//     <li><strong>Habit 3:</strong> ${habit3}</li>
// </ul>
// <p>Each day, you will dedicate <strong>${rangeVal} hours</strong> to your habits, nurturing the planet and helping it grow stronger.</p>
// <p>However, your journey will not be without its challenges. The forces of the universe are constantly at play, and you may face the following cosmic obstacles:</p>
// <ul>
//     <li><strong>Cosmic Obstacle:</strong> ${selectedFocus}</li>
// </ul>
// <p>But fear not! With your chosen <strong>${selectedPower === 'daily' ? 'Cosmic Gems (Daily Achievements)' : (selectedPower === 'badge' ? 'Starry Badges (Milestone Rewards)' : 'Planetary Artifacts (Unlockable Features)')}</strong>, you will power your progress and overcome any hurdle.</p>
// <h3>Get ready, your mission begins now!</h3>
// `;

//     document.querySelector("#finish").innerHTML = story;
// };
window.onload = function () {
    let planetName = localStorage.getItem("planetName");
    let planetMean = localStorage.getItem("planetMean");
    let checkedFocusAreas = JSON.parse(localStorage.getItem("checkedFocusAreas")) || []; // Fallback to an empty array if null
    let habit1 = localStorage.getItem("habit1");
    let habit2 = localStorage.getItem("habit2");
    let habit3 = localStorage.getItem("habit3");
    let rangeVal = localStorage.getItem("rangeVal");
    let selectedFocus = localStorage.getItem("selectedFocus");
    let selectedPower = localStorage.getItem("selectedPower");

    console.log({ planetName, planetMean, checkedFocusAreas, habit1, habit2, habit3, rangeVal, selectedFocus, selectedPower });

    let story = `
<h2>Welcome to the Habiform Mission!</h2>
<p>Your mission to terraform and nurture the planet <strong>${planetName}</strong> has begun. This planet is special, for it represents <strong>${planetMean}</strong>—a place where growth, habits, and progress take center stage.</p>
<p>As the Habiform , you’ve chosen to nurture this planet by focusing on the following areas:</p>
<ul>
    ${checkedFocusAreas.length > 0 ? checkedFocusAreas.map(area => `<li>${area}</li>`).join('') : '<li>No areas selected</li>'}
</ul>
<p>To fuel your planet’s transformation, you have crafted the following Habit Blueprint:</p>
<ul>
    <li><strong>Habit 1:</strong> ${habit1}</li>
    <li><strong>Habit 2:</strong> ${habit2}</li>
    <li><strong>Habit 3:</strong> ${habit3}</li>
</ul>
<p>Each day, you will dedicate <strong>${rangeVal} hours</strong> to your habits, nurturing the planet and helping it grow stronger.</p>
<p>However, your journey will not be without its challenges. The forces of the universe are constantly at play, and you may face the following cosmic obstacles:</p>
<ul>
    <li><strong>Cosmic Obstacle:</strong> ${selectedFocus}</li>
</ul>
<p>But fear not! With your chosen <strong>${selectedPower === 'daily' ? 'Cosmic Gems (Daily Achievements)' : (selectedPower === 'badge' ? 'Starry Badges (Milestone Rewards)' : 'Planetary Artifacts (Unlockable Features)')}</strong>, you will power your progress and overcome any hurdle.</p>
<h3>Get ready, your mission begins now!</h3>
`;

    document.querySelector("#finish").innerHTML = story;
};
