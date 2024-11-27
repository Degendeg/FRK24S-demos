// SWAPI GraphQL API URL
const API_URL = "https://swapi-graphql.netlify.app/.netlify/functions/index";

// GraphQL query
const query = `
  {
    allPeople(first: 50) {
      people {
        name
        birthYear
        gender
        homeworld {
          name
        }
      }
    }
  }
`;

async function fetchCharacters() {
    try {
        // Fetch data from SWAPI GraphQL API
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query }),
        });

        // Parse JSON response
        const { data } = await response.json();

        // Get container element
        const container = document.getElementById("characters");

        // Render each character
        data.allPeople.people.forEach((character) => {
            const characterElement = document.createElement("div");
            characterElement.className = "character";
            characterElement.innerHTML = `
        <h2>${character.name}</h2>
        <p><strong>Birth Year:</strong> ${character.birthYear}</p>
        <p><strong>Planet:</strong> ${character.homeworld.name}</p>
        <p><strong>Gender:</strong> ${character.gender}</p>
      `;
            container.appendChild(characterElement);
        });
    } catch (error) {
        console.error("Error fetching characters:", error);
        document.getElementById("characters").innerText = "Failed to load characters.";
    }
}

fetchCharacters();