<template>
  <div class="phone-book__base">
    <div class="phone-book__title">Phone book list</div>
    <div>
      <div class="phone-book__search">
        <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
      </div>
    </div>
    <div class="phone-book__list">
      <div v-if="filteredData.length > 0">
        <contact-component v-for="(item, index) in filteredData"
                           :key="index"
                           :contactData="item"/>
      </div>
      <div v-else>No such data</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhonebookComponent',
  data () {
    return {
      contactsData: [],
      searchQuery: null,
      xmlhttp: null
    }
  },
  computed: {
    filteredData () {
      if(this.searchQuery){
        return this.contactsData.filter((item)=>{
          return (item.name).toLowerCase().startsWith(this.searchQuery.toLowerCase()) || (item.phone_number).toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
        })
      }else{
        return this.contactsData;
      }
    }
  },
  created () {
    this.xmlhttp = new XMLHttpRequest();
    this.xmlhttp.onreadystatechange = this.getServerData

    this.xmlhttp.open("GET", "https://www.mocky.io/v2/581335f71000004204abaf83", true);
    this.xmlhttp.send();
  },
  methods: {
    getServerData () {
      console.log('xmlhttp', this.xmlhttp)
      console.log('if 1', this.xmlhttp.readyState, this.xmlhttp.status)
      if (this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200) {
        try {
          console.log('enter')
          var data = JSON.parse(this.xmlhttp.responseText);
          this.contactsData = data.contacts
          console.log('this.contactsData', this.contactsData)
        } catch (err) {
          console.log(err.message + " in " + this.xmlhttp.responseText);
          return;
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .phone-book {
    &__base {
      text-align: center;
    }

    &__search {
      margin-bottom: 15px;

      input {
        font-size: 1.05em;
        padding: 10px 0 10px 5px;
        width: 99%;
      }
    }

    &__title {
      font-size: 1.2em;
      font-weight: bold;
      margin-bottom: 15px;
    }
  }
</style>
