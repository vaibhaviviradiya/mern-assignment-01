import fetch from 'node-fetch';

async function fetchGoogleHomePage() {
    try {
        const response = await fetch('https://www.google.com');
        const html = await response.text();
        console.log("Fetched Google homepage content:\n");
        console.log(html.slice(0, 500)); 
    } catch (err) {
        console.error("Error fetching Google:", err.message);
    }
}

fetchGoogleHomePage();
