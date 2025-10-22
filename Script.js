// Datos de los televisores
const televisores = [
    {
        imagen: 'rolex.webp',
        titulo: 'Rolex Cosmograph Daytona',
        descripcion: 'Oyster, 40 mm, acero Oystersteel',
        precio: '$17,650.00 USD',
        link: 'https://rolex.ultrajewels.com/cosmograph-daytona-m126500ln-0001'
    },
    {
        imagen: 'patek.jpg',
        titulo: 'Patek Philip',
        descripcion: 'reloj Aquanaut de 40mm 2008 pre-owned',
        precio: '$1,518,151 USD',
        link: 'https://www.farfetch.com/mx/shopping/men/patek-philippe-reloj-aquanaut-de-40mm-2008-pre-owned-item-22904294.aspx'
    },
    {
        imagen: 'Richard.avif',
        titulo: 'Richard Mille',
        descripcion: 'CALIBRE RM17-01 Tourbillon de cuerda manual',
        precio: ' $750,000 USD',
        link: 'https://www.richardmille.com/es/colecciones/rm-17-01-tourbillon'
    },
    {
        imagen: 'piguet.jpeg',
        titulo: 'Audemars Piguet',
        descripcion: ' Royal Oak Tourbillon Volante Edición especial Ref. 26730BA.OO.1320BA.01',
        precio: '$5,000,000 SUSD',
        link: 'https://www.audemarspiguet.com/com/es/watch-collection/royal-oak/26730BA.OO.1320BA.01.html'
    }
];

// Función para crear las tarjetas de los televisores
function crearCatalogo() {
    const catalogo = document.getElementById('catalogo');

    televisores.forEach(tv => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${tv.imagen}" alt="${tv.titulo}">
            <h2>${tv.titulo}</h2>
            <p>${tv.descripcion}</p>
            <p class="price">${tv.precio}</p>
            <a href="${tv.link}" target="_blank">
                <button>Comprar</button>
            </a>
        `;

        catalogo.appendChild(card);
    });
}

// Llamar a la función para crear el catálogo
crearCatalogo();// Datos de los televisores
const televisores = [
    {
        imagen: 'rolex.webp',
        titulo: 'Rolex Cosmograph Daytona',
        descripcion: 'Oyster, 40 mm, acero Oystersteel',
        precio: '$17,650.00 USD',
        link: 'https://rolex.ultrajewels.com/cosmograph-daytona-m126500ln-0001'
    },
    {
        imagen: 'patek.jpg',
        titulo: 'Patek Philip',
        descripcion: 'reloj Aquanaut de 40mm 2008 pre-owned',
        precio: '$1,518,151 USD',
        link: 'https://www.farfetch.com/mx/shopping/men/patek-philippe-reloj-aquanaut-de-40mm-2008-pre-owned-item-22904294.aspx'
    },
    {
        imagen: 'Richard.avif',
        titulo: 'Richard Mille',
        descripcion: 'CALIBRE RM17-01 Tourbillon de cuerda manual',
        precio: ' $750,000 USD',
        link: 'https://www.richardmille.com/es/colecciones/rm-17-01-tourbillon'
    },
    {
        imagen: 'piguet.jpeg',
        titulo: 'Audemars Piguet',
        descripcion: ' Royal Oak Tourbillon Volante Edición especial Ref. 26730BA.OO.1320BA.01',
        precio: '$5,000,000 SUSD',
        link: 'https://www.audemarspiguet.com/com/es/watch-collection/royal-oak/26730BA.OO.1320BA.01.html'
    }
];

// Función para crear las tarjetas de los televisores
function crearCatalogo() {
    const catalogo = document.getElementById('catalogo');

    televisores.forEach(tv => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${tv.imagen}" alt="${tv.titulo}">
            <h2>${tv.titulo}</h2>
            <p>${tv.descripcion}</p>
            <p class="price">${tv.precio}</p>
            <a href="${tv.link}" target="_blank">
                <button>Comprar</button>
            </a>
        `;

        catalogo.appendChild(card);
    });
}

// Llamar a la función para crear el catálogo
crearCatalogo();
