const { v4: uuidv4 } = require('uuid');
const image = 'https://i.imgur.com/nu89iCe.png'


const contracts = [
    {
        id: uuidv4(),
        name: "No Disclosure Agreement (NDA)",
        form_name: "FormNda",
        details: "Acuerdo de confidencialidad.",
        image: image 
    },
    {
        id: uuidv4(),
        name: "Servicios Independientes (PM-PF)",
        form_name: "FormSpPmPf",
        details: "Contrato para la contratación de personal que se dedica al desarrollo o venta de productos de una persona moral.",
        image: image        
    },
    {
        id: uuidv4(),
        name: "Laboral (PM-PF)",
        form_name: "FormLaboralPfPm",
        details: "Contrato para la contratación de empleados (con prestaciones laborales) que se dedican al desarrollo o venta de productos de una persona moral.",
    }
    // {
    //     id: uuidv4(),
    //     name: "Servicios Independientes (PF-PF)",
    //     details: "Contrato para la contratación de personal que se dedica al desarrollo o venta de productos de una persona física.",
    //     image: image 
    // },
    // {
    //     id: uuidv4(),
    //     name: "Pasante (PF-PF)",
    //     details: "Contrato para pasantes y practicantes de universidades y escuelas de educación superior.",
    //     image: image 
    // },
    // {
    //     id: uuidv4(),
    //     name: "MSA Español (PM)", 
    //     details:"Contrato para prestación de servicios externos de desarrollo de Software programa de cómputo, aplicación o sitio web, aplicación móvil, etc... por persona moral.",
    //     image: image 
    // },
    // {
    //     id: uuidv4(),
    //     name: "MSA Español (PF)",
    //     details: "Contrato para prestación de servicios externos de desarrollo de Software programa de cómputo, aplicación o sitio web, aplicación móvil, etc... por persona física.",
    //     image: image 
    // },
    // {
    //     id: uuidv4(),
    //     name: "Acta de Entrega y Recepción",
    //     details: "Acta para docmentar la entrega de un prograama de cómputo, aplicación o sitio web, aplicación movil, etc.",
    //     image: image 
    // },
    // {
    //     id: uuidv4(),
    //     name: "Autorización Conferencistas",
    //     details: "Documento para poder compartir y publicar la imagen y el contenido de cualqueir conferencista que participe en el video o audio.",
    //     image: image 
    // },
    // {
    //     id: uuidv4(),
    //     name: "Aviso de Privacidad de Asistentes",
    //     details: "Documento que tiene las caracterísitcas del tratamiento de datos personales de cualquier asistente a panel o conferencia.",
    //     image: image 
    // },
]

module.exports = contracts;