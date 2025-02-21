require('dotenv/config');

exports.seed = async function (knex) {
  await knex('specialties').insert([
    { name: 'Acupuntura' },
    { name: 'Acupuntura' },
    { name: 'Alergia e imunologia' },
    { name: 'Andrologia' },
    { name: 'Anestesiologia' },
    { name: 'Biomédico' },
    { name: 'Cancerologia' },
    { name: 'Cardiologia' },
    { name: 'Cardiologia Pediátrica' },
    { name: 'Cirurgia Buco-maxilo-facial' },
    { name: 'Cirurgia Cardiovascular' },
    { name: 'Cirurgia da Mão' },
    { name: 'Cirurgia de Cabeça e Pescoço' },
    { name: 'Cirurgia do Aparelho Digestivo' },
    { name: 'Cirurgia Geral' },
    { name: 'Cirurgia Pediátrica' },
    { name: 'Cirurgia Plástica' },
    { name: 'Cirurgia Torácica' },
    { name: 'Cirurgia Vascular' },
    { name: 'Clínica Médica' },
    { name: 'Colonoscopia' },
    { name: 'Coloproctologia' },
    { name: 'Contextos Hospitalares' },
    { name: 'Contextos Sociais' },
    { name: 'Dermatologia' },
    { name: 'Diagnóstico por Imagem (Atuação Exclusiva)' },
    { name: 'Ecocardiografia' },
    { name: 'Endocrinologia' },
    { name: 'Endodontia' },
    { name: 'Endoscopia' },
    { name: 'Enfermagem' },
    { name: 'Fisioterapia Dermato-Funcional' },
    { name: 'Fisioterapia do Trabalho' },
    { name: 'Fisioterapia em Saúde Coletiva' },
    { name: 'Fisioterapia em Saúde da Mulher' },
    { name: 'Fisioterapia Esportiva' },
    { name: 'Fisioterapia Neuro-Funcional' },
    { name: 'Fisioterapia Onco-Funcional' },
    { name: 'Fisioterapia Respiratória' },
    { name: 'Fisioterapia Traumato-Ortopédica' },
    { name: 'Fonoaudiologia' },
    { name: 'Gastroenterologia' },
    { name: 'Genética Médica' },
    { name: 'Geriatria' },
    { name: 'Ginecologia e Obstetrícia' },
    { name: 'Hematologia e Hemoterapia' },
    { name: 'Homeopatia' },
    { name: 'Infectologia' },
    { name: 'Mastologia' },
    { name: 'Medicina da dor' },
    { name: 'Medicina de família e comunidade' },
    { name: 'Medicina do trabalho' },
    { name: 'Medicina do tráfego' },
    { name: 'Medicina Esportiva' },
    { name: 'Medicina Física e Reabilitação' },
    { name: 'Medicina geriátrica' },
    { name: 'Medicina Intensiva' },
    { name: 'Medicina Legal' },
    { name: 'Medicina Nuclear' },
    { name: 'Medicina Preventiva e Social' },
    { name: 'Médico broncoesofalogista' },
    { name: 'Médico Cancerologista Cirúrgico' },
    { name: 'Médico cancerologista clínico' },
    { name: 'Médico Cancerologista Pediátrico' },
    { name: 'Médico Cardiologista Intervencionista' },
    { name: 'Médico Cirurgião Vascular' },
    { name: 'Médico citopatologista' },
    { name: 'Médico em eletroencefalografia' },
    { name: 'Médico em medicina de família e comunidade' },
    { name: 'Médico em Medicina Intensiva' },
    { name: 'Médico foniatra' },
    { name: 'Médico generalista' },
    { name: 'Médico hansenologista' },
    { name: 'Médico hematologista' },
    { name: 'Médico Neurofisiologista' },
    { name: 'Médico nutrologista' },
    { name: 'Médico residente' },
    { name: 'Médico sanitarista' },
    { name: 'Nefrologia' },
    { name: 'Neonatologia' },
    { name: 'Neurocirurgia' },
    { name: 'Neurologia' },
    { name: 'Nutricionista' },
    { name: 'Nutrologia' },
    { name: 'Odontogeriatria' },
    { name: 'Odontologia' },
    { name: 'Odontopediatria' },
    { name: 'Oftalmologia' },
    { name: 'Oncologia' },
    { name: 'Ondotologia' },
    { name: 'Ortopedia e Traumatologia' },
    { name: 'Ortopedia pediátrica' },
    { name: 'Osteopatia e Quiropraxia' },
    { name: 'Otoneurocirurgia' },
    { name: 'Otorrinolaringologia' },
    { name: 'Patologia' },
    { name: 'Patologia Clínica / Medicina Laboratorial' },
    { name: 'Pediatria' },
    { name: 'Perícia médica' },
    { name: 'Periodontia' },
    { name: 'Pneumologia' },
    { name: 'Proctologia' },
    { name: 'Psicanálise' },
    { name: 'Psicologia' },
    { name: 'Psiquiatria' },
    { name: 'Radiologia e Diagnóstico por Imagem' },
    { name: 'Radioterapia' },
    { name: 'Reumatologia' },
    { name: 'Saúde Coletiva' },
    { name: 'Saúde da Família' },
    { name: 'Saúde Funcional' },
    { name: 'Saúde Mental' },
    { name: 'Urologia' },
    { name: 'Vídeo Histeroscopia' },
    { name: 'Vídeolaparoscopia' },
  ]);
};
