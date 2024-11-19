const info = {
    "articles": [
        {
            "id": "20230416-001",
            "title": "Community Garden Project Receives Grant for Expansion",
            "date": "2023-04-16",
            "author": "Alice Martin",
            "content": "The GreenFingers community garden project has been awarded a $20,000 grant to expand its urban farming initiatives. The project aims to increase local food production and provide educational opportunities for residents.",
            "category": "Local News",
            "tags": [
                "community",
                "gardening",
                "grant"
            ]
        },
        {
            "id": "20230416-002",
            "title": "New Public Art Installation Lights Up Downtown",
            "date": "2023-04-16",
            "author": "Carlos Gomez",
            "content": "A dazzling new public art installation has been unveiled in the heart of downtown. The interactive light sculpture is expected to attract visitors and promote cultural engagement in the city center.",
            "category": "Arts & Culture",
            "tags": [
                "art",
                "public",
                "installation"
            ]
        },
        {
            "id": "20230416-003",
            "title": "Tech Conference to Showcase Latest Innovations",
            "date": "2023-04-16",
            "author": "Rachel Kim",
            "content": "The annual TechNow Conference is set to showcase the latest innovations in the tech industry. Industry leaders will gather to discuss trends, share insights, and network with peers.",
            "category": "Technology",
            "tags": [
                "technology",
                "conference",
                "innovation"
            ]
        },
        {
            "id": "20230416-004",
            "title": "Local Library Expands Digital Archive Collection",
            "date": "2023-04-16",
            "author": "Sam Patel",
            "content": "The city's main library has expanded its digital archive collection, making thousands of historical documents and photographs available to the public online.",
            "category": "Education",
            "tags": [
                "library",
                "digital",
                "archives"
            ]
        },
        {
            "id": "20230416-005",
            "title": "City Marathon Raises Funds for Health Charity",
            "date": "2023-04-16",
            "author": "Linda Hughes",
            "content": "Thousands of runners took to the streets in the annual city marathon, raising over $100,000 for a local health charity. The event also promoted the benefits of physical activity and community spirit.",
            "category": "Sports",
            "tags": [
                "marathon",
                "charity",
                "health"
            ]
        },
        {
            "id": "20230416-006",
            "title": "Innovative Water Purification System Wins Award",
            "date": "2023-04-16",
            "author": "Mohammed Ali",
            "content": "A local engineering team has won a prestigious award for their innovative water purification system, which promises to provide clean drinking water to remote communities.",
            "category": "Science",
            "tags": [
                "water",
                "purification",
                "award"
            ]
        },
        {
            "id": "20230416-007",
            "title": "School District Implements New Bilingual Education Program",
            "date": "2023-04-16",
            "author": "Sophie Chen",
            "content": "The local school district has implemented a new bilingual education program to better serve its diverse student population. The program includes classes in both English and Spanish.",
            "category": "Education",
            "tags": [
                "education",
                "bilingual",
                "program"
            ]
        },
        {
            "id": "20230416-008",
            "title": "Veterans' Parade to Honor Military Service",
            "date": "2023-04-16",
            "author": "Bruce Thompson",
            "content": "The annual Veterans' Parade will take place this weekend, honoring the service and sacrifice of military personnel. The parade will feature marching bands, military vehicles, and a flyover by the Air Force.",
            "category": "Events",
            "tags": [
                "veterans",
                "parade",
                "military"
            ]
        },
        {
            "id": "20230416-009",
            "title": "Breakthrough Study on Sleep Patterns Published",
            "date": "2023-04-16",
            "author": "Emma Larson",
            "content": "Researchers from the University of Health Sciences have published a breakthrough study on human sleep patterns, offering new insights into the importance of quality sleep for overall health.",
            "category": "Health",
            "tags": [
                "sleep",
                "study",
                "health"
            ]
        },
        {
            "id": "20230416-010",
            "title": "Local Chefs Compete in Culinary Showdown",
            "date": "2023-04-16",
            "author": "Daniel Rivera",
            "content": "Top chefs from around the city will compete in the annual Culinary Showdown this weekend. The event will highlight local cuisine and raise funds for food-related charities.",
            "category": "Food & Drink",
            "tags": [
                "culinary",
                "competition",
                "chefs"
            ]
        }
    ]
}

let text = ""
let Info = document.getElementById("Info")

for (let i = 0; i < info.articles.length; i++) {
    const article = info.articles[i];

    text += `
    <div class="sections-info-information">
        <h3>${article.title}</h3>
        <p><strong>Author:</strong> ${article.author}</p>
        <p><strong>Date:</strong> ${article.date}</p>
        <p><strong>Category:</strong> ${article.category}</p>
        <p><strong>Content:</strong> ${article.content}</p>
        <p><strong>Tags:</strong> ${article.tags.join(", ")}</p>
    </div>
    `;
}

Info.innerHTML = text;