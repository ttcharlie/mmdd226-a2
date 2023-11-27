// simple change model
document.getElementById("change-colour").addEventListener("click", function() {
    document.getElementById("model").src = "/models/white-sofa.glb";
});

// example with showing content
document.getElementById("change-colour").addEventListener("click", function() {
    document.getElementById("model-info").style.display = "block";
});

// // example with multiple models
// var myModels = ["/models/orange.glb", "/models/teal.glb", "/models/orange.glb", "/models/teal.glb",]
// var counter = 0;
// document.getElementById("change-colour").addEventListener("click", function() {
//     counter++;
//     if (counter==3) { 
//         counter = 0;
//     }
//     document.getElementById("model").src = myModels[counter];
// });

// different views
document.getElementById('view-angle1').addEventListener('click', function() {
    const viewer = document.querySelector('model-viewer');
    viewer.cameraOrbit = '90deg 0deg 3m'; // Set the desired camera orbit for the top view
});

document.getElementById('view-angle2').addEventListener('click', function() {
    const viewer = document.querySelector('model-viewer');
    viewer.cameraOrbit = '45deg 45deg 3m'; // Set the desired camera orbit for the side view
});

