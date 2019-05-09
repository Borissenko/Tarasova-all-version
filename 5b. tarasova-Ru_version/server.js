const {ApolloServer, gql} = require("apollo-server")
const db = require("./dataBase/db")
const previousGuestbook = require("./dataBase/previousGuestbook")

let guestbook = [
  {name: 'Kola', email: '016@rambler.ru', statement: 'Ваш концерт великолепен!', publishedAt: 'March 29, 2019'},
  {previousGuestbook}
];

const typeDefs = gql` 
  type Page {
    basicName: String!
    component: Component
  }
  
  type Component {
    text: String
    concertEventsAll: [ConcertEvent]
    concertsArchive: String
    contactsText: String
    videos: [Video]
    news: [New]
    photoGroups: [PhotoGroup]
    commentPressArchiv: [Press]
    interviews: [Press]
    events: [Event]
    repertoireAll: [Composition]
  }
  
  type ConcertEvent {
    type: String
    data: String
    where: String
    participants: String
    program: String
  }
  
  type Video {
    title: String
    data: String
    src: String
  }
  
  type New {
    title: String
    subtitle: String
    text: String
  }  
    
  type PhotoGroup {
    name: String
    photos: [String]
  }
  
  type Press {
    title: String
    description: String
    data: String
    text: String
  }
  
  type Event {
    title: String
    text: String
  }
    
  type Composition {
    type: String
    composer: String
    compositionTitle: String
    compositionDescription: String
  }
  
  type Statement {
    name: String
    email: String
    statement: String
    publishedAt: String
    previousGuestbook: String
  }
  
  type Query {
    getPage (basicName: String!): Page
    getGuestbook: [Statement]
  }
  
  type Mutation {
    addStatement (name: String, email: String, statement: String, publishedAt: String): Statement
  }  
 `;

const resolvers = {
  Query: {
    getPage: (_, {basicName}) => db.find(page => page.basicName === basicName),
    getGuestbook: () => guestbook
  },
  Mutation: {
    addStatement: (_, {name, email, statement, publishedAt}) => {
      const msge = {name, email, statement, publishedAt}
      guestbook.unshift(msge)
      return msge;
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen(4000).then(({url}) => {
  console.log(`Hi! Server listening on ${url}`)
})


// I will use db only for fetching big text files