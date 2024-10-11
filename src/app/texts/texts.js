const title = "Cositas Lindas";
const slogan = "Accesorios que cuentan tu historia.";
const email = "cositaslindas2507@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los accesorios de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3028279496";

const textos = {
    index: {
        title: `${title}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "La esencia de Cositas Lindas se basa en accesorios que no solo complemente tu outfit, si no que también te haga sentir feliz y radiante en cada ocasión, pensando en brindarte piezas duraderas y un acabado increíble a precios accequibles. Nuestro compromiso es hacer que cada cliente se sienta único y especial al lucir nuestras creaciones."
    },
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
        facebook: "https://www.facebook.com/profile.php?id=61566082556168&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
