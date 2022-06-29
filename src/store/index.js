import {createApp} from "vue";
import Vuex from "vuex";
import test from "./modelus/test"

createApp().use(Vuex);

export default new Vuex.Store({
    modules: {
        test
    }
})