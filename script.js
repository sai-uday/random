const facts = [
    "Honey never spoils.",
    "A group of flamingos is called a 'flamboyance'.",
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
    "Octopuses have three hearts.",
    "The longest time between two twins being born is 87 days."
];

function generateRandomFact() {
    const factIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[factIndex];
    document.getElementById("fact-display").textContent = randomFact;
    alert(randomFact);
}
alert("hi")
document.getElementById("generate-button").addEventListener("click", generateRandomFact);
