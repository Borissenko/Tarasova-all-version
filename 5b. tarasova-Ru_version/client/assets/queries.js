import gql from 'graphql-tag'

export const GET_BIOGRAPHY_PAGE = gql`
query($basicName: String!) {
  getPage(basicName: $basicName) {
    component {
      text
    }
  }
}
`
export const GET_CONCERTS_PAGE = gql`
query($basicName: String!) {
  getPage(basicName: $basicName) {
    component {
      concertEventsAll {      
        type
        data
        where
        participants
        program
      }
      concertsArchive
    }
  }
}
`
export const GET_CONTACTS_PAGE = gql`
query($basicName: String!) {
  getPage(basicName: $basicName) {
    component {
      contactsText
    }
  }
}
`
export const GET_VIDEOS_PAGE = gql`
query($basicName: String!) {
  getPage(basicName: $basicName) {
    component {
      videos {
        title
        data
        src   
      }
    }
  }
}
`
export const GET_NEWS_PAGE = gql`
query($basicName: String!) {
  getPage(basicName: $basicName) {
    component {
      news {
        title
        subtitle
        text
      }
    }
  }
}
`
export const GET_PHOTOALBUM_PAGE = gql`
query($basicName: String!) {
  getPage(basicName: $basicName) {
    component {
      photoGroups {
        name
        photos
      }
    }
  }
}
`
export const GET_PRESS_PAGE = gql`
query($basicName: String!) {
  getPage(basicName: $basicName) {
    component {
      commentPressArchiv {
        description
      }
      interviews {
        title
        description
        data
        text
      }
    }
  }
}
`
export const GET_PROJECTS_PAGE = gql`
query($basicName: String!) {
  getPage(basicName: $basicName) {
    component {
      events {
        title
        text
      }
    }
  }
}
`
export const GET_REPERTOIRE_PAGE = gql`
query($basicName: String!) {
  getPage(basicName: $basicName) {
    component {
      repertoireAll {
        type
        composer
        compositionTitle
        compositionDescription
      }
    }
  }
}
`
export const GET_GUESTBOOK = gql`{
  getGuestbook {
    name
    email
    statement
    publishedAt
    previousGuestbook
  }
}`

export const ADD_STATEMENT = gql`
  mutation ($name: String, $email: String, $statement:String, $publishedAt: String) {
    addStatement (name: $name, email: $email, statement: $statement, publishedAt: $publishedAt) {
      name
      email
      statement
      publishedAt
    }
  }
`
