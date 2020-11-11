<template>
  <div class="flex justify-center w-24">
    <div class="flex items-center">
      <div class="time-label">
        {{ hours }}
      </div>
    </div>
    <div class="flex justify-center px-1">
      <div>:</div>
    </div>
    <div class="flex justify-center">
      <div class="time-label">
        {{ minutes }}
      </div>
    </div>
    <div class="flex justify-center px-1">
      <div>:</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="time-label w-4">
        {{ seconds }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {
  data () {
    return {
      hours: '',
      minutes: '',
      seconds: ''
    }
  },
  methods: {
    async getRestaurantEndTime () {
      let result
      try {
        result = await this.http.get('http://64.225.126.215:3000/v1/restaurant/week')
      } catch (e) {

      }
      return moment.utc(result.data.ends).unix()
    },
    async countDownEventEnd () {
      const currentTime = moment().unix()
      const eventTime = await this.getRestaurantEndTime()
      const differentTime = eventTime - currentTime
      let duration = moment.duration(differentTime * 1000, 'milliseconds')
      const interval = 1000

      setInterval(() => {
        duration = moment.duration(duration - interval, 'milliseconds')
        this.hours = this.addZeroToTime(duration.hours().toString())
        this.minutes = this.addZeroToTime(duration.minutes().toString())
        this.seconds = this.addZeroToTime(duration.seconds().toString())
      }, interval)
    },
    addZeroToTime (time) {
      if (time.length < 2) {
        return `0${time}`
      } else {
        return time
      }
    }
  },
  async mounted () {
    await this.countDownEventEnd()
  }
}
</script>

<style lang="sass" scoped>

</style>
