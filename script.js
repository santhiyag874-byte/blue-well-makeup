const previewContainer = document.querySelector('.products-preview');
const previewBoxes = previewContainer?.querySelectorAll('.preview') ?? [];
const cards = document.querySelectorAll('.pro-container .card');

cards.forEach(card => {
    card.onclick = () => {
        const name = card.getAttribute('data-name');
        if (!name) return;

        previewBoxes.forEach(preview => {
            if (preview.dataset.target === name) {
                preview.classList.add('active');
            } else {
                preview.classList.remove('active');
            }
        });

        if (previewContainer) {
            previewContainer.style.display = 'flex';
        }
    };
});

previewBoxes.forEach(preview => {
    const closeBtn = preview.querySelector('.fa-times');
    if (!closeBtn) return;

    closeBtn.onclick = () => {
        preview.classList.remove('active');
        if (previewContainer) {
            previewContainer.style.display = 'none';
        }
    };
});