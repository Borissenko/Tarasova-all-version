// db
const biography = require("./biography")

module.exports = [
  {
    basicName: 'biography',
    title: 'Биография',
    picture: '/imgs/biography@2x.jpg',
    component: {
      text: biography.biography_text
    }
  },
  {
    basicName: 'repertoire',
    title: 'Репертуар',
    picture: '/imgs/repertuar@2x.jpg',
    component: {
      pages: 'GO-2 !'
    }
  }
]



