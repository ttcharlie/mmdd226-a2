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


// Change  furniture camera view 
const sofaSideViewBtn = document.getElementById('sofaSideViewBtn');
const chairTopViewBtn = document.getElementById('chairTopViewBtn');
const topViewerBtn = document.getElementById('topViewerBtn');

const resetSofaViewBtn = document.getElementById('resetSofaViewBtn');
const resetChairViewBtn = document.getElementById('resetChairViewBtn');
const resetTableViewBtn = document.getElementById('resetTableViewBtn');

topViewerBtn.addEventListener('click', () => {
    tableViewer.cameraOrbit = '35.26deg 22.88deg 2.832m'; 
});

sofaSideViewBtn.addEventListener('click', () => {
    sofaViewer.cameraOrbit = '-30.91deg 80.79deg 4.735m'; 
});

chairTopViewBtn.addEventListener('click', () => {
    chairViewer.cameraOrbit = '35.26deg 22.88deg 3.686m'; 
});

resetSofaViewBtn.addEventListener('click', () => {
    sofaViewer.cameraOrbit = '-91.95deg 80.51deg 4.735m';
});

resetChairViewBtn.addEventListener('click', () => {
    chairViewer.cameraOrbit = '10deg 70deg 3.686m';
});

resetTableViewBtn.addEventListener('click', () => {
    tableViewer.cameraOrbit = '0deg 75deg 2.832m';
});