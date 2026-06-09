# RENTALin

RENTALin is a modern and responsive landing page for a premium PlayStation rental and gaming space in Indonesia. It showcases the available facilities, trending games, and various room types (Regular, VIP, and VVIP) offered to customers.

## Features

- **Responsive Design:** Optimized layout for all devices, including modern smartphones, tablets, and desktop computers.
- **Modern UI/UX:** Clean aesthetics utilizing glassmorphism effects, CSS gradients, and smooth scroll animations.
- **Interactive Sliders:** Includes dynamic carousels to showcase trending games and room types.
- **Game List Directory:** A dedicated page to view the catalog of available games with search and category filtering functionality (Singleplayer/Multiplayer).
- **Performance Optimized:** Implements lazy loading for images and DNS prefetching for external resources to ensure fast load times.

## Technologies Used

- **HTML5:** Semantic markup structure.
- **CSS3:** Custom styling with CSS Variables, Flexbox, and Media Queries for responsiveness.
- **JavaScript (Vanilla):** Logic for search filtering, DOM manipulation, and component initialization.
- **Bootstrap 5:** Grid system and utility classes for rapid UI development.
- **Swiper.js:** Touch-enabled slider for the trending games and room galleries.
- **AOS (Animate On Scroll):** Scroll-driven entrance animations.
- **Bootstrap Icons:** Vector icons used throughout the interface.

## Project Structure

```text
RENTALin/
├── css/
│   └── style.css       # Custom stylesheets
├── js/
│   ├── main.js         # Slider configurations and global scripts
│   └── gamelist.js     # Search, filtering, and modal logic for the Game List page
├── photo/              # Directory containing all image assets
├── index.html          # Main landing page
└── gamelist.html       # Game catalog page
```

## How to Run Locally

1. Clone this repository to your local machine.
2. Open the project folder.
3. Open `index.html` in your preferred web browser. 
   - Alternatively, you can use an extension like "Live Server" in VS Code for a better development experience.
4. No build process, node modules, or server setup is required.

## Author

Developed for RENTALin - Best Rental Playstation in Indonesia.
