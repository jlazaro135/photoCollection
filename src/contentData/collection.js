
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
        Si te apetece conocer más a fondo a este crustáceo único en el mundo te dejo el siguiente enlace: 
        <a href="https://www3.gobiernodecanarias.org/medusa/wiki/index.php?title=Cangrejo_ciego#:~:text=El%20cangrejito%20ciego%20de%20los,blanco%2C%20ya%20que%20es%20albino." target="_blank">Cangrejo ciego de Lanzarote</a`,
        googlemap: 'https://goo.gl/maps/vFdoXxzBcsdUT8Kw8',
    },
    {
        id: 3,
        title: 'MTB La Graciosa',
        location: 'La Graciosa, España',
        src: 'lanzarote/lz-3.webp',
        alt: 'MTB-graciosa',
        description: `En esta isla no es posible moverse en vehículos a motor por cuenta propia, si quieres recorrerla tienes tres opciones: visitarla a pie, contratar una excursión en Jeep o alquilar una bicicleta. 
        La Graciosa cuenta con rincones que, probablemente, solo se pueda hacer escogiendo esta última opción, además cuenta con apacarmientos para bicicleta en los puntos interés y, por supuesto, sin necesidad de candado.`,
        googlemap: 'https://goo.gl/maps/Zv1Zw1PWS7zugpKP8',

    },
    {
        id: 4,
        title: 'Mirador del Río',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-4.webp',
        alt: 'mirador-rio',
        description: `En el norte de Lanzarote se elevan Los Riscos de Famara, con un desnivel máximo de 670 metros. 
        Es el mejor lugar para divisar el <a href="https://es.wikipedia.org/wiki/Archipi%C3%A9lago_Chinijo" target="_blank">Archipiélgao de Chinijo</a> o 
        'El Río', la estrecha franja de mar que separan las islas de Lanzarote y La Graciosa.`,
        googlemap: 'https://goo.gl/maps/p1nrQ83r4h9ZB7sK7',
    },
    {
        id: 5,
        title: 'Montaña Bermeja',
        location: 'La Graciosa, España',
        src: 'lanzarote/lz-5.webp',
        alt: 'montaña-bermeja',
        description: `Es una de las montañas más emblemáticas de La Graciosa, está situada en el extremo septentrional de la isla 
        y resalta especialemente de entre el paisaje de la isla por sus tonos cobrizos. El ascenso a esta montaña de unos 160 metros es casi obligatoria si visitas la isla,
        desde lo más alto se puede divisar prácticamente toda la isla y una vista única de las islas Montaña Clara, Roque del Oeste, Alegranza o Roque del Este, todas ellas, junto con La Graciosa, pertenecen al
        <a href="https://es.wikipedia.org/wiki/Archipi%C3%A9lago_Chinijo" target="_blank">Archipiélgao de Chinijo</a> .`,
        googlemap: 'https://goo.gl/maps/dRkmCoGviLdbBD8T9',
    },
    {
        id: 6,
        title: 'Playa de las Conchas',
        location: 'La Graciosa, España',
        src: 'lanzarote/lz-6.webp',
        alt: 'playa-concha',
        description: `Esta playa virgen se encuentra a los pies de Montaña Bermeja, en la isla de La Graciosa. Esta playa de aguas embravecidas embelesa por el color 
        turquesa de sus aguas, que pueden hacernos pensar que estamos en algún punto de la costa caribeña. `,
        googlemap: 'https://goo.gl/maps/H1TzRxmsTjt8S3mU8',
    },
    {
        id: 7,
        title: 'Puerto Pedro Barba',
        location: 'La Graciosa, España',
        src: 'lanzarote/lz-7.webp',
        alt: 'pedro-barba',
        description: `En La Graciosa solo existe dos núcleos urbanos: Caleta de Sebo y Pedro Barba.
        <br><br>
        Pedro Barba es como un espejismo en el desierto; cuenta con una veintena de casa bajas o casas terreras totalmente encaladas en blanco
        y con un pequeño puerto pero sin ningún tipo de actividad ni pistas de que en este lugar alguien haya decidido emprender su proyecto de vida. `,
        googlemap: 'https://goo.gl/maps/sutR8UP5n3NMKqTS7',
    },
    {
        id: 8,
        title: 'Caleta de Sebo',
        location: 'Caleta de Sebo, España',
        src: 'lanzarote/lz-8.webp',
        alt: 'caleta-sebo',
        description: `En La Graciosa solo existe dos núcleos urbanos: Caleta de Sebo y Pedro Barba.
        <br><br>
        Caleta de Sebo es el asentamiento donde se concentra la práctica totalidad de la población de la isla, unos 1000 habitantes. Otrora dedicados a las labores de la pesca, a día de hoy 
        está más atenta en granjear una estancia única al visitante. Como dato interesante, las estrellas de la bandera canaria representan las islas del archipiélago, que desde 2018 cuentan con una más al declarar a La Graciosa como 
        la octava isla de Canarias`,
        googlemap: 'https://goo.gl/maps/Fsp3aVavoPFMxYLBA',
    },
    {
        id: 9,
        title: 'Fanfarria canaria',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-9.webp',
        alt: 'fanfarria',
        description: `La música popular canaria tiene un gran arraigo y es el hilo conductor de los denomiados 'tenderetes', que es como se denomina a la fiesta popular
        de esta región. Cualquier sitio es bueno para armar una buena fiesta para interpretar Polcas o Isas canarias incluso en la cubierta de un ferry.`,
        googlemap: 'https://goo.gl/maps/DdbnNFMtCCk9rXch9',
    },
    {
        id: 10,
        title: 'Punta Fariones',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-10.webp',
        alt: 'fariones',
        description: `Vista desde 'El Río' de los imponentes Riscos de Famara, con Punta Fariones en primer plano. 
        <br><br>
        Se trata de un macizo de unos 23 km con una altitud comprendida entre los 400 y 600 metros y cuya génesis está ligada a un megadeslizamiento hace unos 10 millones de años`,
        googlemap: 'https://goo.gl/maps/fXMXcyRVbpdrYcHcA',
    },
    {
        id: 11,
        title: 'Géiser en Timanfaya',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-11.webp',
        alt: 'geiser',        
        description: `Entre los años 1730 y 1736 Lanzarote registró la mayor erupción registrada, lógicamente, de la que se recogen noticias y crónicas. Casi 300 años después, 
        aun se puede percibir la magnitud de este suceso. El Parque Nacional de Timanfaya es el escenario de la devastación producida por este fenómeno natural, que sepultó pueblos enteros y que cambió para siempre
        la morfología de la isla.
        <br><br>
        Uno de las consecuencias más llamativas de este proceso eruptivo está en las capas más superficiales del subsuelo, donde las temperaturas pueden llegar a alcanzar los 600 grados a tan solo 11 metros de profundidad, 
        lo que provoca que el agua introducida por tuberías salga de forma inmediata convertida en un chorro de vapor de agua junto con un potente estruendo ensordecedor.`,
        googlemap: 'https://goo.gl/maps/tnhyCPKbb6VpRfkp9',
    },
    {
        id: 12,
        title: 'Ceniza y Malvasía',
        location: 'La Geria, España',
        src: 'lanzarote/lz-12.webp',
        alt: 'malvasia',
        description: `El proceso eruptivo entre los años 1730-1736 arrasó gran parte de las tierras fértiles de la isla, sin embargo abrió la puerta para desarrollar otro tipo
        de cultivos, como la viticultura.
        <br><br>
        Gracias a la composición única del suelo y los vientos aliseos provinientes de África, Lanzarote puede presumir de ser productor de un tipo de vino e irrepetible en todo el mundo, siendo la uva Malvasía
        la protagonista de estos caldos.
        `,
        googlemap: 'https://goo.gl/maps/LEFV685CVcmjjdVg6',
    },
    // {
    //     id: 13,
    //     title: 'Las Grietas',
    //     location: 'Lanzarote, España',
    //     src: 'lanzarote/lz-13.webp',
    //     alt: 'grietas',
    //     description: `El proceso eruptivo entre los años 1730-1736 arrasó gran parte de las tierras fértiles de la isla, sin embargo abrió la puerta para desarrollar otro tipo
    //     de cultivos, como la viticultura.
    //     <br><br>
    //     Gracias a la composición única del suelo y los vientos aliseos provinientes de África, Lanzarote puede presumir de ser productor de un tipo de vino e irrepetible en todo el mundo, siendo la uva Malvasía
    //     la protagonista de estos caldos.
    //     `,
    //     googlemap: 'https://goo.gl/maps/LEFV685CVcmjjdVg6',
    // },
    {
        id: 14,
        title: 'Salinas de Janubio',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-14.webp',
        alt: 'salinas',
        description: `La Unión Europea lo declaró espacio natural protegido por su singular arquitectura y la complejidad de sus sistemas hidráulicos. Aun siguen en funcionamiento
        y representa la última de las salinas en activo en la isla.
        `,
        googlemap: 'https://goo.gl/maps/HDuN5tnJk1CBhfMD9',
    },
    {
        id: 15,
        title: 'Playa del Papagayo',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-15.webp',
        alt: 'papagayo',
        description: `La del Papagayo es una de las playas más reconocibles y recomendadas de toda la isla, pese a la dificultad de acceso. Además de disfrutar del baño o de actividades con buceo o snorkel, 
        la gente suele congregarse al atardecer para contemplar una de las puestas de sol más espectaculares del archipiélago canario.
        `,
        googlemap: 'https://goo.gl/maps/kBahwGaqeAru6u918',
    },
    // {
    //     id: 16,
    //     title: 'Atardecer conejero I',
    //     location: 'Lanzarote, España',
    //     src: 'lanzarote/lz-16.webp',
    //     alt: 'atardecer'
    // },
    {
        id: 17,
        title: 'Atardecer conejero',
        location: 'Playa del Papagayo, España',
        src: 'lanzarote/lz-17.webp',
        alt: 'atardecer-2',
        description: `Disfrutar del atardecer desde este punto de la isla es una actividad casi obligada. El entorno mayormente, árido y sin matices, cambia radicalmente y da 
        paso a una gama de tonalidades que, tan solo unos minutos antes, eran insospechables.
        `,
        googlemap: 'https://goo.gl/maps/kBahwGaqeAru6u918',
    },
    {
        id: 18,
        title: 'Libélula Roja',
        location: 'Fuerteventura, España',
        src: 'fuerteventura/lz-18.webp',
        alt: 'libelula',
        description: `Aparente momento de asueto de esta bonita libélula que se mostró muy colaborativa a la hora de ser retratada.
        `,
        googlemap: 'https://goo.gl/maps/t9WBxRPWns5H4Me78',
    },
    {
        id: 19,
        title: 'Corvus corax canariensis',
        location: 'Fuerteventura, España',
        src: 'fuerteventura/lz-19.webp',
        alt: 'cuervo',
        description: `La presencia del cuervo canario es muy notable a lo largo y ancho de la isla de Fuerteventura. En el <a href="https://es.wikipedia.org/wiki/Parque_rural_de_Betancuria" target="_blank">Parque Rural de Betancuria</a> incluso se aproximan
        de forma interesada a la gente, esperando la gratificación por mostrarse tan cercano porque, claro, ellos también aprovechan el tirón del turismo.`,
        googlemap: 'https://goo.gl/maps/t9WBxRPWns5H4Me78',
    },
    // {
    //     id: 20,
    //     title: 'Faro Punta Pesebre',
    //     location: 'Fuerteventura, España',
    //     src: 'fuerteventura/lz-20.webp',
    //     alt: 'pesebre'
    // },
    {
        id: 21,
        title: 'Golpe de mar',
        location: 'Fuerteventura, España',
        src: 'fuerteventura/lz-21.webp',
        alt: 'golpe',
        description: `En el extremo sur de la isla de Fuerteventura, en el Parque Natural de Jandía, el oceano golpea violentamente la costa dejando 
        su impronta en la orografía de la zona.`,
        googlemap: 'https://goo.gl/maps/iSoRb2SzdsZdiLK4A',
    },
    // {
    //     id: 22,
    //     title: 'Chilling',
    //     location: 'Fuerteventura, España',
    //     src: 'fuerteventura/lz-22.webp',
    //     alt: 'chilling'
    // },
    {
        id: 24,
        title: 'Jardín del Cactus',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-24.webp',
        alt: 'jardin-cactus',
        description: `Es la última gran obra de César Manrique, este jardín cuenta con más de 4.500 ejemplares procedentes de todo el mundo. Espectacular, pero hay que estar muy atentos 
        a donde se pisa...`,
        googlemap: 'https://goo.gl/maps/bCaB8bTuFr2kax6Y9',
    },
    {
        id: 25,
        title: 'Callejeando en Arrecife',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-25.webp',
        alt: 'arrecife',
        description: `Es la capital de la isla de Lanzarote, aunque fue hasta hace escasos siglos un lugar peligroso para desarrollarse como ciudad
        debido a la alta exposición a ataques e incursiones de piratas y saqueadores. El auge de la actividad comercial y el empuje del sector pesquero decantaron la capitalidad 
        de la isla en detrimento de Teguise, con quien libró la denominada 'Guerra Chica' y que resultó con la cesión del poder administrativo de la isla. 
        `,
        googlemap: 'https://goo.gl/maps/vodVB7SDw4y41HAY9',
    },
    // {
    //     id: 26,
    //     title: 'El Charco de Arrecife I',
    //     location: 'Lanzarote, España',
    //     src: 'lanzarote/lz-26.webp',
    //     alt: 'charco-arrecife'
    // },
    {
        id: 27,
        title: 'El Charco de Arrecife',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-27.webp',
        alt: 'charco-arrecife',
        description: `El charco de Arrecife es una pequeña zona de agua costera situada en la isla de Lanzarote, en las Islas Canarias. 
        Una de las características más destacables de este lugar es la presencia de pequeños barcos que flotan en sus aguas. 
        Estos barcos, típicos de la zona, son utilizados por los pescadores locales para practicar su oficio y también son una atracción turística muy popular. 
        `,
        googlemap: 'https://goo.gl/maps/u4gfdy5U5xywPTtz6',
    },
    {
        id: 28,
        title: 'Puente de Las Bolas',
        location: 'Lanzarote, España',
        src: 'lanzarote/lz-28.webp',
        alt: 'puente',
        description: `Puente que da acceso al Castillo de San Gabriel, en Arrecife. Toma ese nombre por las dos bolas que coronan cada columna. Su principal función era la de
        proteger de defensa ante los ataques de los piratas. Hoy días es un apacible lugar donde los lugareños paran a pescar o incluso la gente más joven usa como trampolín durante los meses de verano. 
        `,
        googlemap: 'https://goo.gl/maps/u4gfdy5U5xywPTtz6',
    },
]

export default COLLECTION;
