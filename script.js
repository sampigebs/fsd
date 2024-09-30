document.getElementById('color-palette').addEventListener('change', function() {
    const customColors = document.getElementById('custom-colors');
    if (this.value === 'custom') {
        customColors.style.display = 'flex';
    } else {
        customColors.style.display = 'none';
    }
});

document.getElementById('generate-wallpaper').addEventListener('click', function() {
    const description = document.getElementById('user-description').value.trim();
    const colorPalette = document.getElementById('color-palette').value;
    const style = document.getElementById('style-select').value;
    const resolution = document.getElementById('resolution-select').value;

    const resultDiv = document.getElementById('wallpaper-result');

    if (!description) {
        resultDiv.innerHTML = '<span style="color: red;">Please enter a description.</span>';
        return;
    }

    // Simulate loading
    resultDiv.innerHTML = '<div class="loader"></div>';

    // Mock wallpaper generation delay
    setTimeout(() => {
        resultDiv.innerHTML = `
            <div>
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>Color Palette:</strong> ${colorPalette === 'vibgyor' ? 'VIBGYOR' : 'Custom'}</p>
                <p><strong>Style:</strong> ${style}</p>
                <p><strong>Resolution:</strong> ${resolution}</p>
                <p><em>Wallpaper generated successfully!</em></p>
            </div>
        `;
    }, 2000);
});