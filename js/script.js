document.addEventListener('DOMContentLoaded', function() {
    const sofaViewer = document.getElementById('sofaViewer');
    const sofaControls = document.getElementById('sofa-controls');

    sofaControls.addEventListener('click', (event) => {
        const colorString = event.target.dataset.color;
        const [material] = sofaViewer.model.materials;
        if (material) {
            material.pbrMetallicRoughness.setBaseColorFactor(colorString);
        }
    });

    // Similar event listeners for chair and table models (if present)
    // const chairViewer = document.getElementById('chairViewer');
    // const chairControls = document.getElementById('chair-controls');
    // ...

    // const tableViewer = document.getElementById('tableViewer');
    // const tableControls = document.getElementById('table-controls');
    // ...
});