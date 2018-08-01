import CONFIG from '../config.json';

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import newPad from '../components/newPad/newPad.vue'
Vue.use(VueAxios, axios)

export default class PollingService {

  constructor() {
    this.pollingTimeInterval = 500; //milliseconds
    this.timesTicked = 0;

    this.ticker = setInterval(tick => {
      console.log(this.timesTicked);
      this.timesTicked = this.timesTicked + 1;
    }, this.pollingTimeInterval);

  }





}