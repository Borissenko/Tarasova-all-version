const {ApolloServer, gql} = require("apollo-server")
const db = require("./dataBase/db")

let guestbook = [
  {name: 'Kola', email: '016@rambler.ru', statement: 'Go'},
  {name: 'Ola', email: '023@rambler.ru', statement: 'yeee'},
];

let book

const typeDefs = gql` 
  type Page {
    basicName: String!
    title: String
    picture: String
    component: Component
  }  
  type Component {
    text: String
    pages: [Pages]
    activePg: String    
    photoGroups: [PhotoGroups]
    videos: String
    events: [Event]
    commentPressArchiv: String
    interviews: String
    news: String
    guestbookList: String
    contactsText: String
  }  
  type Pages {
    typePg: String
    title: String
  }
  type PhotoGroups {
    name: String
    photos: String
  }
  type Event {
    title: String
    text: String
  }
  
  type Statement {
    name: String!
    email: String
    statement: String
  }
  
  type Query {
    getPage (basicName: String!): Page
    getFerst: Page
    getAllStatement: [Statement]
  }
  
  type Mutation {
    addStatement (name: String!, email: String, statement: String): Statement
  }
  
 `;

const resolvers = {
  Query: {
    getPage: (_, {basicName}) => db.find(page => page.basicName === basicName),
    getFerst: () => db[0],
    getAllStatement: () => guestbook
  },
  Mutation: {
    addStatement: (_, {name, email, statement}) => {
      const msge = {name, email, statement}    // const msges = { name: name, email: email, statement: statement };
      guestbook.unshift(msge)
      console.log('=msge=', msge)
      console.log('=guestbook=', guestbook)
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
