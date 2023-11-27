document.addEventListener('DOMContentLoaded', function() {
    const modelViewer = document.getElementById('colorModel');
    const changeColorBtn = document.getElementById('changeColorBtn');

    let currentColor = 'brown'; // Initial color

    changeColorBtn.addEventListener('click', () => {
        console.log("Button clicked!"); 
        // Toggle between different model sources based on the current color
        if (currentColor === 'brown') {
            modelViewer.src = '/models/white.glb'; // Change to white model
            currentColor = 'white';
        } else {
            modelViewer.src = '/models/sofa.glb'; // Change back to brown model
            currentColor = 'brown';
        }
    });
});
