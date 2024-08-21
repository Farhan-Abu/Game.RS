document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const gameCards = document.querySelectorAll('.game-card');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        gameCards.forEach(function(card) {
            const gameTitle = card.querySelector('h3').textContent.toLowerCase();
            if (gameTitle.includes(searchTerm)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});
