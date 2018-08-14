import CONFIG from '../config.json';
import RestService from './RestService.js'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import newPad from '../components/newPad/newPad.vue'
Vue.use(VueAxios, axios)

export default class PollingService {

  constructor() {
    this.pollingTimeInterval = 1000; //milliseconds
    this.timesTicked = 0;
    this.restService = new RestService();
    this.clock = setInterval(ticker => {
      this.restService.checkForChange();
    }, this.pollingTimeInterval);

  }



}