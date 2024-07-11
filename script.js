const recommendations = {
    english: {
        action: [
            { title: "Mad Max: Fury Road", year: 2015 },
            { title: "Die Hard", year: 1988 },
            { title: "The Dark Knight", year: 2008 },
            { title: "Gladiator", year: 2000 },
            { title: "Inception", year: 2010 }
        ],
        comedy: [
            { title: "The Big Lebowski", year: 1998 },
            { title: "Superbad", year: 2007 },
            { title: "Groundhog Day", year: 1993 },
            { title: "Anchorman: The Legend of Ron Burgundy", year: 2004 },
            { title: "Monty Python and the Holy Grail", year: 1975 }
        ],
        drama: [
            { title: "The Shawshank Redemption", year: 1994 },
            { title: "Forrest Gump", year: 1994 },
            { title: "Fight Club", year: 1999 },
            { title: "The Godfather", year: 1972 },
            { title: "12 Years a Slave", year: 2013 }
        ]
    },
    french: {
        action: [
            { title: "La Haine", year: 1995 },
            { title: "Léon: The Professional", year: 1994 },
            { title: "District B13", year: 2004 },
            { title: "The Connection", year: 2014 },
            { title: "Crimson Rivers", year: 2000 }
        ],
        comedy: [
            { title: "Amélie", year: 2001 },
            { title: "The Intouchables", year: 2011 },
            { title: "Bienvenue chez les Ch'tis", year: 2008 },
            { title: "OSS 117: Cairo, Nest of Spies", year: 2006 },
            { title: "La Cage aux Folles", year: 1978 }
        ],
        drama: [
            { title: "Blue Is the Warmest Color", year: 2013 },
            { title: "The Diving Bell and the Butterfly", year: 2007 },
            { title: "The Beat That My Heart Skipped", year: 2005 },
            { title: "Rust and Bone", year: 2012 },
            { title: "A Prophet", year: 2009 }
        ]
    },
    spanish: {
        action: [
            { title: "Pan's Labyrinth", year: 2006 },
            { title: "The Secret in Their Eyes", year: 2009 },
            { title: "El Mariachi", year: 1992 },
            { title: "The Hidden Face", year: 2011 },
            { title: "Cell 211", year: 2009 }
        ],
        comedy: [
            { title: "Y Tu Mamá También", year: 2001 },
            { title: "Volver", year: 2006 },
            { title: "Women on the Verge of a Nervous Breakdown", year: 1988 },
            { title: "The Flower of My Secret", year: 1995 },
            { title: "Ocho apellidos vascos", year: 2014 }
        ],
        drama: [
            { title: "Talk to Her", year: 2002 },
            { title: "The Sea Inside", year: 2004 },
            { title: "Wild Tales", year: 2014 },
            { title: "Pain and Glory", year: 2019 },
            { title: "The Motorcycle Diaries", year: 2004 }
        ]
    }
};

function generateRecommendation() {
    const language = document.getElementById('language').value;
    const genre = document.getElementById('genre').value;
    const recommendationBox = document.getElementById('recommendation');
    
    const movies = recommendations[language][genre];
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    
    recommendationBox.innerHTML = `<div class="recommendation">
        <h2>${randomMovie.title}</h2>
        <p>Year: ${randomMovie.year}</p>
    </div>`;
}
