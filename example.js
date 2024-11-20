const checkboxes = document.querySelectorAll('.biome input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            console.log(`${this.value} biome selected`);
        } else {
            console.log(`${this.value} biome deselected`);
        }
    });
});
