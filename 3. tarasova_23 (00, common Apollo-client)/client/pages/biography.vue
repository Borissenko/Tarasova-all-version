<template>
  <div class="margin-external">
    <form @submit.prevent="getStuff">
      <input type="text" v-model="form.name">
      <input type="text" v-model="form.email">
      <input type="text" v-model="form.statement">
      <button type="submit">Go with goDir</button>
    </form>


    <hr>
    <pre>
      =возврат from getStuff= {{dd}}
    </pre>
    <hr>
      =allStatement from asyncData=
    <br>{{allStatement}}
    <hr>
    <!--<pre>-->
      <!--=getPage.basicName from apollo:{} = {{getPage.basicName}}-->
    <!--</pre>-->
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import gql from 'graphql-tag'

  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          statement: ''
        },
        dd: ''
      }
    },
    methods: {
      getStuff () {
        const client = this.$apollo.getClient()
        client.mutate({
          mutation: gql`
          mutation ($name: String!, $email: String, $statement:String) {
            addStatement (name: $name, email: $email, statement: $statement) {
                name
                statement
            }
          }
          `,
          variables: this.form,
          update: (cache, {data: {addStatement}}) => {
            // 01
            const cacheData = cache.readQuery({
              query: gql`{
                 getAllStatement {
                   name
                   statement
                 }
              }`
            })

            console.log('00, cache=', cache) // +
            console.log('01-0, addStatement=', addStatement)
            console.log('01-1, cacheData-1=', cacheData)

            // 02
            cacheData.getAllStatement.unshift(addStatement)

            console.log('02, cacheData-2=', cacheData)

            // 03  этот блок ненужен? Он лишь дает ошибку в консоле, и без него все работает.
            // cache.writeQuery({
            //   query: gql`{
            //     getAllStatement {
            //       name
            //       statement
            //     }
            //   }`,
            //   cacheData
            // })
            console.log('03-writeQuery')        // -  не появлялся из-за ошибки cache.writeQuery
          },
          // optimisticResponse: {   // НЕ НУЖЕН! )) Он лишь дает второй прогон update.
          //   __typename: 'Mutation',
          //   addStatement: {
          //     __typename: 'Statement',
          //     ...this.form
          //   }
          // }
        })
        .then(({data}) => this.dd = data)  // то, что возвращает addStatement, прописанный в server/resolvers. Он нам в принципе не нужен
      },
    },
    async asyncData(context) {
      let client = context.app.apolloProvider.defaultClient
      const {data} = await client.query({
        query: gql`{
            getAllStatement {
              name
              statement
            }
        }`
      })
      return {
        allStatement: data.getAllStatement
      }
    },
    computed: {
      ...mapState({
        biography: (state) => state.biography.component.text
      })
    }
    ,
    // apollo: {
    //   getPage: {
    //     query: gql`
    //       query($basicName: String!) {
    //         getPage(basicName: $basicName) {
    //           basicName
    //           title
    //           component {
    //             text
    //           }
    //         }
    //       }
    //     `,
    //     variables() {
    //       return {
    //         basicName: "biography"
    //       }
    //     }
    //   }
    // }
  }
</script>

<style scoped>

</style>
