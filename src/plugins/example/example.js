import Test from "./components/Test.vue";


var globalApi = {};

export default () => {
    if (globalApi.apiHandler === undefined) {

        globalApi.apiHandler = () => {

        }
    }


    return {
        install: (app, options) => {
            globalApi.apiHandler();
            console.log("Options", options);
            /* declare global component */
            app.component("ex-test", Test);
        }
    }
}



