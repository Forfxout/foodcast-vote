<template>
  <div class="flex justify-center my-16 sm:text-lg">
    <div class="flex flex-col items-center">
      <div class="time-label py-1 text-4xl sm:text-5xl">
        {{ days }}
      </div>
      <div class="relative">
        <div class="time-name-label absolute">Days</div>
      </div>
    </div>
    <div class="flex items-center">
      <div class="px-3"></div>
      <div class="div-line"></div>
      <div class="px-3"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="time-label py-1 text-4xl sm:text-5xl">
        {{ hours }}
      </div>
      <div class="relative">
        <div class="time-name-label absolute">Hours</div>
      </div>
    </div>
    <div class="flex items-center">
      <div class="px-3"></div>
      <div class="div-line"></div>
      <div class="px-3"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="time-label py-1 text-4xl sm:text-5xl">
        {{ minutes }}
      </div>
      <div class="relative">
        <div class="time-name-label absolute">Minutes</div>
      </div>
    </div>
    <div class="flex items-center">
      <div class="px-3"></div>
      <div class="div-line"></div>
      <div class="px-3"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="time-label py-1 text-4xl sm:text-5xl">
        {{ seconds }}
      </div>
      <div class="relative">
        <div class="time-name-label absolute">Seconds</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {
  data () {
    return {
      days: '--',
      hours: '--',
      minutes: '--',
      seconds: '--'
    }
  },
  methods: {
    async getRestaurantEndTime () {
      let result
      try {
        result = await this.http.get('/v1/restaurant/week')
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
        this.days = this.addZeroToTime(duration.days().toString())
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
.time-name-label
  bottom: 25%
  right: 50%
  transform: translate(50%, 25%)

.time-label
  top: 0

.div-line
  border-left: 1px solid white
  height: 26px
</style>
