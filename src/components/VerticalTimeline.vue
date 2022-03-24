<template>
  <div class="d-flex timeline-main">
    <div class="timeline-section d-flex" v-for="year in (end - startIndex)" :key="year">
      <div class="left-item grow timeline-blurb-parent" v-if="showYear(startIndex + year)">
        <div class="left-item-blurb item-blurb" v-for="workItem in getLeftItems(startIndex + year)" :key="workItem.company">
          <div class="position-heading">
            <div class="position-company">
              {{workItem.company}}
            </div>
            <div class="position-title">
              {{workItem.title}}
            </div>
            <div class="position-dates">
              {{transformDate(workItem.start)}} - {{transformDate(workItem.end)}}
            </div>
          </div>
          <div class="position-body">
            {{workItem.description}}
          </div>
        </div>
      </div>
      <div class="timeline-item shrink d-flex" v-if="showYear(startIndex + year)">
        <div class="d-flex justify-center">
          {{startIndex + year}}
        </div>
        <div class="timeline-line-wrapper d-flex justify-center">
          <div class="timeline-line">
            &nbsp;
          </div>
        </div>
      </div>
      <div class="right-item grow timeline-blurb-parent" v-if="showYear(startIndex + year)">
        <div class="right-item-blurb item-blurb" v-for="workItem in getRightItems(startIndex + year)" :key="workItem.company">
          <div class="position-heading">
            <div class="position-company">
              {{workItem.company}}
            </div>
            <div class="position-title">
              {{workItem.title}}
            </div>
            <div class="position-dates">
              {{transformDate(workItem.start)}} - {{transformDate(workItem.end)}}
            </div>
          </div>
          <div class="position-body">
            {{workItem.description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]
export default {
  computed: {
    workHistory () {
      return this.$store.state.workHistory
    },
    sortedHistory () {
      const byYear = {}
      this.workHistory.forEach((workItem) => {
        const date = new Date(workItem.start)
        if (byYear[date.getFullYear()] == null) { byYear[date.getFullYear()] = [workItem] } else { byYear[date.getFullYear()].push(workItem) }
      })
      return byYear
    },
    startIndex () {
      return (this.start - 1)
    }
  },
  props: {
    start: {
      type: Number,
      default: 2000,
      required: false
    },
    end: {
      type: Number,
      default: 2022,
      required: false
    },
    showEmptyYears: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    getItems (year, remainder) {
      const returnVal = []
      if (this.sortedHistory[year] == null) return []
      for (let i = 0; i < this.sortedHistory[year].length; i++) {
        if (i % 2 === remainder) {
          returnVal.push(this.sortedHistory[year][i])
        }
      }
      return returnVal
    },
    getLeftItems (year) {
      return this.getItems(year, 0)
    },
    getRightItems (year) {
      return this.getItems(year, 1)
    },

    showYear (year) {
      if (this.showEmptyYears) return true
      else {
        return this.sortedHistory[year] != null
      }
    },

    transformDate (date) {
      if (date == null) return 'Current'
      const d = new Date(date)
      return monthNames[d.getMonth()] + ' ' + d.getFullYear()
    }
  }
}
</script>
<style scoped>
.timeline-main {
  flex-direction: column;
}
.timeline-item {
  width: 100px;
  flex-direction: column;
  justify-content: center;
}
.timeline-line {
  background-color: #FFF;
  width: 40px;
  min-height: 180px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;;
}
.timeline-blurb-parent {
  max-width: calc(50% - 70px);
  margin: 10px;
}
.item-blurb:first {
  margin-top: 20px;
}
.item-blurb {
  background-color: #FFF;
  color: #333;
  border: 1px solid #CCC;
  padding: 20px;
  border-radius: 10px;
  margin-top: 22px;
}
.item-blurb .position-company {
  font-size: 30px;
}
.item-blurb .position-title {
  font-size: 20px;
  color: #888;
}
.item-blurb .position-dates {
  font-size: 20px;
  color: #888;
  border-bottom: 1px solid #ccc;
}
.left-item-blurb {
}
.right-item-blurb {
}
</style>
