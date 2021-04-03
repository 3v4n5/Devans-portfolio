import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { AssignmentIndOutlined, GitHub, Language, WebOutlined, YouTube } from '@material-ui/icons';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import CodeIcon from '@material-ui/icons/Code';



export default {
    name: 'Evans R. Mondragon',
    phone: 3127921501,
    title: 'Web Developer',
    email: 'contacto@devans.com',
    addres: 'cali - Jamundi Colombia',

    socials: {
        Facebook: {
            link: 'https://www.facebook.com/',
            text: 'Devans',
            icon: <FacebookIcon/>
        },
        Twitter: {
            link: 'https://www.twitter.com/',
            text: '@Devans',
            icon: <TwitterIcon/>
        },
        Github: {
            link: 'https://www.github.com/',
            text: 'Devans',
            icon: <GitHubIcon/>
        }
    },

    about:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti adipisci aut, optio numquam similique labore nulla libero veniam asperiores itaque dolores nostrum provident error, sequi debitis odit deserunt reprehenderit officia aperiam, atque omnis animi mollitia tenetur minima. Exercitationem quam, reiciendis dolore, accusamus dolores explicabo, aperiam iure incidunt a commodi eveniet! \n\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Illum harum vero obcaecati necessitatibus adipisci? Qui, et odit? Temporibus nam nobis cum libero molestias dolorem dolor nostrum tempore consequatur consectetur vero sed voluptatum neque dolores facere sequi rerum, iure inventore quaerat atque. Perferendis reprehenderit reiciendis nesciunt accusantium soluta quis fugit sit! ",

    experience: [
        {
            title: "Work 1",
            date: "2018 - present",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis animi velit praesentium obcaecati quia maiores, enim consectetur? Dolores, nisi quos."
        },
        {
            title: "Work 2",
            date: "2017 - 2018",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis animi velit praesentium obcaecati quia maiores, enim consectetur? Dolores, nisi quos."
        },
        {
            title: "Work 3",
            date: "2016 - 2017",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis animi velit praesentium obcaecati quia maiores, enim consectetur? Dolores, nisi quos."
        }
    ],
    
    education: [
        {
            title: "Education 1",
            date: "2018 - present",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis animi velit praesentium obcaecati quia maiores, enim consectetur? Dolores, nisi quos."
        },
        {
            title: "Education 2",
            date: "2017 - 2018",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis animi velit praesentium obcaecati quia maiores, enim consectetur? Dolores, nisi quos."
        },
        {
            title: "Education 3",
            date: "2016 - 2017",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis animi velit praesentium obcaecati quia maiores, enim consectetur? Dolores, nisi quos."
        }
    ],

    services: [
        {
            title: 'Web Dev',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            icon: <WebOutlined />
        },
        {
            title: 'Web Dev',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            icon: <AssignmentIndOutlined />
        },
        {
            title: 'Web Dev',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            icon: <VideogameAssetIcon />
        },
        {
            title: 'Web Dev',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            icon: <CodeIcon />
        }
    ],

    projects: [
        {
            tag: 'React',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1652&q=80',
            title: 'React Project 1',
            caption: 'A short description',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
            links: [
                [
                   { link: 'https://www.youtube.com', icon: <YouTube />},
                   { link: 'https://www.youtube.com', icon: <GitHub />},
                   { link: 'https://www.youtube.com', icon: <Language />}
                ]
            ]
        },
        {
            tag: 'React',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1652&q=80',
            title: 'React Project 2',
            caption: 'A short description',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
            links: [
                [
                   { link: 'https://www.youtube.com', icon: <YouTube />},
                   { link: 'https://www.youtube.com', icon: <GitHub />},
                   { link: 'https://www.youtube.com', icon: <Language />}
                ]
            ]
        },
        {
            tag: 'Python',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1652&q=80',
            title: 'Python Project 1',
            caption: 'A short description',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
            links: [
                [
                   { link: 'https://www.youtube.com', icon: <YouTube />},
                   { link: 'https://www.youtube.com', icon: <GitHub />},
                   { link: 'https://www.youtube.com', icon: <Language />}
                ]
            ]
        },
        {
            tag: 'Java',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1652&q=80',
            title: 'Java Project 1',
            caption: 'A short description',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
            links: [
                [
                   { link: 'https://www.youtube.com', icon: <YouTube />},
                   { link: 'https://www.youtube.com', icon: <GitHub />},
                   { link: 'https://www.youtube.com', icon: <Language />}
                ]
            ]
        }
    ]
    
}
