# Pokédex App

<div align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu" width="150" />
  <h3>A modern Pokémon encyclopedia built with React</h3>
</div>

## 📋 Overview

This Pokédex application allows users to browse, search, and explore Pokémon from all generations. Built with React, TypeScript, and powered by the PokeAPI, it features a responsive design with smooth animations and infinite scrolling for an engaging user experience.

## ✨ Features

- **Pokémon Browse**: View a comprehensive list of Pokémon with infinite scrolling
- **Search Functionality**: Find any Pokémon by name
- **Detailed Information**: View detailed stats, abilities, and characteristics for each Pokémon
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with seamless animations
- **Performance Optimized**: Fast loading times with React Query caching

## 🚀 Tech Stack

- **React** - UI library
- **TypeScript** - Type safety and better developer experience
- **React Query** - Data fetching and cache management
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Navigation and routing
- **PokeAPI** - Pokémon data source

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/supriadiacep/portofolio-pokedex.git
   cd portofolio-pokedex
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## �� Project Structure

```bash
src/
├── api/ # API calls and axios config
├── assets/ # Static assets (images, SVGs)
├── components/ # React components
│ ├── Hero/ # Hero section components
│ ├── List/ # List section for displaying pokémon
│ ├── Pokemon/ # Pokémon detail components
│ └── ui/ # Reusable UI components
├── hooks/ # Custom React hooks
├── models/ # TypeScript interfaces and types
├── pages/ # Page components
└── utils/ # Utility functions
```

## 🔍 Usage

- **Browse Pokémon**: Scroll through the list or use the "Load More" button to see additional Pokémon
- **Search**: Use the search bar to find specific Pokémon by name
- **View Details**: Click on a Pokémon card to see detailed information

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [PokeAPI](https://pokeapi.co/) for providing the Pokémon data
- [Pokémon](https://www.pokemon.com/) for the inspiration and Pokémon assets
- [React Query](https://tanstack.com/query/latest) for the excellent data fetching library
- [Framer Motion](https://www.framer.com/motion/) for the animation capabilities

---

<div align="center">
  <p>Made with ❤️ by Supriadi Acep</p>
  <p>© 2023 Pokédex App. All rights reserved.</p>
</div>
