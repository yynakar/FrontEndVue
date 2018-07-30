import CONFIG from '../config.json';

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import newPad from '../components/newPad/newPad.vue'
Vue.use(VueAxios, axios)

// Vue.axios.defaults.headers.common['Access-Control-Allow-Origin'] = CONFIG.serverIp;
// Vue.axi-os.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
//http://192.168.114.42:8000/PadHistory
//Vue.axios.post(CONFIG.serverIp+":"+CONFIG.serverPort+"/PadHistory", {
//http://192.168.114.18:8000/edit

export default class RestService {

  //let serverIp = "http://192.168.114.18";

  constructor() {
    this.ip = CONFIG.serverIp;
    this.port = CONFIG.serverPort;
    this.padId = null;
    var data = newPad.$data;
    console.log("ASDADASDASDASDASDAS");
    console.log(data);
  }

  setPadID(id) {
    this.padId = id;
  }


  ipAndPort() {
    return this.ip + ":" + this.port;
  }

  modifyText(modInfo) {

    var date = this.ISODateString(new Date());
    console.log(date);

    var json = {
      "Req_date": date,
      "Value": "alex",
      "Start": 0,
      "End": 0,
      "Pad_ID": CONFIG.padId
    };

    console.log(json);

    Vue.axios.put(this.ipAndPort() + "/Edit", json)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  //returns a promise. it's handled at the caller
  createPadRequest() {
      return Vue.axios.post(this.ipAndPort() + "/NewPad");
  }

  loadPadRequest(padId) {

    console.log("load pad request called with id: "+padId);

    Vue.axios.get(this.ipAndPort() + "/LoadPad/"+padId)
      .then(function (response) {
        console.log("LOAD PAAAD");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  getAllTheText() {

  }

  // CONVERTS DATE TO RFC 3339 TIMESTAMP
  ISODateString(d) {
    function pad(n) {
      return n < 10 ? '0' + n : n
    }
    return d.getUTCFullYear() + '-' +
      pad(d.getUTCMonth() + 1) + '-' +
      pad(d.getUTCDate()) + 'T' +
      pad(d.getUTCHours()) + ':' +
      pad(d.getUTCMinutes()) + ':' +
      pad(d.getUTCSeconds()) + 'Z'
  }




}