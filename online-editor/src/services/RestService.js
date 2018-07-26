import CONFIG from '../config.json';

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// Vue.axios.defaults.headers.common['Access-Control-Allow-Origin'] = CONFIG.serverIp;
// Vue.axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
//http://192.168.114.42:8000/PadHistory
//Vue.axios.post(CONFIG.serverIp+":"+CONFIG.serverPort+"/PadHistory", {
//http://192.168.114.18:8000/edit

export default class RestService {

  //let serverIp = "http://192.168.114.18";

  constructor() {
    this.ip = "http://192.168.114.18";
    this.port = 8000;
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
      "End": 3,
      "Pad_ID": "test"
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

  createPad() {
    Vue.axios.post(this.ipAndPort() + "/NewPad")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loadPad() {
    Vue.axios.get(this.ipAndPort() + "LoadPad/test")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  simpleGet() {

  }

  getAllTheText() {

  }

  /* use a function for the exact format desired... */
  //rfc 3339 timestamp
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