import CONFIG from '../config.json';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import newPad from '../components/newPad/newPad.vue'
Vue.use(VueAxios, axios)


export default class RestService {
    constructor() {
        this.ip = CONFIG.serverIp;
        this.port = CONFIG.serverPort;
        this.padId = null;
        this.deleteValue = 'delete';
        this.emptyValue = 'empty';
    }

    setPadID(id) {
        this.padId = id;
    }
    ipAndPort() {
        return this.ip + ":" + this.port;
    }

    modifyPad(modInfo) {

        var date = this.ISODateString(new Date());

        modInfo.Req_date = Date.now()

        console.log(modInfo);

        Vue.axios.put(this.ipAndPort() + "/Edit", modInfo)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

    }

    //returns a promise. it's handled at the caller
    createPadRequest() {
        //console.log("create pad request called ");
        return Vue.axios.post(this.ipAndPort() + "/NewPad");
    }

    loadPadRequest(padId) {
        return Vue.axios.get(this.ipAndPort() + "/LoadPad/" + padId);
    }

    modifyTitle(title, padID) {
        console.log("modifyTitle Called with: " + title);
        var info = {
            id: padID,
            name: title
        }
        return Vue.axios.post(this.ipAndPort() + "/RenameFile" + info);
    }
    renameDoc(retitle) {
        Vue.axios.post(this.ipAndPort() + "/settings", retitle).then(
            result => {
                console.log(result);
            },
            function(err) {
                this.errors.push(err);
            }
        );
    }
    emptyDoc() {
        console.log("aimilios empty document !");
        Vue.axios.post(this.ipAndPort() + "/settings", this.emptyValue).then(
            result => {
                console.log(result);
                this.$route.edit;
            },
            function(err) {
                this.errors.push(err);
            }
        );
    }
    deleteDoc() {
        console.log("aimilios delete document !");

        Vue.axios.post(this.ipAndPort() + "/settings", this.deleteValue).then(
            result => {
                console.log(result);
                this.$route.MainContent;
            },
            function(err) {
                this.errors.push(err);
            }
        );
    }

    getTitle() {
        return Vue.axios.get(this.ipAndPort() + "/Edit/" + padId); //to exoume leei, ante vres to
    }


    checkForChange() {
        console.log("check for change called!");

        Vue.axios.get(this.ipAndPort() + "/Edit/" + padId).then(
            result => {
                console.log(result);
                //do something with the changes
                //must put the changes in existing pad, with the existing functions propably
            },
            function(err) {
                this.errors.push(err);
            }
        );
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