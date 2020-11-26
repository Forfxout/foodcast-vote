<template>
  <div class="xl:w-3/4 main-div">
    <div class="flex justify-center items-center text-3xl pt-6 xl:pb-12">
      Popular questions
    </div>
    <div v-for="(question, index) in questions" :key="index">
      <div v-if="(index % 2 === 0)" class="flex justify-start">
        <QuestionComponentLeft class="hidden xl:block" :title="question.question"
                               :description="question.reply"></QuestionComponentLeft>
      </div>
      <div v-else class="flex justify-end">
        <QuestionComponentRight class="hidden xl:block" :title="question.question"
                                :description="question.reply"></QuestionComponentRight>
      </div>
      <div class="flex flex-col text-center items-center p-3 mx-6 mb-4 border-b-2 xl:hidden">
        <div class="text-xl lg:text-2xl">
          {{ question.question }}
        </div>
        <div class="font-light text-lg lg:text-xl">
          {{ question.reply }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionComponentLeft from '@/components/QuestionComponentLeft'
import QuestionComponentRight from '@/components/QuestionComponentRight'

export default {
  components: {
    QuestionComponentRight,
    QuestionComponentLeft
  },
  data () {
    return {
      questions: []
    }
  },
  methods: {
    async getInformation () {
      await this.http.get('/v1/info').then(response => {
        this.questions = response.data.questions
      }).catch()
    }
  },
  async mounted () {
    await this.getInformation()
  }
}
</script>

<style lang="sass" scoped>
@media screen and (min-width: 1441px)
  .main-div
    @apply w-3/5
</style>
