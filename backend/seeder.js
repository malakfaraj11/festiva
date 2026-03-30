const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Venue = require('./models/Venue');

// Load env vars if any
dotenv.config();

// Connect to DB
connectDB();

const venues = [
    {
        name: "Château de la Roche",
        location: "Versailles, FR",
        price: 1500,
        capacity: 250,
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
        description: "Un lieu prestigieux pour vos mariages et réceptions de gala."
    },
    {
        name: "Le Loft Industriel",
        location: "Paris 11, FR",
        price: 800,
        capacity: 100,
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
        description: "Espace moderne et urbain pour soirées branchées et événements d'entreprise."
    },
    {
        name: "Villa Bellevue",
        location: "Nice, FR",
        price: 1200,
        capacity: 50,
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800",
        description: "Une villa avec vue imprenable sur la mer pour des fêtes privées."
    },
    {
        name: "La Grange Rénovée",
        location: "Bordeaux, FR",
        price: 600,
        capacity: 150,
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
        description: "Charme rustique et confort moderne dans le vignoble bordelais."
    },
    {
        name: "Palais Émeraude",
        location: "Marrakech, MA",
        price: 2500,
        capacity: 400,
        image: "assets/palais_emeraude.png",
        description: "Un Riad somptueux avec piscine et jardins luxuriants pour des événements royaux."
    },
    {
        name: "L'Atelier des Rêves",
        location: "Lyon, FR",
        price: 950,
        capacity: 120,
        image: "assets/atelier_reves.png",
        description: "Un loft industriel moderne dans un ancien atelier de soierie, idéal pour l'innovation."
    },
    {
        name: "Pavillon des Arts",
        location: "Cannes, FR",
        price: 3200,
        capacity: 300,
        image: "assets/pavillon_arts.png",
        description: "Un espace Art Déco prestigieux sur la Croisette pour vos plus beaux galas."
    },
    {
        name: "Domaine des Oliviers",
        location: "Aix-en-Provence, FR",
        price: 1800,
        capacity: 200,
        image: "assets/domaine_oliviers.png",
        description: "Une bastide provençale authentique entourée d'oliviers, parfaite pour un mariage champêtre."
    }
];

const importData = async () => {
    try {
        await Venue.deleteMany(); // Clear existing venues before seeding
        await Venue.insertMany(venues); // Insert our data
        console.log('Données importées avec succès !');
        process.exit();
    } catch (error) {
        console.error(`Erreur d'importation : ${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Venue.deleteMany(); // Clear everything
        console.log('Données supprimées avec succès !');
        process.exit();
    } catch (error) {
        console.error(`Erreur de suppression : ${error}`);
        process.exit(1);
    }
};

// Check arguments so script can either import or destroy
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
