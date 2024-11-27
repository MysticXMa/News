const info = {
    "articles": [
        {
            "id": "20230416-001",
            "title": "Community Garden Project Receives Grant for Expansion",
            "date": "2023-04-16",
            "img": "https://th.bing.com/th/id/R.2b63b80e2a8df0787e78a10e548c74b6?rik=I3lV1O%2fUPm4jrQ&riu=http%3a%2f%2fcityofpowell.us%2fwp-content%2fuploads%2f2015%2f07%2fFullSizeRender.jpg&ehk=hWQ7RHQh4dEuCRBSdQkWW1QQiBhwB7TMZq8NDf3aQAo%3d&risl=&pid=ImgRaw&r=0",
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
            "img": "https://as1.ftcdn.net/v2/jpg/06/86/06/08/1000_F_686060877_JgN0DD9ycvsv4AV0xieFyubSzRhpt6V4.jpg",
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
            "img": "https://www.ebayinc.com/assets/Uploads/sanjoseamplify.jpg",
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
            "img": "https://th.bing.com/th/id/OIP.JUe1kq1k2YPaxDjw_NvAuwHaE8?rs=1&pid=ImgDetMain",
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
            "img": "https://th.bing.com/th/id/OIP.CaIA0xIItkA2MRs6-oAoSgHaE8?rs=1&pid=ImgDetMain",
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
            "img": "https://images.axios.com/3vJ1TvWpWdvHOSwCRlv-oMA7vRI=/0x0:1280x720/1920x1080/2022/10/21/1666379012460.jpg?w=1920",
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
            "img": "https://th.bing.com/th/id/OIP.Nt5d2zc5yNSD-RaA_SRV7wHaEK?rs=1&pid=ImgDetMain",
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
            "img": "https://th.bing.com/th/id/OIP.2wnxSJTrnNf82a-7ApqP3gHaE7?rs=1&pid=ImgDetMain",
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
            "img": "https://th.bing.com/th/id/OIP.xpDlVP2__O7nhnhPGopUhgAAAA?rs=1&pid=ImgDetMain",
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
            "img": "https://www.bmcaterers.co.uk/wp-content/uploads/2020/09/5_Foodies.jpg",
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
    <div onclick="putData('${article.id}')" id="${article.id}" class="section-information">
        <p class="title">${article.title}, ${article.category}</p>
    </div>
    `;
}

function putData(ID) {
    console.log(`Received ID: ${ID}`);
    let text2 = '';
    let Info2 = document.getElementById("Info2")

    const sectionMainFrame = document.querySelector('.section-main-frame');
    const sectionInformation2 = document.querySelector('.section-info');

    for (let i = 0; i < info.articles.length; i++) {
        const article = info.articles[i];
        const d = new Date(article.date);
        const p = d.getDate();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const y = d.getFullYear();
        const Fulldate = `${y}.${m}.${p}`;

        if (ID === article.id) {
            sectionMainFrame.style.backgroundColor = '#F3F3F3';
            sectionInformation2.classList.add('section-info2')
            sectionMainFrame.classList.add('section-main-frame2')
            text2 = `
                <div id="${article.id}" class="sections-main-info">
                    <p class="section-main-frame-post">Posted by: ${article.author} | ${Fulldate}</p>
                    <p class="section-main-frame-title">${article.title}</p><br>
                    <div class="section-main-frame-line1"></div><br>
                    <div class="section-main-frame-div">
                        <div class="section-main-frame-content">
                            <p class="section-main-frame-info">${article.content}</p>
                            <div class="section-main-frame-line1"></div>
                            <p class="section-main-frame-tags">${article.tags.join(", ")}</p>
                        </div>
                        <div class="section-main-frame-image">
                          <img class="section-main-frame-photo" src="${article.img}" alt="${article.id}">  
                        </div>
                    </div>
                </div>
            `;
            setTimeout(() => {
                sectionMainFrame.classList.remove('section-main-frame2')
                sectionInformation2.classList.remove('section-info2')
            }, 1000)
            break;
        }
    }

    if (text2 === '') {
        console.log("Error: No article found with the provided ID.");
        text2 = `<p>Error: No article found with the provided ID.</p>`;
    }

    Info2.innerHTML = text2;
}

Info.innerHTML = text;