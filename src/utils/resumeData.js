import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { GitHub, Language, Lens, WebOutlined, YouTube } from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BrushIcon from '@material-ui/icons/Brush';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import lens from '../assets/images/lens.jpg'
import hib from '../assets/images/hib.jpg'
import balletrina from '../assets/images/balletrina.jpg'
import portfolio from '../assets/images/portfolio.jpg';
import portfoliobt from '../assets/images/portfolio-bt.jpg';
import portfoliobt1 from '../assets/images/portfolio-bt1.jpg';
import portfolioweb from '../assets/images/portfolioweb.jpg';


export default {
    name: 'Evans R. Mondragon',
    phone: '+57 3127921501',
    title: 'Desarrollo Web',
    email: 'info@devans.online',
    addres: 'cali - Jamundi Colombia',
    whatsApp: 'https://api.whatsapp.com/send?phone=573127921501&text=hola,%20Dev@ns%20me%20puedes%20ayudar%20con%20mi%20proyecto%20Gracias!?',

    socials: {
        Facebook: {
            link: 'https://www.facebook.com/devans.devans.9469',
            text: 'Devans',
            icon: <FacebookIcon />
        },
        Twitter: {
            link: 'https://twitter.com/@Devans23159343',
            text: '@Devans23159343',
            icon: <TwitterIcon />
        },
        Github: {
            link: 'https://www.github.com/',
            text: 'Devans',
            icon: <GitHubIcon />
        },
        WhatsApp: {
            link: 'https://api.whatsapp.com/send?phone=573127921501&text=hola,%20Dev@ns%20me%20puedes%20ayudar%20con%20mi%20proyecto%20Gracias!?',
            text: 'Dev@ns',
            icon: <WhatsAppIcon />
        }
    },

    about:
        " Soy freelancer en desarrollo web, orientado desde diferentes áreas, como la programación de front-end (HTML, CSS y jQuery / Javascript), accesibilidad digital, experiencia del usuario y diseño visual. \n \n Me encanta el desarrollo y el diseño web en todas sus formas y ayudo a las empresas a mejorar su presencia en Internet y a las personas a Entender mejor el mundo de la informática y las nuevas tecnologías.",

    experience: [
        {
            title: "Freelancer",
            date: "Actualmente",
            description: "Desarrollador en tecnologias WEB (HTML, CSS, JAVASCRIPT) CMS WordPress,  frameworks ANGULAR, REACT diseño UI/UX"
        },
        {
            title: "Banco de Occidente",
            date: "2019 - Actualmente",
            description: "Analista de calidad de aplicaciones Banco QA, analisis de requerimientos y funcionalidades del proyecto CTIF,  Test de pruebas funcionales y diseno de casos de prueba, metodologia SCRUM."
        },
        {
            title: "Carvajal Tecnologia",
            date: "2018 - 2019",
            description: "Implementacion de proyecto Factura Electronica FECO, capacitacion e instalacion de las diferentes etapas del proyecto en cliente final, pruebas funcionales y no funcionales sobre los requerimientos y entregables al cliente, administracion de proyecto en marco SCRUM. "
        }
    ],

    education: [
        {
            title: "Ingeniero de Sistemas",
            date: "2013 - 2018",
            description: "Profesional en ingenieria de sistemas"
        },
        {
            title: "Seminario Administracion de bases de Datos Oracle",
            date: "2018 - 2018",
            description: "Seminario de profundización en administracion de bases de datos Oracle"
        },
        {
            title: "Especialidad Gestion y Seguridad de Bases de Datos",
            date: "2019 - 2020",
            description: "Especialización Tecnologica en Gestion y Seguridad de Bases de Datos SENA"
        }
    ],

    services: [
        {
            title: 'Desarrollo Web',
            description: 'Desarrollo de sitios o aplicaciones Web en tecnologias, Html, Css, JS Frameworks',
            icon: <WebOutlined />
        },
        {
            title: 'Wordpress',
            description: 'Desarrollo de sitios estaticos o dinamicos administrables por el usuario ',
            icon: <DashboardIcon />
        },
        {
            title: 'UI-UX',
            description: 'Diseño de interfaces y experiencia de usuario, analisis SEO',
            icon: <BrushIcon />
        }

    ],

    projects: [
        {
            tag: 'React',
            image: portfolio,
            title: 'Portafolio',
            caption: 'Portafolio con React JS',
            description: 'Portafolio desarrollado con React JS, uso de estilos CSS y Material UI',
            links: [

                { link: 'https://portafolio.devans.online/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]
        },
        {
            tag: 'Web',
            image: portfoliobt,
            title: 'Portafolio Bootstrap',
            caption: 'Portafolio con Bootstrap 5',
            description: 'Portafolio desarrollado con Bootstrap 5, maquetacion y estilos CSS',
            links: [

                { link: 'https://3v4n5.github.io/app-Bootstrap-1/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]
        },
        {
            tag: 'Web',
            image: portfoliobt1,
            title: 'Portafolio Bootstrap',
            caption: 'Portafolio con Bootstrap 5',
            description: 'Portafolio desarrollado con Bootstrap 5, maquetacion y estilos CSS',
            links: [

                { link: 'https://3v4n5.github.io/app-Botstrap-5-portafolio/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]
        },
        {
            tag: 'Web',
            image: portfolioweb,
            title: 'Portafolio Web',
            caption: 'Portafolio HTML, CSS, JS',
            description: 'Portafolio desarrollado con HTML, CSS, JS',
            links: [

                { link: 'https://3v4n5.github.io/portafolio-CSS-JS/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]
        },
        {
            tag: 'WordPress',
            image: lens,
            title: 'Lens Arte y Felicidad',
            caption: ' Tienda de Regalos',
            description: 'Tienda de regalos desarrollada con WP, HTML, CSS, Ecommerce medios de pago y carrito de compras.',
            links: [

                { link: 'https://lensarteyfelicidad.com/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]

        },
        {
            tag: 'WordPress',
            image: balletrina,
            title: 'Balletrina',
            caption: 'Tienda de Ropa',
            description: 'Tienda de Ropa desarrollada con WP, HTML, CSS, Ecommerce medios de pago y carrito de compras.',
            links: [

                { link: 'https://balletrina.com/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]

        },
        {
            tag: 'WordPress',
            image: hib,
            title: 'Hib un Estilo Propio',
            caption: 'Tienda Urbana',
            description: 'Tienda de Urbana desarrollada con WP, HTML, CSS, Ecommerce medios de pago y carrito de compras.',
            links: [

                { link: 'https://hibunestilopropio.com/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]

        }
    ]

}
