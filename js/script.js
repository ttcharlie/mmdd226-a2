const modelViewer = document.getElementById('colorModel');
const changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('click', () => {
    // Modify the color property of the model
    const material = modelViewer.model.materials[0]; // Assuming the color change is applicable to the first material
    material.pbrMetallicRoughness.baseColorFactor = [0.5, 0.2, 0.8, 1.0]; // Change color to purple, for example
});