export const templateConfig = {
  brand: {
    name: "Alessandro Marcos Gonçalves",
    shortName: "Alessandro Marcos",
    descriptor: "Advocacia em Direito da Saúde",
    lawyer: "Dr. Alessandro Marcos Gonçalves",
    oab: "OAB/RJ 158.908",
  },
  contact: {
    whatsapp: "5521971503548",
    phoneLabel: "(21) 97150-3548",
    email: "alessandromarcusgoncalves@gmail.com",
    instagram: "https://www.instagram.com/amgoncalvesadvogados/",
    facebook: "https://www.facebook.com/amgoncalvesadvogados",
  },
  office: {
    address: "Rua Doutor Celestino, 122, sala 1319",
    district: "Centro, Niterói — RJ",
    hours: "Atendimento com horário marcado",
    mapsQuery: "Rua Doutor Celestino 122 Centro Niterói RJ",
  },
};

export function whatsappUrl(message = "Olá! Recebi uma negativa de tratamento e gostaria de analisar meu caso.") {
  return `https://wa.me/${templateConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
