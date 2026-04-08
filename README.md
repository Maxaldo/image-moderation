# Image Moderation - Ticketing App

Application de ticketing de modération d'images développée en TypeScript React avec Zustand.

## Stack technique

- TypeScript (strict)
- React 18+ (Vite)
- Zustand (state management)
- React Router v6

## Installation

```bash
git clone https://github.com/Maxaldo/image-moderation.git
cd image-moderation
npm install
```

## Lancement

```bash
npm run dev
```

## Architecture

```
src/
  components/
    user/           # Vue utilisateur
    moderator/      # Vue modérateur
    common/         # Composants partagés
  models/           # Interfaces et enums
  store/            # Store Zustand
  services/         # Logique métier
  data/             # Données mock
```

## Fonctionnalités

- Affichage d'une galerie d'images
- Signalement d'une image avec raison
- Création automatique d'un ticket de modération
- Interface modérateur avec filtres (ouverts / résolus)
- Actions : valider ou refuser un signalement

## Auteurs

- Max SOGBOSSI
- Jean
