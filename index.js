const express = require('express')
const app = express()

let endangeredSpeciesData = {
    species: [
        {
            common_name: "Amur Leopard",
            scientific_name: "Panthera pardus orientalis",
            habitat: "Temperate forests",
            population_estimate: 120,
            status: "Critically Endangered",
            threats: ["Poaching", "Habitat loss", "Human-wildlife conflict"]
        },
        {
            common_name: "Hawksbill Turtle",
            scientific_name: "Eretmochelys imbricata",
            habitat: "Tropical coral reefs",
            population_estimate: 8000,
            status: "Critically Endangered",
            threats: ["Illegal trade", "Pollution", "Fishing nets"]
        },
        {
            common_name: "Vaquita",
            scientific_name: "Phocoena sinus",
            habitat: "Northern Gulf of California",
            population_estimate: 10,
            status: "Critically Endangered",
            threats: ["Bycatch in fishing gear"]
        },
        {
            common_name: "Pangolin",
            scientific_name: "Manis spp.",
            habitat: "Tropical forests and grasslands",
            population_estimate: "Unknown",
            status: "Critically Endangered",
            threats: ["Illegal wildlife trade", "Deforestation"]
        },
        {
            common_name: "Mountain Gorilla",
            scientific_name: "Gorilla beringei beringei",
            habitat: "Montane forests",
            population_estimate: 1063,
            status: "Endangered",
            threats: ["Poaching", "Disease", "Habitat destruction"]
        }
    ],
    conservation_efforts: {
        total_organizations: 15,
        notable_projects: [
            {
                name: "Wildlife Conservation Society",
                focus_species: ["Amur Leopard", "Mountain Gorilla"],
                initiatives: ["Anti-poaching patrols", "Habitat restoration"]
            },
            {
                name: "Sea Turtle Conservancy",
                focus_species: ["Hawksbill Turtle"],
                initiatives: ["Beach monitoring", "Marine protection zones"]
            },
            {
                name: "Vaquita CPR",
                focus_species: ["Vaquita"],
                initiatives: ["Bycatch reduction", "Public awareness campaigns"]
            }
        ]
    },
    regions_at_risk: [
        {
            region_name: "Amazon Rainforest",
            key_threats: ["Deforestation", "Illegal mining", "Climate change"],
            endangered_species: ["Pangolin"]
        },
        {
            region_name: "Coral Triangle",
            key_threats: ["Overfishing", "Coral bleaching"],
            endangered_species: ["Hawksbill Turtle"]
        },
        {
            region_name: "African Highlands",
            key_threats: ["Human encroachment", "Illegal hunting"],
            endangered_species: ["Mountain Gorilla"]
        }
    ]
};



// INSTRUCTIONS: Set up the code that does the following
// - console logs the method and URL for every request
// - sends back "Explore data on endangered species, their habitats, threats, and conservation efforts." as an h2 when the client goes to /
// - sends back the species array when the client goes to /species
// - sends back the conservation_efforts object when the client goes to /conservation
// - sends back the the "Amazon Rainforest" object when the client goes to /region/1
// - EXTRA CREDIT: modify your region route handler to send any region using the dynamic parameter region/{index}
// - sends back a 404 page for all other paths





app.listen(3000, () => {
    console.log("Server running")
})
