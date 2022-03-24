<template>
  <span>{{currentWord}}</span>
</template>
<script>
export default {
  name: 'DynamicWords',
  computed: {
    currentWord () {
      return this.words[this.wordIndex].toLowerCase()
    }
  },
  data () {
    return {
      wordIndex: 0,
      timeoutFunction: null
    }
  },
  props: {
    delay: {
      type: Number,
      default: 5000
    },
    words: {
      type: Array,
      default () { return [] }
    }
  },
  methods: {
    incrementWordIndex () {
      if (this.wordIndex === this.words.length - 1) {
        this.wordIndex = 0
      } else {
        this.wordIndex++
      }
    },
    nextWord () {
      this.timeoutFunction = setTimeout(() => {
        this.incrementWordIndex()
        this.nextWord()
      }, this.delay)
    }
  },
  mounted () {
    this.nextWord()
  }
}
</script>
