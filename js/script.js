const modelViewer = document.getElementById('colorModel');
const changeColorBtn = document.getElementById('changeColorBtn');

let currentColor = 'brown'; // Initial color

changeColorBtn.addEventListener('click', () => {
    // Toggle between different model sources based on the current color
    if (currentColor === 'brown') {
        modelViewer.src = 'white.glb'; // Change to blue model
        currentColor = 'white';
    } else {
        modelViewer.src = 'sofa.glb'; // Change back to brown model
        currentColor = 'brown';
    }
});
