  <template  src="./newPadPage.html" >
</template>
<style  src="./newPadPage.css" scoped></style>


<script>
import newPad from "../newPad/newPad.vue";
import users from "../users/index.vue";
import restService from "../../services/RestService.js";
import { bus } from "../../main";
import RestService from "../../services/RestService";

export default {
  name: "edit",
  components: {
    newPad: newPad,
    users: users,
  },
  /*Here will be placed the id we get from the backend
    props: {
        id: {
            type: Number,
            default: 5
        }
    },*/
  data: function() {
    return {
      seTvisibility: true,
      passing_event: "",
      modifyTitleInterval: 3000, //milliseconds
      restService: new RestService(),
      clock : null,
      title: ""
    };
  },
  mounted() {
    bus.$on("datasended", data => {
      alert("ela ti leeii mpika mounted data edit newpad");
      this.padId = data;
    });
  },
  methods: {
    makeSettingsVisible() {
      alert("Kalo to event gia to settings");
      bus.$emit("settings-visibility", this.seTvisibility);
    },
    modifyTitle: function() {
      console.log("modify title!");

      if(this.clock !== null){
        clearTimeout(this.clock);
      }

      this.clock = setTimeout(ticker => {
        console.log(this.title);
        this.restService.modifyTitle(this.title);
      }, this.modifyTitleInterval);
    }
  }
};
</script>