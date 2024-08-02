document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const button = document.getElementById('updateGrid');

    // Function to generate a random RGB color
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Function to darken a color by a given percentage
    function darkenColor(color, percent) {
        const [r, g, b] = color.match(/\d+/g).map(Number);
        const factor = 1 - percent / 100;
        const newR = Math.round(r * factor);
        const newG = Math.round(g * factor);
        const newB = Math.round(b * factor);
        return `rgb(${newR}, ${newG}, ${newB})`;
    }

    function createGrid(size) {
        // Calculate the size of each grid item
        const itemSize = 960 / size;

        // Remove existing grid items
        container.innerHTML = '';

        // Create new grid items
        for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.style.flex = `1 0 ${itemSize}px`; // Set the width of each item
            div.style.height = `${itemSize}px`; // Set the height of each item
            div.classList.add('grid-item');

            // Initialize color and interaction count
            let baseColor = getRandomColor();
            let interactionCount = 0;

            div.addEventListener('mouseover', () => {
                if (interactionCount < 10) {
                    interactionCount++;
                    const darkenedColor = darkenColor(baseColor, interactionCount * 10);
                    div.style.backgroundColor = darkenedColor;
                }
            });

            container.appendChild(div);
        }
    }

    button.addEventListener('click', () => {
        // Prompt the user for the number of squares per side
        let size = parseInt(prompt('Enter the number of squares per side (max 100):', '16'), 10);

        // Validate input
        if (isNaN(size) || size < 1 || size > 100) {
            alert('Please enter a number between 1 and 100.');
            return;
        }

        // Create the grid with the specified size
        createGrid(size);
    });

    // Initial grid setup
    createGrid(16);
});
