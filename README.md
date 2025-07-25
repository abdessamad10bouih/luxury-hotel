# 🏨 Luxury Hotel - my Dream Place

[![Language](https://img.shields.io/badge/Language-React%20%2F%20JavaScript-yellow)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-UNLICENSED-red)](https://choosealicense.com/no-permission/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue)](https://github.com/abdessamad10bouih/luxury-hotel/actions)
[![Pages](https://img.shields.io/badge/Deployed%20On-GitHub%20Pages-purple)](http://abdessamad10bouih.github.io/luxury-hotel/)

**Un projet open source moderne pour une plateforme de réservation d'hôtels de luxe.**

Luxury Hotel (anciennement *my Dream Place*) est une application web complète conçue pour faciliter la découverte, la planification et la réservation des dieux les plus luxueux du monde. L'interface utilisateur conviviale, associée à des fonctionnalités avancées comme la recherche contextuelle, l'authentification sociale et le filtrage intelligent, en fait un outil puissant pour les voyageurs en quête d'expériences exceptionnelles.

---

## ✨ Fonctionnalités Principales

- **Navigation fluide** avec React Router (multi-pages dynamiques)
- **Authentification complète** via Google et génération de compte par email (Firebase Auth)
- **Recherche en temps réel** avec API géographique (rapidAPI GeoDB Cities) pour les suggestions de villes
- **Interface Responsive** adaptée aux mobiles et bureau grâce à Tailwind CSS
- **Système de filtres avancés** (budget, équipements, annulation gratuite, etc.)
- **Affichage détaillé des chambres** avec galerie photo, notes, et équipements
- **Pop-ups interactifs** (bienvenue, alerte COVID)
- **Gestion du thème & animation moderne** via Framer Motion et FontAwesome
- **Notifications utilisateur** via `react-toastify`

---

## ⚙️ Stack Technique

| Catégorie       | Technologies Utilisées                                                                 |
|----------------|----------------------------------------------------------------------------------------|
| Frontend        | React 18, JSX, JavaScript (`react`, `react-dom`, `react-router-dom`)                  |
| UI              | Tailwind CSS, Material UI (MUI), PrimeReact, @emotion/react, FontAwesome Icons        |
| Animation       | Framer Motion, React Slider, CSS Transitions                                          |
| API & Services  | Firebase Auth, rapidAPI (GeoDB Cities), Google Maps API (implémentée)                 |
| Déploiement     | GitHub Pages                                                                             |
| Outils          | Create React App, jQuery (pour recherche), React Toastify, Prettier, ESLint             |
| Hébergement     | Firebase (auth), Statique via GitHub Pages                                              |

---

## 🛠️ Installation

1. **Cloner le dépôt**

```bash
git clone https://github.com/abdessamad10bouih/luxury-hotel.git
cd luxury-hotel
```

2. **Installer les dépendances**

```bash
npm install
```

> ✅ Vérifiez que Node.js est installé (version 14+ recommandée)

3. **Lancer en mode développement**

```bash
npm start
```

L’application sera disponible à [http://localhost:3000](http://localhost:3000)

---

## 📚 Utilisation

### Pages Disponibles
| Chemin | Fonctionnalité |
|-------|----------------|
| `/` ou `/luxury-hotel` | Page d'accueil (liste des destinations) |
| `/rooms` | Recherche et filtrage des chambres |
| `/room` | Détail d'une chambre sélectionnée |
| `/login` | Connexion utilisateur |
| `/register` | Création de compte |

### Exemples d'Interactions

**1. Recherche de destination**

```jsx
// Dans SearchBar.jsx
<Calendar value={checkInDate} onChange={(e) => setCheckInDate(e.value)} />
```

**2. Connexion avec Google**

```js
const handleSign = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};
```

**3. Filtrage des résultats**

```jsx
<input 
  type="checkbox" 
  id="beach-front" 
  onChange={() => applyFilter('beachFront')} 
/>
<label htmlFor="beach-front">Bord de mer</label>
```

---

## 📂 Structure du Projet

```
src/
├── assets/               # Images, logos, icônes
├── components/           # Composants réutilisables (NavBar, Button, Footer, etc.)
├── context/              # Authentification globale (AuthContext.js, firebase.js)
├── main pages/           # Pages principales (Home, Rooms, Register, Login, etc.)
├── variants.js           # Animations Framer Motion
├── firebase.js           # Configuration Firebase (clé chargée via .env)
└── App.js / index.js     # Entrée principale et routing
```

---

## 🔐 Configuration & Variables d'Environnement

Créez un fichier `.env` à la racine du projet :

```env
# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# API Keys
REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
```

> 🔑 Les clés API ne doivent **jamais** être poussées sur GitHub.

---

## 🧪 Tests & Intégration Continue (CI/CD)

### Tests
Le projet inclut des tests basiques avec Jest :
```bash
npm test
```

Un test unitaire est défini dans `App.test.js`.

### CI/CD
- ✅ **GitHub Actions** : À configurer pour les vérifications automatiques (linting, test)
- 📦 **Déploiement automatisé** via `gh-pages` après build

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

> Déploiement sur : [http://abdessamad10bouih.github.io/luxury-hotel/](http://abdessamad10bouih.github.io/luxury-hotel/)

---

## 🚀 Déploiement

1. **Builder l'application**
```bash
npm run build
```

2. **Déployer sur GitHub Pages**
```bash
npm run deploy
```

> ✅ Le déploiement est automatiquement poussé sur `gh-pages` depuis la commande `npm run deploy`.

> Le `homepage` est déjà configuré dans `package.json`.

---

## 🤝 Contribuer

Nous sommes ouverts aux contributions ! Voici comment participer :

1. **Fork le projet**
2. **Crée une branche** (`feature/nouvelle-fonction`)
3. **Commite tes modifications** (`git commit -m "Ajoute X"`)
4. **Pousse la branche** (`git push origin feature/nouvelle-fonction`)
5. **Ouvre une Pull Request**

### Bonnes Pratiques
- ✅ Suivre le linting ESLint
- ✅ Écrire du code modulaire et commenté
- 🔤 Nommer les composants en PascalCase
- 🎨 Utiliser Tailwind pour le style

---

## 📄 License & Crédits

> ❌ **Aucune license n’est définie sur le dépôt.**  
Par défaut, ce projet est **non open source** (pas de redistribution, modification, ou usage commercial autorisé sans permission explicite.)

Nous recommandons d'ajouter une license (MIT ou Apache 2.0) pour un vrai projet open source.

### Crédits
- **API Géographique** : [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geo-db-cities/)
- **Icônes** : Font Awesome
- **Animation** : Framer Motion
- **UI Components** : PrimeReact, MUI
- **Authentification** : Firebase Auth

---

## 👥 Mainteneurs & Contacts

- **Développeur Principal** : Abdessamad Boulouih
- **GitHub** : [@abdessamad10bouih](https://github.com/abdessamad10bouih)
- **Email** : abdessamad10bouih@gmail.com *(à configurer)*
- **Projet hébergé sur** : [GitHub Repository](https://github.com/abdessamad10bouih/luxury-hotel)

---

🌟 Merci d’utiliser **Luxury Hotel** – Transformez chaque voyage en une expérience mémorable.