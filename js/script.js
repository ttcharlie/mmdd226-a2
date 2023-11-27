document.addEventListener('DOMContentLoaded', function() {
    const sofaViewer = document.getElementById('sofaViewer');
    const selectSofaVariant = document.getElementById('sofaVariant');

    sofaViewer.addEventListener('load', () => {
        // Assuming your sofa model has two color variants: 'color1' and 'color2'
        const variantOptions = ['brown', 'white'];

        for (const variant of variantOptions) {
            const option = document.createElement('option');
            option.value = variant;
            option.textContent = `Color ${variant.charAt(variant.length - 1)}`;
            selectSofaVariant.appendChild(option);
        }
    });

    selectSofaVariant.addEventListener('input', (event) => {
        sofaViewer.variantName = event.target.value === 'default' ? null : event.target.value;
    });

    // Additional setup or logic for other furniture models (chair, table, etc.) if present
});
