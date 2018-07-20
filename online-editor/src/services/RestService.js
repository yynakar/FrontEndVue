import CONFIG from '../config.json';

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
 
// Vue.axios.defaults.headers.common['Access-Control-Allow-Origin'] = CONFIG.serverIp;
// Vue.axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';

export default class RestService{

    modifyText(modInfo){
        console.log("modify tesxt info");
        
    }

    getAllTheText(){
        //console.log(CONFIG.serverIp+":"+CONFIG.serverPort+"/PadHistory");

        // Vue.axios.post('https://reqres.in/api/users', {
        //     "name": "morpheus",
        //     "job": "leader"
        // })

        // Vue.axios.post('http://192.168.114.42:8000/PadHistory', {
        //     "id":"test"
        //   })

        Vue.axios.post('192.168.114.42:8000/PadHistory', {
            "id":"test"
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


        //   Vue.axios
        //   .get('https://jsonplaceholder.typicode.com/photos')
        //   .then(response => {
        //       this.photos = response.data;
        //       console.log(response);
        //   }  )
    }

    

}