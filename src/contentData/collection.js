
const COLLECTION = [
    {
        id: 1,
        title: 'Entrada Jameos del Agua',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-1.webp',
        alt: 'jameos-agua',
        description: `Los Jameos son oquedades que existen en un túnel volcánico de 6 km situado en el norte de la isla de Lanzarote, 
        con dirección este-oeste. El más representativo son los Jameos del Agua por la adaptación como centro artístico 
        y cultural de la mano del artista y arquitecto local César Manrique, siendo posiblemente una de sus obras más 
        representativas para visitar en la isla.
        <br><br>
        El cáctus está muy presente en la obra de Manrique y ya en la entrada a este espacio se puede disfrutar de algunos ejemplares`,
        googlemap: 'https://goo.gl/maps/vFdoXxzBcsdUT8Kw8',
    },
    {
        id: 2,
        title: 'Jameo Grande',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-2.webp',
        alt: 'jameos-agua',
        description: `El Jameo Grande es el principal atractivo de Los Jameos del Agua. En el interior hay un lago en el que habitan los famosos cangrejos 
        ciegos o 'jameitos'. Se da la circunstancia de que solo vive en este lugar, lo que le ha convertido en un símbolo de Lanzarote.
        <br><br>
        Si te apetece conocer más a fondo a este crustáceo único en el mundo te dejo el siguiente enlace: <a href="https://www3.gobiernodecanarias.org/medusa/wiki/index.php?title=Cangrejo_ciego#:~:text=El%20cangrejito%20ciego%20de%20los,blanco%2C%20ya%20que%20es%20albino." target="_blank">Cangrejo ciego de Lanzarote</a`,
        googlemap: 'https://goo.gl/maps/vFdoXxzBcsdUT8Kw8',
    },
    {
        id: 3,
        title: 'MTB La Graciosa',
        location: 'La Graciosa, España',
        src: 'lanzarote/lz-3.webp',
        alt: 'MTB-graciosa'
    },
    {
        id: 4,
        title: 'Mirador del Río',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-4.webp',
        alt: 'mirador-rio'
    },
    {
        id: 5,
        title: 'Montaña Bermeja',
        location: 'La Graciosa, España',
        src: 'lanzarote/lz-5.webp',
        alt: 'montaña-bermeja'
    },
    {
        id: 6,
        title: 'Playa de la Concha',
        location: 'La Graciosa, España',
        src: 'lanzarote/lz-6.webp',
        alt: 'playa-concha'
    },
    {
        id: 7,
        title: 'Puerto Pedro Barba',
        location: 'La Graciosa, España',
        src: 'lanzarote/lz-7.webp',
        alt: 'pedro-barba'
    },
    {
        id: 8,
        title: 'Caleta de Sebo',
        location: 'La Graciosa, España',
        src: 'lanzarote/lz-8.webp',
        alt: 'caleta-sebo'
    },
    {
        id: 9,
        title: 'Fanfarria canaria',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-9.webp',
        alt: 'fanfarria'
    },
    {
        id: 10,
        title: 'Punta Fariones',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-10.webp',
        alt: 'fariones'
    },
    {
        id: 11,
        title: 'Géiser en Timanfaya',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-11.webp',
        alt: 'geiser'
    },
    {
        id: 12,
        title: 'Ceniza y Malvasía',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-12.webp',
        alt: 'malvasia'
    },
    {
        id: 13,
        title: 'Las Grietas',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-13.webp',
        alt: 'grietas'
    },
    {
        id: 14,
        title: 'Salinas de Janubio',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-14.webp',
        alt: 'salinas'
    },
    {
        id: 15,
        title: 'Playa del Papagayo',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-15.webp',
        alt: 'papagayo'
    },
    {
        id: 16,
        title: 'Atardecer conejero I',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-16.webp',
        alt: 'atardecer'
    },
    {
        id: 17,
        title: 'Atardecer conejero II',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-17.webp',
        alt: 'atardecer-2'
    },
    {
        id: 18,
        title: 'Libélula Roja',
        location: 'Fuerteventura, España',
        src: 'fuerteventura/lz-18.webp',
        alt: 'libelula'
    },
    {
        id: 19,
        title: 'Corvus corax canariensis',
        location: 'Fuerteventura, España',
        src: 'fuerteventura/lz-19.webp',
        alt: 'cuervo'
    },
    {
        id: 20,
        title: 'Faro Punta Pesebre',
        location: 'Fuerteventura, España',
        src: 'fuerteventura/lz-20.webp',
        alt: 'pesebre'
    },
    {
        id: 21,
        title: 'Golpe de mar',
        location: 'Fuerteventura, España',
        src: 'fuerteventura/lz-21.webp',
        alt: 'golpe'
    },
    {
        id: 22,
        title: 'Chilling',
        location: 'Fuerteventura, España',
        src: 'fuerteventura/lz-22.webp',
        alt: 'chilling'
    },
    {
        id: 24,
        title: 'Jardín del Cactus',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-24.webp',
        alt: 'jardin-cactus'
    },
    {
        id: 25,
        title: 'Callejeando en Arrecife',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-25.webp',
        alt: 'arrecife'
    },
    {
        id: 26,
        title: 'El Charco de Arrecife I',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-26.webp',
        alt: 'charco-arrecife'
    },
    {
        id: 27,
        title: 'El Charco de Arrecife II',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-27.webp',
        alt: 'charco-arrecife'
    },
    {
        id: 28,
        title: 'Puente de Las Bolas',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-28.webp',
        alt: 'puente'
    },
]

export default COLLECTION;
