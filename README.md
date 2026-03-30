# Festiva — Location de salles de fêtes

Application web premium pour la recherche, la réservation et la gestion de salles de fêtes. Ce projet combine une interface **Vanilla HTML/CSS/JS** ultra-réactive avec un nouveau **Backend Node.js & MongoDB** pour la gestion des données réelles.

## 🚀 Fonctionnalités

- **Recherche et Exploration :** Catalogue de salles premium avec filtres par ville, prix et capacité.
- **Espaces Utilisateurs :** 
  - **Dashboard Client :** Suivi des réservations et historique.
  - **Dashboard Propriétaire :** Ajout de salles ("Ajouter une salle") et gestion des demandes clients.
- **Mode Sombre / Aura Fluid :** Design moderne et dynamique avec arrière-plans interactifs et animations 3D/GLSL (effet Aura Fluid).
- **Backend Node.js :** Base de données MongoDB connectée via Mongoose pour la persistance des salles.

## 🛠️ Stack Technique

- **Frontend :** HTML5, CSS3 (Custom Properties, Flexbox/Grid, Animations), JavaScript Vanilla (sans framework).
- **Backend :** Node.js, Express.js (en cours d'intégration).
- **Base de Données :** MongoDB, Mongoose ORM.
- **Outils de Dev :** Browser-Sync (hot-reloading), Dotenv.

## 📦 Installation et Configuration

### 1. Prérequis
- [Node.js](https://nodejs.org/) (v16+ recommandé)
- [MongoDB](https://www.mongodb.com/) en cours d'exécution localement (ou URI Mongo Atlas).

### 2. Cloner et Installer
Ouvrez votre terminal et installez les dépendances nécessaires (pour le dev-server local et le backend) :

```bash
# Installation des dépendances (Browser-Sync, Mongoose, Dotenv, etc.)
npm install
```

### 3. Base de données (MongoDB)
L'application possède un script pour **auto-générer les données d'exemple** dans votre base MongoDB afin de pouvoir tester l'application tout de suite.

```bash
# Générer les salles de test dans MongoDB (Festiva DB)
node backend/seeder.js

# Note: Pour vider la base, utilisez `node backend/seeder.js -d`
```

## 💻 Lancement de l'Application

Pour démarrer le serveur de développement frontend (hot-reloading) :

```bash
npm start
```

L'interface sera accessible sur `http://localhost:3000`.

## 📂 Architecture du Projet

```text
📁 festiva-location
├── 📁 backend          # Serveur Node.js & Base de données
│   ├── 📁 config       # Configuration (ex: db.js)
│   ├── 📁 models       # Modèles Mongoose (ex: Venue.js)
│   ├── 📁 routes       # Définition des APIs (ex: venueRoutes.js)
│   └── 📄 seeder.js    # Script pour peupler la DB
├── 📁 css              # Styles Vanilla CSS 
├── 📁 js               # Logique Frontend
│   ├── 📄 app.js       # Gestion des salles et rendu UI
│   └── 📄 auth.js      # Authentification (localStorage)
├── 📄 index.html       # Page d'accueil / Liste des salles
├── 📄 details.html     # Page détaillée d'une salle
├── 📄 dashboard.html   # Espace Client
├── 📄 owner-dashboard.html # Espace Propriétaire
└── 📄 login.html / register.html # Pages de connexion
```

## 🎨 Design Premium & UX

Festiva se démarque par une utilisation poussée du design web créatif :
- **Aura Fluid Background :** Un fond dynamique utilisant WebGL/Three.js pour un effet premium et luxueux.
- **Composants Verre (Glassmorphism) :** Les cartes et menus utilisent des effets de flou et de transparence.
- **Micro-interactions :** Animations douces au survol des boutons, badges de notifications de chat en temps réel.
- **Modèles 3D :** Utilisation de modèles 3D style "emoji chunk" pour illustrer les services.

---

*Développé avec passion par lina pour simplifier l'organisation de vos plus beaux événements.*
