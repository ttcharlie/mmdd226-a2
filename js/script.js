// Change Sofa color
const modelViewer = document.getElementById('sofaViewer');
const changeColorBtn = document.getElementById('changeColorBtn');


let currentColor = 'brown'; // Initial color

changeColorBtn.addEventListener('click', () => {
    if (currentColor === 'brown') {
        modelViewer.src = './models/white.glb'; // Change to white model
        currentColor = 'white';
    } else {
        modelViewer.src = './models/sofa.glb'; // Change back to brown model
        currentColor = 'brown';
    }
});

// Change Chair wood
const chairViewer = document.getElementById('chairViewer');
const chairWoodDropdown = document.getElementById('chairWood');

chairWoodDropdown.addEventListener('change', () => {
    const selectedColor = chairWoodDropdown.value;
    if (selectedColor === 'oak') {
        chairViewer.src = './models/chair.glb'; // Change to oak wood
    } else if (selectedColor === 'teak') {
        chairViewer.src = './models/darkbrownChair.glb'; // Change to teak wood
    }
});


// Change table wood
const tableViewer = document.getElementById('tableViewer');
const tableWoodsDropdown = document.getElementById('tableWoods');

tableWoodsDropdown.addEventListener('change', () => {
    const selectedWood = tableWoodsDropdown.value;
    if (selectedWood === 'oak-t') {
        tableViewer.src = './models/table.glb'; // Change to oak wood table model
    } else if (selectedWood === 'teak-t') {
        tableViewer.src = './models/teak-t.glb'; // Change to maple wood table model
    }
});


// Change table view 
const topViewerBtn = document.getElementById('topViewerBtn');

topViewerBtn.addEventListener('click', () => {
    tableViewer.cameraOrbit = '35.26deg 22.88deg 2.832m'; 
});
