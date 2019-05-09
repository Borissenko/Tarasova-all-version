// db
const biography = require("./biography")
const concertEventsAll = require("./concertEventsAll")
const concertsArchive = require("./concertsArchive")
const contactsText = require("./contactsText")
const videos = require("./videos")
const news = require("./news")
const photoGroups = require("./photoGroups")
const commentPressArchiv = require("./commentPressArchiv")
const interviews = require("./interviews")
const events = require("./events")
const repertoireAll = require("./repertoireAll")

module.exports = [
    {
        basicName: 'biography',
        component: {
            text: biography
        }
    },
    {
        basicName: 'concerts',
        component: {
            concertEventsAll,
            concertsArchive
        }
    },
    {
        basicName: 'contacts',
        component: {
            contactsText
        }
    },
    {
        basicName: 'media',
        component: {
            videos
        }
    },
    {
        basicName: 'news',
        component: {
            news
        }
    },
    {
        basicName: 'photoalbum',
        component: {
            photoGroups
        }
    },
    {
        basicName: 'press',
        component: {
            commentPressArchiv,
            interviews
        }
    },
    {
        basicName: 'projects',
        component: {
            events
        }
    },
    {
        basicName: 'repertoire',
        component: {
            repertoireAll
        }
    }
]



