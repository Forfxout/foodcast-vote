<template>
  <div>
    <div class="flex justify-center items-center font-bold text-3xl pb-12">
      Popular questions
    </div>
    <div v-for="(question, index) in questions" :key="index">
      <div v-if="(index % 2 === 0)" class="flex justify-start">
        <QuestionComponentLeft :title="question.question" :description="question.reply"></QuestionComponentLeft>
      </div>
      <div v-else class="flex justify-end">
        <QuestionComponentRight :title="question.question" :description="question.reply"></QuestionComponentRight>
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
      let result
      try {
        result = await this.http.get('http://64.225.126.215:3000/v1/info')
      } catch (e) {

      }
      this.questions = result.data.questions
    }
  },
  async mounted () {
    await this.getInformation()
  }
}
</script>

<style scoped>

</style>
