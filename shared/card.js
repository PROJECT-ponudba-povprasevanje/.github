document.addEventListener('DOMContentLoaded', function() {
    // Dynamic data to be projected into the card
    const cardData = {
        imageUrl: 'https://via.placeholder.com/300x150',
        title: 'Dynamic Title',
        description: 'This is a dynamically inserted description. You can change this content using JavaScript.',
        buttonText: 'Learn More'
    };

    // Selecting elements
    const cardImage = document.getElementById('cardImage');
    const cardTitle = document.getElementById('cardTitle');
    const cardDescription = document.getElementById('cardDescription');
    const actionButton = document.getElementById('actionButton');

    // Assigning dynamic content
    cardImage.src = cardData.imageUrl;
    cardTitle.textContent = cardData.title;
    cardDescription.textContent = cardData.description;
    actionButton.textContent = cardData.buttonText;
});
