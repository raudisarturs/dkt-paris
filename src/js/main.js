// DKT Paris — multilingual EN / FR / RU + existing interactions

const translations = {
  en: {
    nav:{services:"Services",vehicles:"Vehicles",gallery:"Gallery",about:"About",contact:"Contact",book:"Book Now"},
    servicesPage:{
title:"Our Services",subtitle:"Private transportation, chauffeur service, guides and tailor-made journeys across France, Belgium and Europe.",introTitle:"More than a transfer.",introText:"DKT Paris combines premium vehicles, professional chauffeurs and trusted local guides to create seamless private journeys — from a single airport pickup to multi-country European itineraries.",
airport:{title:"Airport Pickup & Transfers",text:"Seamless pickups from CDG, Orly and Beauvais with live flight tracking and professional meet-and-greet service."},
tours:{title:"Custom City Tours",text:"Private Paris sightseeing built around your pace, interests and schedule, with luxury transportation throughout the day."},
vtc:{title:"Private VTC & Chauffeur",text:"By-the-hour, half-day or full-day chauffeur service in our premium fleet for business, leisure and VIP travel."},
shopping:{title:"Shopping Trips",text:"Private transport for fashion districts, Champs-Élysées, luxury boutiques, outlets and dedicated shopping itineraries."},
international:{title:"Multi-Country Europe Trips",text:"Private long-distance journeys across France, neighboring European countries, Italy and other destinations by request."},
events:{title:"Weddings & Special Events",text:"Elegant chauffeur and fleet coordination for weddings, celebrations, galas, corporate events and VIP occasions."},
relocation:{title:"Relocation Services",text:"Private transport support for moves, extended stays and transition journeys across Paris and beyond."},
guides:{title:"Private Guides in France & Belgium",text:"Local guide experiences in France and Belgium, combined with private chauffeur transport and flexible itineraries."},
europe:{title:"Custom European Journeys",text:"Multi-day and multi-stop itineraries designed around your route, hotel schedule, sightseeing plans and preferred pace."},
request:"Request This Service",europeTitle:"One journey. Multiple countries.",europeText:"Need to travel beyond Paris? We can arrange private, long-distance transportation across France and into neighboring European destinations, including Italy and other countries according to your itinerary.",europePoint1:"Multi-city and multi-country routes",europePoint2:"Multi-day private travel",europePoint3:"Hotel-to-hotel transportation",europePoint4:"Chauffeur-led private itineraries",planTrip:"Plan a European Journey",guidesTitle:"France & Belgium, with a local perspective.",guidesText:"For sightseeing and cultural days, DKT Paris can combine private transportation with guides in France and Belgium, giving you a more personal way to explore cities, landmarks and regions.",guideTag:"Private Itineraries",ctaTitle:"Tell us where you want to go.",ctaText:"Send us your dates, route and preferences. We will build the transportation around your journey."},
    vehiclesPage:{title:"Our Luxury Fleet",subtitle:"Premium vehicles selected for comfort, privacy and effortless travel across Paris and France.",introTitle:"Travel in Comfort. Arrive in Style.",introText:"From airport arrivals to full-day private itineraries, our vehicles are prepared for discreet, comfortable and professional journeys.",mercedesGallery:"Mercedes Collection",mercedesGalleryText:"A complete look at the Mercedes vehicles and their premium details.",toyotaGallery:"Toyota Collection",toyotaGalleryText:"Seven views of the Toyota Proace, ready for private group travel.",proaceGroup:"Ideal for private groups",proaceLuggage:"Generous luggage space",proacePrivacy:"Professional & discreet",proaceTravel:"Comfortable long-distance travel",ctaTitle:"Ready to travel?",ctaText:"Tell us your route, date and preferred vehicle. We will take care of the rest."},galleryPage:{title:"Recent Gallery",subtitle:"A closer look at our vehicles, interiors and the DKT Paris experience.",introTitle:"Luxury, in the details.",introText:"Browse the latest DKT Paris photography. Select any image to view it full screen.",all:"All",mercedes:"Mercedes",toyota:"Toyota",ctaTitle:"See the fleet in person.",ctaText:"Choose your vehicle and request a private booking.",ctaButton:"Explore Our Fleet"},
    vehiclesPage:{title:"Our Luxury Fleet",subtitle:"Premium vehicles selected for comfort, privacy and effortless travel across Paris and France.",introTitle:"Travel in Comfort. Arrive in Style.",introText:"From airport arrivals to full-day private itineraries, our vehicles are prepared for discreet, comfortable and professional journeys.",vclassAlt:"A refined cabin for executive travel, family arrivals and private Paris itineraries.",vclassAlt2:"A discreet and spacious option for longer journeys across France and Europe.",ctaTitle:"Ready to travel?",ctaText:"Tell us your route, date and preferred vehicle. We will take care of the rest."},galleryPage:{title:"Recent Gallery",subtitle:"A closer look at our vehicles, interiors and the DKT Paris experience.",introTitle:"Luxury, in the details.",introText:"Browse the latest images from the DKT Paris fleet. Select any image to view it full screen.",ctaTitle:"See the fleet in person.",ctaText:"Choose your vehicle and request a private booking.",ctaButton:"Explore Our Fleet"},    trust:{airport:"Airport Pickup",flight:"Flight Tracking",languages:"Multilingual Drivers",vehicles:"Premium Vehicles"},
    hero:{badge:"VTC & Exclusive Concierge",titlePrefix:"Private Chauffeur & Luxury Transfers in",titleAccent:"Paris",subtitle:"Airport transfers, private tours and premium chauffeur services across Paris, France and beyond.",book:"Book Your Chauffeur",whatsapp:"WhatsApp Us"},
    services:{title:"Bespoke Services",subtitle:"Private transportation, chauffeur service, guides and tailor-made journeys across France, Belgium and Europe.",
airport:{title:"Airport Pickup & Transfers",text:"Seamless transfers from CDG, Orly, and Beauvais with live flight tracking."},
tours:{title:"Custom City Tours",text:"Explore Parisian landmarks in luxury, guided by private local experts."},
vtc:{title:"Private VTC & Chauffeur",text:"High-end Mercedes and luxury vehicle service for private travel, business and VIP journeys."},
shopping:{title:"Shopping Trips",text:"VIP transport to fashion districts, avenue des Champs-Élysées, luxury boutiques and outlets."},
international:{title:"Multi-Country Europe Trips",text:"Private long-distance journeys across France, neighboring European countries, Italy and other destinations by request."},
events:{title:"Weddings & Special Events",text:"Elegant chauffeur and fleet coordination for weddings, celebrations, galas and VIP occasions."},
relocation:{title:"Relocation Services",text:"Private transport support for moves, extended stays and transition journeys across Paris and beyond."},
guides:{title:"Private Guides in France & Belgium",text:"Local guides and private itineraries in France and Belgium, from major cities to countryside escapes."}},
    about:{title:"Experience Excellence",text:"At <strong>DKT Paris</strong>, we set the standard for private passenger transport and luxury tours across France. Whether traveling for business, pleasure, or special occasions, our professional multilingual drivers ensure safety, discretion, and ultimate comfort.",license:"Official Registered License:"},
    vehicles:{browseAll:"Browse All Vehicles",browseTitle:"Browse Our Fleet",browseSubtitle:"Explore every vehicle currently available for private transfers and chauffeur service.",title:"Our Fleet",subtitle:"Premium Mercedes and Toyota vehicles tailored for executive comfort, airport transfers, and private group travel.",popular:"Most Popular",book:"Book This Vehicle",vclass:{category:"Luxury Van / Minivan",description:"Our signature vehicle for airport transfers, private tours, business travel and VIP groups.",passengers:"Up to 7 passengers",passengersSub:"Spacious private travel",luggage:"Large luggage capacity",luggageSub:"Ideal for airport journeys",privacy:"Privacy & discretion",privacySub:"Professional chauffeur service",comfort:"Premium comfort",comfortSub:"Climate-controlled cabin",note:"Perfect for airport transfers & private groups"},proace:{category:"Minivan",description:"A practical premium option for private groups and comfortable transfers.",cta:"Book Toyota Proace"}},
    contact:{title:"Get In Touch",subtitle:"Reserve your vehicle or inquire about custom itineraries directly.",primary:"Primary Contact (FR | EN | RU)",secondary:"Secondary Line (FR | RU)",email:"Email Enquiries"},
    modal:{title:"Reserve Your Trip",subtitle:"Fill out your details to request an instant quote via WhatsApp or Email."},
    form:{name:"Full Name *",namePlaceholder:"John Doe",phone:"Phone Number *",service:"Service Type *",airport:"Airport Transfer",city:"City Tour",vtc:"Private VTC Chauffeur",shopping:"Shopping Trip",events:"Weddings / Events",international:"Multi-Country Europe Trip",custom:"Other / Custom Request (Write Below)",vehicle:"Select Vehicle *",noPreference:"No Preference / Flexible",vclass:"Mercedes-Benz V-Class (Luxury Van)",proace:"Toyota Proace (Minivan)",detailsLabel:"Custom Request / Additional Details",detailsPlaceholder:"Describe your destination, custom route, or special needs...",datetime:"Date & Time *",submit:"Send Booking Request"},
    lightbox:{alt:"Enlarged Vehicle Image"},
    footer:"© 2026 DKT Paris. All rights reserved. Registered Tour Agent & VTC Provider."
  },
  fr: {
    nav:{services:"Services",vehicles:"Véhicules",gallery:"Galerie",about:"À propos",contact:"Contact",book:"Réserver"},
    servicesPage:{
title:"Nos Services",subtitle:"Transport privé, chauffeur, guides et voyages sur mesure en France, en Belgique et en Europe.",introTitle:"Bien plus qu'un transfert.",introText:"DKT Paris associe véhicules premium, chauffeurs professionnels et guides locaux de confiance pour créer des voyages privés fluides — d'un simple transfert aéroport à un itinéraire européen multi-pays.",
airport:{title:"Accueil & Transferts Aéroport",text:"Prise en charge fluide depuis CDG, Orly et Beauvais avec suivi des vols et accueil professionnel."},
tours:{title:"Visites Privées sur Mesure",text:"Visites privées de Paris adaptées à votre rythme, vos envies et votre emploi du temps, avec transport haut de gamme."},
vtc:{title:"VTC Privé & Chauffeur",text:"Mise à disposition à l'heure, demi-journée ou journée complète pour vos déplacements professionnels, loisirs et VIP."},
shopping:{title:"Shopping",text:"Transport privé vers les quartiers de la mode, les Champs-Élysées, boutiques de luxe, outlets et itinéraires shopping."},
international:{title:"Voyages Multi-Pays en Europe",text:"Voyages privés longue distance en France, dans les pays voisins, en Italie et vers d'autres destinations sur demande."},
events:{title:"Mariages & Événements",text:"Chauffeur et coordination de flotte élégants pour mariages, célébrations, galas, événements d'entreprise et occasions VIP."},
relocation:{title:"Services de Relocation",text:"Solutions de transport privées pour déménagements, séjours prolongés et déplacements de transition à Paris et au-delà."},
guides:{title:"Guides Privés en France & Belgique",text:"Expériences avec des guides locaux en France et en Belgique, combinées à un transport privé et des itinéraires flexibles."},
europe:{title:"Voyages Européens sur Mesure",text:"Itinéraires multi-jours et multi-étapes conçus autour de votre trajet, hôtels, visites et rythme préféré."},
request:"Demander ce service",europeTitle:"Un voyage. Plusieurs pays.",europeText:"Vous souhaitez aller au-delà de Paris ? Nous pouvons organiser des transports privés longue distance en France et vers les destinations européennes voisines, notamment l'Italie, selon votre itinéraire.",europePoint1:"Itinéraires multi-villes et multi-pays",europePoint2:"Voyages privés sur plusieurs jours",europePoint3:"Transport d'hôtel à hôtel",europePoint4:"Itinéraires privés avec chauffeur",planTrip:"Planifier un voyage européen",guidesTitle:"France & Belgique, avec un regard local.",guidesText:"Pour vos journées de découverte et de culture, DKT Paris peut associer transport privé et guides en France et en Belgique pour explorer les villes, monuments et régions de façon plus personnelle.",guideTag:"Itinéraires privés",ctaTitle:"Dites-nous où vous souhaitez aller.",ctaText:"Envoyez-nous vos dates, votre itinéraire et vos préférences. Nous construirons le transport autour de votre voyage."},
    vehiclesPage:{title:"Notre Flotte de Luxe",subtitle:"Des véhicules premium sélectionnés pour le confort, la discrétion et des déplacements sans effort à Paris et en France.",introTitle:"Voyagez confortablement. Arrivez avec élégance.",introText:"De l’arrivée à l’aéroport aux itinéraires privés à la journée, nos véhicules sont préparés pour des trajets discrets, confortables et professionnels.",mercedesGallery:"Collection Mercedes",mercedesGalleryText:"Découvrez les véhicules Mercedes et leurs détails premium.",toyotaGallery:"Collection Toyota",toyotaGalleryText:"Sept vues du Toyota Proace, prêt pour les déplacements de groupes privés.",proaceGroup:"Idéal pour les groupes privés",proaceLuggage:"Grande capacité de bagages",proacePrivacy:"Professionnel & discret",proaceTravel:"Confortable sur longue distance",ctaTitle:"Prêt à voyager ?",ctaText:"Indiquez-nous votre itinéraire, votre date et votre véhicule préféré. Nous nous occupons du reste."},galleryPage:{title:"Galerie Récente",subtitle:"Découvrez nos véhicules, leurs intérieurs et l’expérience DKT Paris.",introTitle:"Le luxe dans les détails.",introText:"Parcourez les dernières photos DKT Paris. Sélectionnez une image pour l’afficher en plein écran.",all:"Tout",mercedes:"Mercedes",toyota:"Toyota",ctaTitle:"Découvrez la flotte.",ctaText:"Choisissez votre véhicule et demandez une réservation privée.",ctaButton:"Découvrir la Flotte"},
    vehiclesPage:{title:"Notre Flotte de Luxe",subtitle:"Des véhicules premium sélectionnés pour le confort, la discrétion et des déplacements sans effort à Paris et en France.",introTitle:"Voyagez confortablement. Arrivez avec élégance.",introText:"De l'arrivée à l'aéroport aux itinéraires privés à la journée, nos véhicules sont préparés pour des trajets discrets, confortables et professionnels.",vclassAlt:"Un habitacle raffiné pour les voyages d'affaires, les arrivées en famille et les itinéraires privés à Paris.",vclassAlt2:"Une solution discrète et spacieuse pour les longs trajets en France et en Europe.",ctaTitle:"Prêt à voyager ?",ctaText:"Indiquez-nous votre itinéraire, votre date et votre véhicule préféré. Nous nous occupons du reste."},galleryPage:{title:"Galerie Récente",subtitle:"Découvrez nos véhicules, leurs intérieurs et l'expérience DKT Paris.",introTitle:"Le luxe dans les détails.",introText:"Parcourez les dernières images de la flotte DKT Paris. Sélectionnez une image pour l'afficher en plein écran.",ctaTitle:"Découvrez la flotte.",ctaText:"Choisissez votre véhicule et demandez une réservation privée.",ctaButton:"Découvrir la Flotte"},    trust:{airport:"Accueil aéroport",flight:"Suivi des vols",languages:"Chauffeurs multilingues",vehicles:"Véhicules premium"},
    hero:{badge:"VTC & Conciergerie Exclusive",titlePrefix:"Chauffeur privé & transferts de luxe à",titleAccent:"Paris",subtitle:"Transferts aéroport, visites privées et services de chauffeur premium à Paris, en France et au-delà.",book:"Réserver votre chauffeur",whatsapp:"WhatsApp direct"},
    services:{title:"Services Sur Mesure",subtitle:"Des solutions de transport et de conciergerie adaptées à votre emploi du temps.",
      airport:{title:"Accueil & Transferts Aéroport",text:"Transferts fluides depuis CDG, Orly et Beauvais avec suivi des vols en temps réel."},
      tours:{title:"Visites Privées de Paris",text:"Découvrez les monuments parisiens dans le luxe, accompagné par des experts locaux privés."},
      vtc:{title:"VTC Privé & Chauffeur",text:"Mise à disposition à l'heure ou à la journée en Mercedes haut de gamme et véhicules de luxe."},
      shopping:{title:"Shopping",text:"Transport VIP vers les quartiers de la mode, les Champs-Élysées et les outlets."},
      international:{title:"Voyages Internationaux",text:"Voyages longue distance et trajets transfrontaliers de luxe à travers l'Europe."},
      events:{title:"Mariages & Événements",text:"Gestion élégante de flotte pour mariages, galas et célébrations VIP."},
      relocation:{title:"Services de Relocation",text:"Assistance complète pour vos déménagements et déplacements à travers Paris."},
      guides:{title:"Guides à Travers la France",text:"Itinéraires dédiés en campagne française, Normandie, Côte d'Azur et plus."}},
    about:{title:"L'Excellence DKT Paris",text:"Chez <strong>DKT Paris</strong>, nous établissons une référence en matière de transport privé et de visites de luxe en France. Pour vos voyages professionnels, loisirs ou événements, nos chauffeurs multilingues garantissent sécurité, discrétion et confort absolu.",license:"Licence officielle enregistrée :"},
    vehicles:{browseAll:"Voir tous les véhicules",browseTitle:"Notre Flotte",browseSubtitle:"Découvrez tous les véhicules actuellement disponibles pour les transferts privés et le service de chauffeur.",title:"Notre Flotte",subtitle:"Des véhicules Mercedes et Toyota premium pensés pour le confort exécutif, les transferts aéroport et les déplacements de groupes privés.",popular:"Le plus populaire",book:"Réserver ce véhicule",vclass:{category:"Van / Minivan de luxe",description:"Notre véhicule signature pour les transferts aéroport, visites privées, voyages d'affaires et groupes VIP.",passengers:"Jusqu'à 7 passagers",passengersSub:"Voyage privé et spacieux",luggage:"Grande capacité de bagages",luggageSub:"Idéal pour les trajets aéroport",privacy:"Intimité & discrétion",privacySub:"Service de chauffeur professionnel",comfort:"Confort premium",comfortSub:"Habitacle climatisé",note:"Idéal pour les transferts aéroport & groupes privés"},proace:{category:"Minivan",description:"Une option premium pratique pour les groupes privés et les transferts confortables.",cta:"Réserver Toyota Proace"}},
    contact:{title:"Nous Contacter",subtitle:"Réservez votre véhicule ou demandez directement un itinéraire personnalisé.",primary:"Contact principal (FR | EN | RU)",secondary:"Ligne secondaire (FR | RU)",email:"Demandes par e-mail"},
    modal:{title:"Réserver votre trajet",subtitle:"Remplissez vos coordonnées pour demander un devis instantané par WhatsApp ou e-mail."},
    form:{name:"Nom complet *",namePlaceholder:"Jean Dupont",phone:"Numéro de téléphone *",service:"Type de service *",airport:"Transfert aéroport",city:"Visite de Paris",vtc:"VTC privé avec chauffeur",shopping:"Shopping",events:"Mariages / Événements",international:"Voyage multi-pays en Europe",custom:"Autre / Demande personnalisée (à préciser ci-dessous)",vehicle:"Choisir un véhicule *",noPreference:"Aucune préférence / Flexible",vclass:"Mercedes-Benz Classe V (Van de luxe)",proace:"Toyota Proace (Minivan)",detailsLabel:"Demande personnalisée / Informations complémentaires",detailsPlaceholder:"Décrivez votre destination, itinéraire personnalisé ou besoins particuliers...",datetime:"Date & Heure *",submit:"Envoyer la demande"},
    lightbox:{alt:"Photo du véhicule agrandie"},
    footer:"© 2026 DKT Paris. Tous droits réservés. Agence de tourisme enregistrée & prestataire VTC."
  },
  ru: {
    nav:{services:"Услуги",vehicles:"Автомобили",gallery:"Галерея",about:"О нас",contact:"Контакты",book:"Забронировать"},
    servicesPage:{
title:"Наши услуги",subtitle:"Частный транспорт, услуги водителя, гиды и индивидуальные поездки по Франции, Бельгии и Европе.",introTitle:"Больше, чем трансфер.",introText:"DKT Paris объединяет премиальные автомобили, профессиональных водителей и проверенных местных гидов, создавая комфортные частные поездки — от трансфера из аэропорта до маршрутов по нескольким странам Европы.",
airport:{title:"Трансферы из аэропорта",text:"Комфортная встреча в CDG, Orly и Beauvais с отслеживанием рейса и профессиональной встречей."},
tours:{title:"Индивидуальные экскурсии",text:"Частные экскурсии по Парижу в вашем темпе и по вашим интересам с премиальным транспортом на весь день."},
vtc:{title:"Частный VTC и водитель",text:"Почасовая, полудневная или дневная услуга водителя для бизнеса, отдыха и VIP-поездок."},
shopping:{title:"Шопинг-поездки",text:"Частный транспорт в районы моды, на Елисейские поля, к люксовым бутикам, аутлетам и по индивидуальным маршрутам."},
international:{title:"Поездки по нескольким странам Европы",text:"Частные дальние поездки по Франции, соседним европейским странам, в Италию и другие направления по запросу."},
events:{title:"Свадьбы и специальные мероприятия",text:"Элегантное транспортное сопровождение свадеб, торжеств, гала-вечеров, корпоративных и VIP-мероприятий."},
relocation:{title:"Релокация",text:"Частные транспортные решения для переезда, длительного пребывания и поездок по Парижу и за его пределами."},
guides:{title:"Частные гиды во Франции и Бельгии",text:"Услуги местных гидов во Франции и Бельгии в сочетании с частным транспортом и гибкими маршрутами."},
europe:{title:"Индивидуальные путешествия по Европе",text:"Маршруты на несколько дней и несколько остановок с учетом вашего маршрута, отелей, достопримечательностей и темпа."},
request:"Запросить услугу",europeTitle:"Одно путешествие. Несколько стран.",europeText:"Хотите отправиться дальше Парижа? Мы можем организовать частный дальний транспорт по Франции и в соседние европейские направления, включая Италию, в соответствии с вашим маршрутом.",europePoint1:"Маршруты по нескольким городам и странам",europePoint2:"Многодневные частные поездки",europePoint3:"Транспорт от отеля до отеля",europePoint4:"Индивидуальные маршруты с водителем",planTrip:"Спланировать путешествие по Европе",guidesTitle:"Франция и Бельгия глазами местных.",guidesText:"Для дней, посвященных культуре и достопримечательностям, DKT Paris может объединить частный транспорт и гидов во Франции и Бельгии, чтобы вы открывали города и регионы более лично.",guideTag:"Индивидуальные маршруты",ctaTitle:"Расскажите, куда вы хотите отправиться.",ctaText:"Отправьте нам даты, маршрут и предпочтения. Мы организуем транспорт вокруг вашего путешествия."},
    vehiclesPage:{title:"Наш премиальный автопарк",subtitle:"Премиальные автомобили для комфорта, конфиденциальности и безупречных поездок по Парижу и Франции.",introTitle:"Путешествуйте с комфортом. Приезжайте со стилем.",introText:"От встречи в аэропорту до частных маршрутов на целый день — наши автомобили подготовлены для комфортных, профессиональных и конфиденциальных поездок.",mercedesGallery:"Коллекция Mercedes",mercedesGalleryText:"Все автомобили Mercedes и их премиальные детали.",toyotaGallery:"Коллекция Toyota",toyotaGalleryText:"Семь видов Toyota Proace для частных групповых поездок.",proaceGroup:"Идеален для частных групп",proaceLuggage:"Вместительный багажный отсек",proacePrivacy:"Профессионально и конфиденциально",proaceTravel:"Комфортные поездки на дальние расстояния",ctaTitle:"Готовы в путь?",ctaText:"Сообщите маршрут, дату и предпочитаемый автомобиль. Остальное мы организуем."},galleryPage:{title:"Недавняя галерея",subtitle:"Ближе познакомьтесь с нашими автомобилями, салонами и атмосферой DKT Paris.",introTitle:"Роскошь — в деталях.",introText:"Посмотрите последние фотографии DKT Paris. Нажмите на изображение, чтобы открыть его на весь экран.",all:"Все",mercedes:"Mercedes",toyota:"Toyota",ctaTitle:"Познакомьтесь с автопарком.",ctaText:"Выберите автомобиль и запросите частное бронирование.",ctaButton:"Открыть автопарк"},
    vehiclesPage:{title:"Наш премиальный автопарк",subtitle:"Премиальные автомобили для комфорта, конфиденциальности и безупречных поездок по Парижу и Франции.",introTitle:"Путешествуйте с комфортом. Приезжайте со стилем.",introText:"От встречи в аэропорту до частных маршрутов на целый день — наши автомобили подготовлены для комфортных, профессиональных и конфиденциальных поездок.",vclassAlt:"Изысканный салон для деловых поездок, семейных трансферов и частных маршрутов по Парижу.",vclassAlt2:"Просторный и незаметный вариант для длительных поездок по Франции и Европе.",ctaTitle:"Готовы в путь?",ctaText:"Сообщите маршрут, дату и предпочитаемый автомобиль. Остальное мы организуем."},galleryPage:{title:"Недавняя галерея",subtitle:"Ближе познакомьтесь с нашими автомобилями, салонами и атмосферой DKT Paris.",introTitle:"Роскошь — в деталях.",introText:"Посмотрите последние фотографии автопарка DKT Paris. Нажмите на изображение, чтобы открыть его на весь экран.",ctaTitle:"Познакомьтесь с автопарком.",ctaText:"Выберите автомобиль и запросите частное бронирование.",ctaButton:"Открыть автопарк"},    trust:{airport:"Встреча в аэропорту",flight:"Отслеживание рейса",languages:"Многоязычные водители",vehicles:"Премиальные автомобили"},
    hero:{badge:"VTC и эксклюзивный консьерж-сервис",titlePrefix:"Частный водитель и премиальные трансферы в",titleAccent:"Париже",subtitle:"Трансферы из аэропорта, частные экскурсии и премиальный сервис с водителем в Париже, Франции и за её пределами.",book:"Забронировать водителя",whatsapp:"WhatsApp напрямую"},
    services:{title:"Индивидуальные услуги",subtitle:"Частный транспорт, услуги водителя, гиды и индивидуальные поездки по Франции, Бельгии и Европе.",
airport:{title:"Трансферы из аэропорта",text:"Комфортные трансферы из CDG, Orly и Beauvais с отслеживанием рейса в реальном времени."},
tours:{title:"Индивидуальные экскурсии",text:"Откройте достопримечательности Парижа с комфортом и частным местным гидом."},
vtc:{title:"Частный VTC и водитель",text:"Почасовая или дневная услуга водителя на Mercedes и автомобилях премиум-класса."},
shopping:{title:"Шопинг-поездки",text:"VIP-транспорт в районы моды, на Елисейские поля и в аутлеты."},
international:{title:"Поездки по нескольким странам Европы",text:"Частные дальние поездки по Франции, соседним европейским странам, в Италию и другие направления по запросу."},
events:{title:"Свадьбы и специальные мероприятия",text:"Элегантное транспортное сопровождение свадеб, торжеств, гала-вечеров и VIP-мероприятий."},
relocation:{title:"Релокация",text:"Частные транспортные решения для переезда, длительного пребывания и поездок по Парижу и за его пределами."},
guides:{title:"Частные гиды во Франции и Бельгии",text:"Местные гиды во Франции и Бельгии в сочетании с частным транспортом и гибкими маршрутами."}},
    about:{title:"Совершенство в деталях",text:"В <strong>DKT Paris</strong> мы устанавливаем высокий стандарт частного пассажирского транспорта и роскошных туров по Франции. Для деловых поездок, отдыха и особых мероприятий наши профессиональные многоязычные водители обеспечивают безопасность, конфиденциальность и максимальный комфорт.",license:"Официальная регистрационная лицензия:"},
    vehicles:{browseAll:"Посмотреть все автомобили",browseTitle:"Наш автопарк",browseSubtitle:"Ознакомьтесь со всеми автомобилями, доступными для частных трансферов и услуг водителя.",title:"Наш автопарк",subtitle:"Премиальные автомобили Mercedes и Toyota для делового комфорта, трансферов из аэропортов и частных групповых поездок.",popular:"Самый популярный",book:"Забронировать автомобиль",vclass:{category:"Роскошный минивэн",description:"Наш фирменный автомобиль для трансферов из аэропорта, частных экскурсий, деловых поездок и VIP-групп.",passengers:"До 7 пассажиров",passengersSub:"Просторная частная поездка",luggage:"Большой багажный отсек",luggageSub:"Идеально для поездок из аэропорта",privacy:"Конфиденциальность и комфорт",privacySub:"Профессиональный водитель",comfort:"Премиальный комфорт",comfortSub:"Климат-контроль в салоне",note:"Идеален для трансферов из аэропорта и частных групп"},proace:{category:"Минивэн",description:"Практичный премиальный вариант для частных групп и комфортных трансферов.",cta:"Забронировать Toyota Proace"}},
    contact:{title:"Связаться с нами",subtitle:"Забронируйте автомобиль или запросите индивидуальный маршрут напрямую.",primary:"Основной контакт (FR | EN | RU)",secondary:"Дополнительная линия (FR | RU)",email:"Запросы по e-mail"},
    modal:{title:"Забронировать поездку",subtitle:"Заполните данные, чтобы получить быстрый расчёт через WhatsApp или e-mail."},
    form:{name:"Полное имя *",namePlaceholder:"Иван Иванов",phone:"Номер телефона *",service:"Тип услуги *",airport:"Трансфер из аэропорта",city:"Экскурсия по Парижу",vtc:"Частный VTC с водителем",shopping:"Шопинг-поездка",events:"Свадьба / Мероприятие",international:"Международная поездка",custom:"Другое / Индивидуальный запрос (укажите ниже)",vehicle:"Выберите автомобиль *",noPreference:"Без предпочтений / Гибкий вариант",vclass:"Mercedes-Benz V-Class (Роскошный минивэн)",proace:"Toyota Proace (Минивэн)",detailsLabel:"Дополнительная информация / Индивидуальный запрос",detailsPlaceholder:"Опишите пункт назначения, маршрут или особые требования...",datetime:"Дата и время *",submit:"Отправить запрос"},
    lightbox:{alt:"Увеличенное фото автомобиля"},
    footer:"© 2026 DKT Paris. Все права защищены. Зарегистрированный туристический агент и поставщик услуг VTC."
  }
};

let currentLanguage = localStorage.getItem("dktLanguage") || "en";

function t(path) {
  return path.split(".").reduce((obj, key) => obj && obj[key], translations[currentLanguage]);
}

function applyLanguage(lang) {
  if (!translations[lang]) lang = "en";
  currentLanguage = lang;
  localStorage.setItem("dktLanguage", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = tFor(lang, el.dataset.i18n);
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const value = tFor(lang, el.dataset.i18nPlaceholder);
    if (value !== undefined) el.placeholder = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const value = tFor(lang, el.dataset.i18nAlt);
    if (value !== undefined) el.alt = value;
  });

  document.querySelectorAll(".language-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.language === lang);
  });

  const titles = {
    en:"DKT Paris | Luxury Chauffeur & VTC Services",
    fr:"DKT Paris | Chauffeur Privé & Services VTC de Luxe",
    ru:"DKT Paris | Премиальный VTC и услуги водителя"
  };
  document.title = titles[lang];
}

function tFor(lang, path) {
  return path.split(".").reduce((obj, key) => obj && obj[key], translations[lang]);
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();

  document.querySelectorAll(".language-btn").forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.language));
  });
  applyLanguage(currentLanguage);

  const modal = document.getElementById("bookingModal");
  const openModalBtns = document.querySelectorAll(".open-modal-btn");
  const closeModalBtn = document.getElementById("closeModal");
  const bookingForm = document.getElementById("bookingForm");
  const serviceSelect = document.getElementById("serviceType");
  const vehicleSelect = document.getElementById("vehicleType");
  const customDetails = document.getElementById("customDetails");
  const customLabel = document.getElementById("customLabel");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));
    navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("active")));
  }

  openModalBtns.forEach(btn => btn.addEventListener("click", () => {
    const selectedVehicle = btn.getAttribute("data-vehicle");
    if (selectedVehicle && vehicleSelect) vehicleSelect.value = selectedVehicle;
    if (modal) modal.style.display = "flex";
  }));

  if (closeModalBtn) closeModalBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

  if (serviceSelect && customDetails && customLabel) {
    serviceSelect.addEventListener("change", () => {
      if (serviceSelect.value === "Custom / Other Request") {
        customDetails.required = true;
        const labels = {
          en:"Custom Request Details *",
          fr:"Détails de la demande personnalisée *",
          ru:"Детали индивидуального запроса *"
        };
        customLabel.textContent = labels[currentLanguage];
        customDetails.focus();
      } else {
        customDetails.required = false;
        customLabel.textContent = t("form.detailsLabel");
      }
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener("submit", e => {
      e.preventDefault();

      const name = document.getElementById("custName").value.trim();
      const phone = document.getElementById("custPhone").value.trim();
      const service = serviceSelect ? serviceSelect.value : "";
      const vehicle = vehicleSelect ? vehicleSelect.value : "No Preference";
      const details = customDetails ? customDetails.value.trim() : "";
      const time = document.getElementById("pickupTime").value;

      const labels = {
        en:{hello:"Hello DKT Paris! I would like to book a ride.",name:"Name",phone:"Phone",service:"Service",vehicle:"Vehicle",details:"Custom Details",time:"Requested Time"},
        fr:{hello:"Bonjour DKT Paris ! Je souhaite réserver un trajet.",name:"Nom",phone:"Téléphone",service:"Service",vehicle:"Véhicule",details:"Détails",time:"Date et heure demandées"},
        ru:{hello:"Здравствуйте, DKT Paris! Я хотел(а) бы забронировать поездку.",name:"Имя",phone:"Телефон",service:"Услуга",vehicle:"Автомобиль",details:"Дополнительные детали",time:"Желаемые дата и время"}
      }[currentLanguage];

      let message = `${labels.hello}%0A%0A` +
        `*${labels.name}:* ${encodeURIComponent(name)}%0A` +
        `*${labels.phone}:* ${encodeURIComponent(phone)}%0A` +
        `*${labels.service}:* ${encodeURIComponent(service)}%0A` +
        `*${labels.vehicle}:* ${encodeURIComponent(vehicle)}`;
      if (details) message += `%0A*${labels.details}:* ${encodeURIComponent(details)}`;
      message += `%0A*${labels.time}:* ${encodeURIComponent(time)}`;

      window.open(`https://wa.me/33759533763?text=${message}`, "_blank");
      modal.style.display = "none";
    });
  }

  const lightbox = document.getElementById("imageLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeLightbox = document.getElementById("closeLightbox");
  document.querySelectorAll(".collage-item").forEach(item => item.addEventListener("click", () => {
    const bgStyle = item.style.backgroundImage;
    if (bgStyle) {
      const imageUrl = bgStyle.replace(/^url\(["']?/, "").replace(/["']?\)$/, "");
      if (lightboxImg) lightboxImg.src = imageUrl;
      if (lightbox) lightbox.classList.add("active");
    }
  }));

  if (closeLightbox) closeLightbox.addEventListener("click", () => lightbox.classList.remove("active"));
  if (lightbox) lightbox.addEventListener("click", e => { if (e.target === lightbox) lightbox.classList.remove("active"); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && lightbox && lightbox.classList.contains("active")) lightbox.classList.remove("active");
  });

  // Browse all vehicles overlay
  const fleetBrowser = document.getElementById("fleetBrowser");
  const browseAllVehicles = document.getElementById("browseAllVehicles");

  function closeFleetBrowser() {
    if (!fleetBrowser) return;
    fleetBrowser.classList.remove("active");
    fleetBrowser.setAttribute("aria-hidden", "true");
    document.body.classList.remove("fleet-browser-open");
  }

  if (browseAllVehicles && fleetBrowser) {
    browseAllVehicles.addEventListener("click", () => {
      fleetBrowser.classList.add("active");
      fleetBrowser.setAttribute("aria-hidden", "false");
      document.body.classList.add("fleet-browser-open");
    });

    fleetBrowser.querySelectorAll("[data-close-fleet-browser]").forEach(el => {
      el.addEventListener("click", closeFleetBrowser);
    });

    fleetBrowser.querySelectorAll(".open-modal-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        closeFleetBrowser();
        const selectedVehicle = btn.getAttribute("data-vehicle");
        if (selectedVehicle && vehicleSelect) vehicleSelect.value = selectedVehicle;
        if (modal) modal.style.display = "flex";
      });
    });
  }
});


// Dedicated gallery filters
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".gallery-filter");
  const photos = document.querySelectorAll(".full-gallery-grid .gallery-photo");
  if (!filters.length || !photos.length) return;

  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      filters.forEach(btn => btn.classList.remove("active"));
      filter.classList.add("active");
      const group = filter.getAttribute("data-gallery-filter");

      photos.forEach(photo => {
        const photoGroup = photo.getAttribute("data-gallery-group");
        const show = group === "all" || photoGroup === group || photoGroup === "all";
        photo.style.display = show ? "" : "none";
      });
    });
  });
});
