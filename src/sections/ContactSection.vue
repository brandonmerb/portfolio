<template>
  <custom-section fill-height id="contact">
    <v-row>
      <v-col cols="12">
        <h1 class="called-out-heading text-center">
          <v-icon size="60" class="heading-space">mdi-email-outline</v-icon
          >Contact me
          <h1 class="text-center pt-2">
            I'd love to hear from you
          </h1>
        </h1>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" lg="6">
            <v-card class="contact-info">
              <v-card-text>
                <div><v-icon>mdi-email</v-icon>Email me</div>
                <div :class="{'actual-info': true, 'actual-info-small': $vuetify.breakpoint.smAndDown}">{{email}}</div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="6">
            <v-card class="contact-info">
              <v-card-text>
                <div><v-icon>mdi-phone</v-icon>Call me</div>
                <div :class="{'actual-info': true, 'actual-info-small': $vuetify.breakpoint.smAndDown}">{{phone}}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </custom-section>
</template>
<script>
import CustomSection from '../components/CustomSection.vue'
import contact from '../store/dataSeed/contact'

export default {
  components: {
    CustomSection
  },
  computed: {
    email () {
      return contact.email
    },
    phone () {
      return contact.phone
    }
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
#contact {
  background-image: url("../assets/contact.jpg");
  background-size: cover;
}
#contact .called-out-heading {
  border-bottom: 1px solid #999;
  padding-bottom: 20px;
  margin-bottom: 10px;
}
.heading-space {
  padding-right: 20px;
}

.contact-info {
  padding: 40px;
  padding-left:10px;
  padding-right: 10px;
}

.contact-info .v-card__text {
  font-size: 40px !important;
  text-align: center;
}
.contact-info .v-icon {
  font-size: 55px !important;
  margin-right: 4px;
}

.actual-info {
  padding-top: 60px;
}
.actual-info-small {
  font-size: 24px;
}
</style>
