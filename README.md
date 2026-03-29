# Festiva — Location de salles de fêtes

Application web pour la recherche et la réservation de salles de fêtes. Cette version est implémentée en **Vanilla HTML, CSS et JavaScript** pour une performance maximale et une simplicité de déploiement.

## Fonctionnalités

- **Exploration :** Recherche de salles par ville ou nom.
- **Authentification :** Système de connexion et inscription (données persistées dans le `localStorage`).
- **Réservation :** Formulaire de réservation interactif sur la page de détails.
- **Dashboards :**
    - **Client :** Suivi des réservations.
    - **Propriétaire :** Gestion des salles et des demandes.
- **Design Premium :** Interface moderne avec animations fluides et responsive design.

## Installation

1. Clonez ou téléchargez le projet.
2. Installez les dépendances de développement pour le serveur local :

```bash
npm install
```

## Lancement

Pour lancer l'application avec un rechargement automatique (Hot Reloading) :

```bash
npm start
```

L'application sera accessible par défaut sur : http://localhost:3000

*Note : Vous pouvez également ouvrir directement le fichier `index.html` dans votre navigateur.*

## Architecture

- `index.html` : Page d'accueil et liste des salles.
- `login.html` / `register.html` : Pages d'authentification.
- `details.html` : Page de détail d'une salle.
- `dashboard.html` / `owner-dashboard.html` : Espaces utilisateurs.
- `css/` : Contient les styles globaux et spécifiques.
- `js/` :
    - `app.js` : Logique principale et rendu des salles.
    - `auth.js` : Gestion de l'authentification et de la navigation.
- `assets/` : Ressources graphiques (images, icônes).

## Données de Démo

Le projet utilise des données mockées définies dans `js/app.js`. Les utilisateurs de démo sont gérés via le `localStorage`.
