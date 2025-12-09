// Externalized search and filter logic for gamelist.html

const btnShowAll = document.getElementById("btn-showall");
const btnSingleplayer = document.getElementById("btn-singleplayer");
const btnMultiplayer = document.getElementById("btn-multiplayer");
const searchInput = document.getElementById("search-input");
const gameCards = document.querySelectorAll(".game-card");

function filterGames(category) {
  gameCards.forEach(function(card) {
    const cardCategory = card.dataset.category || "";
    const matchesCategory = (category === "all") || cardCategory.includes(category);
    const title = card.querySelector(".card-title")?.textContent?.toLowerCase() || "";
    const matchesSearch = title.includes(searchInput.value.toLowerCase());

    card.parentElement.style.display = (matchesCategory && matchesSearch) ? "" : "none";
  });
}

// Wire filter buttons
btnShowAll.addEventListener("click", function() {
  setActiveFilter(btnShowAll);
  filterGames("all");
});
btnSingleplayer.addEventListener("click", function() {
  setActiveFilter(btnSingleplayer);
  filterGames("singleplayer");
});
btnMultiplayer.addEventListener("click", function() {
  setActiveFilter(btnMultiplayer);
  filterGames("multiplayer");
});

// Search input
searchInput.addEventListener("input", function() {
  // keep current filter selection
  const active = document.querySelector('.filter-buttons .btn.active');
  const cat = active === btnSingleplayer ? 'singleplayer' : (active === btnMultiplayer ? 'multiplayer' : 'all');
  filterGames(cat);
});

// Helper to mark active filter visually
function setActiveFilter(activeBtn) {
  const buttons = [btnShowAll, btnSingleplayer, btnMultiplayer];
  buttons.forEach(b => b.classList.remove('active'));
  activeBtn.classList.add('active');
}

// Initialize (show all)
filterGames('all');
