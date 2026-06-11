document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('popupOverlay');
    const closeButton = document.getElementById('closeBtn');
    const clickableCards = document.querySelectorAll('[data-popup-target]');

    // Target the elements inside the popup that need to change
    const popupImg = document.getElementById('popupImg');
    const popupName = document.getElementById('popupSpeakerName');
    const popupTitle = document.getElementById('popupSpeakerTitle');
    const popupDescription = document.getElementById('popupDescription');

    const openPopup = (event) => {
        // Find the card element that was clicked (handles nesting clicks safely)
        const card = event.currentTarget;

        // Extract the information from the clicked card's attributes
        const name = card.getAttribute('data-name');
        const title = card.getAttribute('data-title');
        const image = card.getAttribute('data-image');
        const bio = card.getAttribute('data-bio');

        // Inject the values into the shared popup panel layout
        popupName.textContent = name;
        popupTitle.textContent = title;
        popupImg.src = image;
        popupImg.alt = `${name} Photo`;
        popupDescription.innerHTML = bio; // innerHTML allows <br> lines if needed

        // Trigger presentation transitions
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Listen for clicks on your items
    clickableCards.forEach(card => {
        card.addEventListener('click', openPopup);
    });

    if (closeButton) {
        closeButton.addEventListener('click', closePopup);
    }

    if (overlay) {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closePopup();
            }
        });
    }
});