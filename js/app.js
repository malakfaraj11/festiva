const venues = [
    {
        id: 1,
        name: "Château de la Roche",
        location: "Versailles, FR",
        price: 1500,
        capacity: 250,
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
        description: "Un lieu prestigieux pour vos mariages et réceptions de gala."
    },
    {
        id: 2,
        name: "Le Loft Industriel",
        location: "Paris 11, FR",
        price: 800,
        capacity: 100,
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
        description: "Espace moderne et urbain pour soirées branchées et événements d'entreprise."
    },
    {
        id: 3,
        name: "Villa Bellevue",
        location: "Nice, FR",
        price: 1200,
        capacity: 50,
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800",
        description: "Une villa avec vue imprenable sur la mer pour des fêtes privées."
    },
    {
        id: 4,
        name: "La Grange Rénovée",
        location: "Bordeaux, FR",
        price: 600,
        capacity: 150,
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
        description: "Charme rustique et confort moderne dans le vignoble bordelais."
    },
    {
        id: 5,
        name: "Palais Émeraude",
        location: "Marrakech, MA",
        price: 2500,
        capacity: 400,
        image: "assets/palais_emeraude.png",
        description: "Un Riad somptueux avec piscine et jardins luxuriants pour des événements royaux."
    },
    {
        id: 6,
        name: "L'Atelier des Rêves",
        location: "Lyon, FR",
        price: 950,
        capacity: 120,
        image: "assets/atelier_reves.png",
        description: "Un loft industriel moderne dans un ancien atelier de soierie, idéal pour l'innovation."
    },
    {
        id: 7,
        name: "Pavillon des Arts",
        location: "Cannes, FR",
        price: 3200,
        capacity: 300,
        image: "assets/pavillon_arts.png",
        description: "Un espace Art Déco prestigieux sur la Croisette pour vos plus beaux galas."
    },
    {
        id: 8,
        name: "Domaine des Oliviers",
        location: "Aix-en-Provence, FR",
        price: 1800,
        capacity: 200,
        image: "assets/domaine_oliviers.png",
        description: "Une bastide provençale authentique entourée d'oliviers, parfaite pour un mariage champêtre."
    }
];

function renderVenues() {
    const grid = document.getElementById('venue-grid');
    if (!grid) return;

    grid.innerHTML = venues.map(venue => `
        <article class="venue-card">
            <div class="card-price">${venue.price}€ / jour</div>
            <div class="card-image">
                <img src="${venue.image}" alt="${venue.name}">
            </div>
            <div class="card-body">
                <h3 class="card-title">${venue.name}</h3>
                <div class="card-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    ${venue.location}
                </div>
                <div class="card-footer">
                    <div class="card-capacity">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        ${venue.capacity} pers.
                    </div>
                    <a href="details.html?id=${venue.id}" class="btn-details">
                        Détails
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderVenues);
