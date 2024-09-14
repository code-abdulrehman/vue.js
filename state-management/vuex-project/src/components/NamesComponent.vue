<!-- eslint-disable -->
 <template>
  <div>
    <form @submit.prevent="submitForm">
      <input type="text" class="input" placeholder="Enter name ..." v-model="name">
      <button type="submit" class="btn">Add Name</button>
    </form>
    <h3>Total Names <span class="spe">{{ totalNames }}</span> </h3>
<div v-for="name in allNames" :key="name.id">
         <div class="name__list">
           <div class="name__list-name">{{ name.name }}</div>
           <div class="name__list-btn">
             <button @click="removeName(name.id)">
               <svg xmlns="http://www.w3.org/235495e/svg" width="26" height="26" fill="currentColor" class="bi bi-x dlt-btn" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
               </svg>
              </button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NamesComponent",
  data() {
    // eslint-disable-next-line
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions(["addName", "removeName"]),
    submitForm() {
      // eslint-disable-next-line
      this.addName({ id: new Date().getMilliseconds(), name: this.name});
      this.name = "";
    },
  },
  computed: {
    ...mapGetters(["allNames", "totalNames", "lastUser"]),
  },
};
</script>

<style scoped>
/* eslint-disable */
h3 {
  margin: 40px 0 0;
}

.name__list {
  width: 600px;
  margin: 10px auto;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background: #42b983;
  border-left: 4px solid #35495e;
  align-items: center;
}
.name__list-name {
  color: #35495e;
  font-weight: 900;
  text-decoration: none;
}
button,
.dlt-btn {
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
}
.dlt-btn:hover {
  transition: all 0.2s linear;
  transform: rotate(90deg);
}
form {
  width: 620px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #42b983;
  border-left: 4px solid #35495e;
  overflow: hidden;
}
.input {
  font-size: 20px;
  width: 82%;
  padding: 15px;
  border: none;
}
input:focus {
  outline: none;
}
.btn {
  font-size: 17px;
  padding: 17px 2px;
  width: 18%;
  background: #42b983;
  font-weight: 800;
}
.btn:active {
  background: #35495e;
  color: #ffffff;
}
.spe {
  color: #42b983;
}
</style>
