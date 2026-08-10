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
    whatsappSecondary: "5522988353497",
    phoneLabel: "(21) 97150-3548",
    phoneSecondaryLabel: "(22) 98835-3497",
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

export function whatsappUrl(message = "Olá! Recebi uma negativa de tratamento e gostaria de analisar meu caso.", secondary = false) {
  const number = secondary ? templateConfig.contact.whatsappSecondary : templateConfig.contact.whatsapp;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
