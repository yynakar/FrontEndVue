  <template  src="./newPadPage.html" >
</template>
<style  src="./newPadPage.css" scoped></style>


<script>
import newPad from "../newPad/newPad.vue";
import users from "../users/index.vue";
import { bus } from "../../main";

export default {
  name: "edit",
  components: {
    newPad: newPad,
    users: users
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
      passing_event: ''
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
    }
  }
};
</script>