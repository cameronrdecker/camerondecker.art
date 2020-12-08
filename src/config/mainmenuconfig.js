
const mainMenuItems = [
    {   
        id: 'about', 
        type: 'item', 
        label: 'About', 
        path: '/'
    },
    {   
        id: 'store', 
        type: 'item', 
        label: 'Store', 
        path: '/store'
    },
    {
        id: 'writing',
        type: 'group',
        label: 'Writing',
        children:[
            {   
                id: 'poetry', 
                type: 'item', 
                label: 'Poetry', 
                path: '/writing/poetry'
            },
            {   
                id: 'erasure', 
                type: 'item', 
                label: 'Erasure', 
                path: '/writing/erasure'
            },
            {   
                id: 'postcards', 
                type: 'item', 
                label: 'Postcards', 
                path: '/writing/postcards'
            },
        ]
    },
    {
        id: 'web',
        type: 'group',
        label: 'Web',
        children:[
            {   
                id: 'cartoonists', 
                type: 'item', 
                label: 'Cartoonist Databases', 
                path: '/web/cartoonist-databases'
            }
        ]
    },
    {
        id: 'other',
        type: 'group',
        label: 'Other Projects',
        children:[
            {   
                id: 'blankets', 
                type: 'item', 
                label: 'Blankets for My Friends', 
                path: '/other/blankets'
            }
        ]
    },
    {
        id: 'contact',
        type: 'group',
        label: 'Contact',
        children:[
            {   
                id: 'twitter', 
                type: 'itemExternal', 
                label: 'Twitter', 
                path: 'https://twitter.com/cameronrdecker'
            },
            {   
                id: 'instagram', 
                type: 'itemExternal', 
                label: 'Instagram', 
                path: 'https://www.instagram.com/camerondeckerart/'
            },
            {   
                id: 'email', 
                type: 'item', 
                label: 'Email', 
                path: '/email'
            }
        ]
    }     
]

export default mainMenuItems