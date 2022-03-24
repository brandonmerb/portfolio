<template>
  <div>
    <v-parallax v-if="useParallax" :src="parallax">
      <v-container :fluid="fluid" :class="{'fill-height': fillHeight}">
        <v-row>
          <v-col cols="12">
            <slot>
            </slot>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-container :fluid="fluid" :class="{'fill-height': fillHeight}" v-else>
      <v-row>
        <v-col cols="12">
          <slot>
          </slot>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'CustomSection',
  computed: {
    useParallax () {
      if (this.parallax != null && this.parallax.length > 0) {
        return true
      }
      return false
    }
  },
  props: {
    fluid: {
      type: Boolean,
      default: false
    },
    fillHeight: {
      type: Boolean,
      default: false
    },
    parallax: {
      type: String,
      default: null,
      required: false
    }
  }
}
</script>
<style scoped>
.fill-height {
  height: 100%;
}
</style>
