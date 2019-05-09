<template>
  <div>
    <div class="margin-external">
      <div class="blue px16 mb-4">ПОДЕЛИТЬСЯ С ЕЛЕНОЙ</div>
      <form @submit.prevent="proclaim" v-if="mean">
        <div class="form-group">
          <label for="exampleInputPassword1">Ваше имя</label>
          <input v-model="form.name" @blur="$v.form.name.$touch()" @click="canProclaim"
                 type="text" class="form-control" id="exampleInputPassword1" placeholder="Your name"
                 aria-describedby="nameGr"
                 :class="{'fullIn': $v.form.name.required}"
          >
          <small v-if="$v.form.name.$error" id="nameGr" class="form-text text-muted">
            <span v-if="!$v.form.name.required" class="alert alert-danger"
                  role="alert">Поле обязательно для заполнения</span>
          </small>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input v-model.lazy="form.email" @blur="$v.form.email.$touch()" @click="canProclaim"
                 type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email address pleas"
                 aria-describedby="emailGr"
                 :class="{'fullIn': $v.form.email.required && $v.form.email.email}"
          >
          <small v-if="$v.form.email.$error" id="emailGr" class="form-text text-muted">
            <span v-if="!$v.form.email.required" class="alert alert-danger" role="alert">необходимо указать email</span>
            <span v-if="!$v.form.email.email" class="alert alert-danger" role="alert">email введен некорректно</span>
          </small>
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Ваша заметка</label>
          <textarea v-model="form.statement" @blur="$v.form.statement.$touch()" @click="canProclaim"
                    rows="3" class="form-control" id="exampleFormControlTextarea1" placeholder="Your statement"
                    aria-describedby="statementGr"
                    :class="{'fullIn': $v.form.statement.required && $v.form.statement.maxLength}"
          ></textarea>
          <small v-if="$v.form.statement.$error" id="statementGr" class="form-text text-muted">
            <span v-if="!$v.form.statement.required" class="alert alert-danger" role="alert">Для успешной публикации наличие обращения- обязательно.</span>
            <span v-if="!$v.form.statement.maxLength" class="alert alert-danger" role="alert">Чрезмерно длинное сообщение. Допустимая длинна - 97 знаков.</span>
          </small>
        </div>
        <button v-if="!thank || canThank" type="submit" class="btn btn-primary" :disabled="$v.form.$invalid">
          Опубликовать
        </button>
        <span v-else @click="thank = false" class="alert alert-success" role="alert">БЛАГОДАРИМ ЗА ОТКЛИК!</span>
      </form>
    </div>

    <hr>
    <div class="list">
      <div class="message-list">
        <ul v-for="(guestbookItem, index) in guestbookList" :key="index">
          <li class="comment even thread-even depth-1" id="form.publishedAt">
            <div v-if="!guestbookItem.previousGuestbook" class="comment-author vcard">
              <cite class="fn">{{guestbookItem.name}} ({{guestbookItem.email}})</cite><span class="says"> :</span>
            </div>
            <p><i>{{guestbookItem.statement}}</i></p>
            <p>{{guestbookItem.publishedAt}}</p>
            <div v-html="guestbookItem.previousGuestbook"></div>
            <hr>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import {required, email, maxLength} from 'vuelidate/lib/validators'

  import {GET_GUESTBOOK, ADD_STATEMENT} from '@/assets/queries'

  export default {
    computed: {
      canThank() {
        return this.$v.form.$anyDirty
      }
    },
    data() {
      return {
        form: {
          name: null,
          email: null,
          statement: null,
          publishedAt: null
        },
        mean: false,
        thank: false  // смена кнопки Опубликовать на текст БЛАГОДАРИМ ЗА ОТКЛИК
      }
    },
    validations: {
      form: {
        name: {
          required
        },
        email: {
          required,
          email
        },
        statement: {
          required,
          maxLength: maxLength(97)
        }
      }
    },
    methods: {
      proclaim() {
        this.form.publishedAt = moment.unix(Math.floor(Date.now() / 1000)).format('LL')
        const client = this.$apollo.getClient()
        client.mutate({
          mutation: ADD_STATEMENT,
          variables: this.form,
          update: (cache, {data: {addStatement}}) => {
            const {getGuestbook} = cache.readQuery({
              query: GET_GUESTBOOK
            })
            console.log('=01, cacheData=', getGuestbook)  // =cacheData.getGuestbook[]

            getGuestbook.unshift(addStatement)

            // cache.writeData({      // no work
            //   data: {
            //     getGuestbook: getGuestbook.concat({
            //       addStatement,
            //       __typename: 'Statement'
            //     })
            //   }
            // })
          }
        })

        this.thank = true
        this.form.name = null
        this.form.email = null
        this.form.statement = null
        this.$v.$reset()
      },
      canProclaim() {
        this.thank = false
      }
    },
    async asyncData(context) {
      let client = context.app.apolloProvider.defaultClient
      const {data} = await client.query({
        query: GET_GUESTBOOK
      })
      return {
        guestbookList: data.getGuestbook
      }
    },
    mounted() {
      this.mean = true
    }
  }
</script>

<style scoped>
  .btn:hover {
    box-shadow: 1px 1px 2px 1px rgba(92, 92, 92, 0.69);
    cursor: pointer;
  }

  .fullIn {
    border: solid 1px chartreuse;
  }

</style>
