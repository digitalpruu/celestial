const title = "Celestial";
const slogan = "Dulzura celestial, sabor inolvidable";
const email = "";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los accesorios de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "";

const textos = {
    index: {
        title: `${title}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "En Celestial, nos especializamos en la creación de postres irresistibles, llenos de sabor y creatividad. Dirigido por Julieth Tatiana Quinchia Acosta, ofrecemos una amplia variedad de cheesecakes con deliciosos toppings como Nutella, mora, durazno y queso, que hacen de cada bocado una experiencia única y celestial.\n" +
            "\n" +
            "Nos dedicamos a brindar a nuestros clientes momentos dulces y especiales con postres hechos con los mejores ingredientes y un toque personalizado en cada receta." },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: slogan,
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://web.facebook.com/profile.php?id=61567023602001&is_tour_dismissed",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
