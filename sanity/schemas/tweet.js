export default {
    name: 'tweet',
    type: 'document',
    title: 'Tweet',
    fields: [
        {
            name: 'text',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'blockTweet',
            title: 'Block Tweet',
            description: 'ADMIN Controls: Toggle if Tweet is deemed inappropriate',
            type: 'boolean',
        },
        {
            name: 'username',
            title: 'Username',
            type: 'string',
        },
        {
            name: 'profileImg',
            title: 'Profile Image',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Tweet image',
            type: 'string'
        },

    ]
}