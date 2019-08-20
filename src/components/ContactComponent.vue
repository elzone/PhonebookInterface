<template>
    <div class="contact-item__base">
        <div class="contact-item__name">
            {{contactData.name}}
        </div>
        <div class="contact-item__details">
            <div class="contact-item__phone">
                <a class="contact-item__phone-mobile" :href="`tel:contactData.phone_number`">{{contactData.phone_number}}</a>
                <div class="contact-item__phone-desktop">{{contactData.phone_number}}</div>
            </div>
            <div class="contact-item__address">
                {{contactData.address}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ContactComponent",
  props: {
    contactData: {
      type: Object,
      required: true
    }
  },
  mounted () {
    console.log(this.contactData)
  }
}
</script>

<style lang="scss" scoped>
    .contact-item {
        &__base {
            background-color: #EEEEEE;
            border-bottom: 1px solid #000000;
            display: flex;
            padding: 20px;
            text-align: left;
        }

        &__base:nth-child(even) {
            background-color: #FFFFFF;
        }

        &__address {
            font-size: 0.8em;
        }

        &__details {
            text-align: left;
        }

        &__name {
            font-weight: bold;
            padding-right: 20px;
            width: 25%;
        }

        &__phone {
            color: darkred;
            margin-bottom: 20px;
        }

        &__phone-desktop {
            display: none;
        }

        &__phone-mobile {
            color: darkred;
            text-decoration: none;
        }
    }

    @media screen and (min-width: 1025px) {
        .contact-item {
            &__phone-desktop {
                display: block;
            }

            &__phone-mobile {
                display: none;
            }
        }
    }
</style>
