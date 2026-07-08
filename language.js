const translations = {

    en: {

        navHome: "Home",
        navAbout: "About",
        navServices: "Services",
        navGallery: "Gallery",
        navContact: "Contact",
        bookBtn: "Book Now",

        welcome: "✨ Welcome to",
        heroTitle: "Future Beauty Salon",
        heroText: "Discover luxury beauty services crafted to make every woman feel confident.",
        heroButton: "Book Appointment",
        servicesBtn: "Explore Services",

        aboutSmall: "ABOUT US",
        aboutTitle: "Luxury Beauty Experience",
        aboutText: "At Future Beauty Salon, we specialize in bridal makeup, hairstyling, nails, lashes and premium beauty services. Our goal is to make every client feel confident and beautiful.",

        serviceSmall: "OUR SERVICES",
        serviceTitle: "Luxury Beauty Services",
        serviceText: "Choose the perfect beauty service for your special day.",

        bridalTitle: "Bridal Makeup",
        bridalText: "Luxury bridal makeup for weddings.",

        partyTitle: "Party Makeup",
        partyText: "Elegant makeup for every occasion.",

        hairTitle: "Hair Styling",
        hairText: "Professional hairstyles for every event.",

        washTitle: "Hair Wash",
        washText: "Professional hair washing with premium products.",

        detoxTitle: "Scalp Detox",
        detoxText: "Deep scalp cleansing for healthy hair.",

        crownTitle: "Bridal Crown Installation",
        crownText: "Elegant bridal crown styling.",

        lashesTitle: "Lashes",
        lashesText: "Classic, Hybrid & Volume lash extensions.",

        nailsTitle: "Nails",
        nailsText: "Luxury manicure, pedicure and gel polish.",

        contactSmall: "CONTACT",
        contactTitle: "Contact Us",
        contactText: "Book your appointment today.",

        followTitle: "Follow Us",
        followText: "Stay connected with us on social media.",

        bridalCrownTitle: "Bridal Crown Installation",

        bridalCrownText: "Elegant bridal crown styling.",

        bookingTitle: "Book Your Appointment",
bookingText: "Reserve your beauty session in just a few steps.",

serviceOption: "Choose a Service",

hairOption: "Hair Styling",
bridalOption: "Bridal Makeup",
partyOption: "Party Makeup",
nailsOption: "Nails",
lashesOption: "Lashes",
washOption: "Hair Wash",
detoxOption: "Scalp Detox",
crownOption: "Bridal Crown Installation",

confirmBtn: "Confirm Booking",


    },

    ar: {

        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "الخدمات",
        navGallery: "المعرض",
        navContact: "تواصل معنا",
        bookBtn: "احجز الآن",

        welcome: "✨ أهلاً بك في",
        heroTitle: "فيوتشر بيوتي صالون",
        heroText: "اكتشفي أفخم خدمات التجميل والمكياج والشعر لتتألقي في جميع مناسباتك.",
        heroButton: "احجزي موعدك",
        servicesBtn: "استعرض الخدمات",

        aboutSmall: "من نحن",
        aboutTitle: "تجربة تجميل فاخرة",
        aboutText: "في فيوتشر بيوتي صالون نقدم خدمات المكياج، الشعر، الرموش، الأظافر والعناية بالجمال بأعلى جودة لنمنحك إطلالة مميزة.",

        serviceSmall: "خدماتنا",
        serviceTitle: "خدمات التجميل",
        serviceText: "اختاري الخدمة المناسبة لك.",

        bridalTitle: "مكياج عرائس",
        bridalText: "مكياج فاخر ومميز ليوم زفافك.",

        partyTitle: "مكياج مناسبات",
        partyText: "إطلالة أنيقة لجميع المناسبات.",

        hairTitle: "تصفيف الشعر",
        hairText: "تسريحات احترافية لجميع المناسبات.",

        washTitle: "غسيل الشعر",
        washText: "غسيل شعر احترافي بمنتجات عالية الجودة.",

        detoxTitle: "تنظيف فروة الرأس",
        detoxText: "تنظيف عميق لفروة الرأس.",

        crownTitle: "تركيب تاج العروس",
        crownText: "تركيب وتنسيق تاج العروس باحترافية.",

        lashesTitle: "الرموش",
        lashesText: "رموش كلاسيك، هايبرد وفوليوم.",

        nailsTitle: "الأظافر",
        nailsText: "مانيكير، باديكير وجل بوليش.",

        contactSmall: "تواصل معنا",
        contactTitle: "تواصل معنا",
        contactText: "احجزي موعدك الآن وسنكون سعداء بخدمتك.",

        followTitle: "تابعينا",
        followText: "تابعينا على منصات التواصل الاجتماعي."

        ,
        bridalCrownTitle: "تركيب تاج العروس",

        bridalCrownText: "تركيب وتنسيق تاج العروس بإطلالة أنيقة ومميزة.",

        bookingTitle: "احجزي موعدك",
bookingText: "احجزي جلستك بكل سهولة.",

serviceOption: "اختاري الخدمة",

hairOption: "تصفيف الشعر",
bridalOption: "مكياج عرائس",
partyOption: "مكياج مناسبات",
nailsOption: "الأظافر",
lashesOption: "الرموش",
washOption: "غسيل الشعر",
detoxOption: "تنظيف فروة الرأس",
crownOption: "تركيب تاج العروس",

confirmBtn: "تأكيد الحجز",

    }

};

function changeLanguage(lang){

    document.documentElement.lang = lang;

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    for (const key in translations[lang]){

        const element = document.getElementById(key);

        if(element){

            element.textContent = translations[lang][key];

        }

    }

}document.getElementById("enBtn").addEventListener("click", () => {
    changeLanguage("en");
});

document.getElementById("arBtn").addEventListener("click", () => {
    changeLanguage("ar");
});

