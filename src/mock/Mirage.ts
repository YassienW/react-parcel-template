import {Server} from "miragejs";

import route from "./route";

export function startMirage(environment = "development"){
    return new Server({
        environment,
        models: {

        },
        factories: {

        },
        seeds(){

        },
        routes(){
            this.namespace = "/";

            route.call(this);
        },
    });
}

