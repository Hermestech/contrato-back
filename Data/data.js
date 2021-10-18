const { v4: uuidv4 } = require('uuid');
const id = uuidv4();

const contracts = [
    {
        id: id,
        name: "Servicios Independientes (PM-PF)",
        details: "Contrato para la contratación de personal que se dedica al desarrollo o venta de productos de una persona moral."
    },
    {
        id: id,
        name: "Servicios Independientes (PF-PF)",
        details: "Contrato para la contratación de personal que se dedica al desarrollo o venta de productos de una persona física."
    },
    {
        id:id,
        name: "Pasante (PF-PF)",
        details: "Contrato para pasantes y practicantes de universidades y escuelas de educación superior."
    },
    {
        id: id,
        name: "MSA Español (PM)", 
        details:"Contrato para prestación de servicios externos de desarrollo de Software programa de cómputo, aplicación o sitio web, aplicación móvil, etc... por persona moral."
    },
    {
        id: id,
        name: "MSA Español (PF)",
        details: "Contrato para prestación de servicios externos de desarrollo de Software programa de cómputo, aplicación o sitio web, aplicación móvil, etc... por persona física."
    },
    {
        id: id,
        name: "Acta de Entrega y Recepción",
        details: "Acta para docmentar la entrega de un prograama de cómputo, aplicación o sitio web, aplicación movil, etc."
    },
    {
        id: id,
        name: "Autorización Conferencistas",
        details: "Documento para poder compartir y publicar la imagen y el contenido de cualqueir conferencista que participe en el video o audio."
    },
    {
        id: id,
        name: "Aviso de Privacidad de Asistentes",
        details: "Documento que tiene las caracterísitcas del tratamiento de datos personales de cualquier asistente a panel o conferencia."
    },
    {
        id: id,
        name: "Nda",
        details: "Acuerdo de confidencialidad."
    }
]

module.exports = contracts;