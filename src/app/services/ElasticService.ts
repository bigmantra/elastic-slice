    import {services} from "./services";

    export class ElasticService {
        public client:any;
        private esFactory:any;
        private host:any;

        static $inject = ['esFactory', 'eslURL','$location'];
        constructor(esFactory:any, eslURL:any,$location:any) {
            this.esFactory = esFactory;
            this.setHost($location.host() + ':' + $location.port() + eslURL);
        }

        public setHost(host:any) {
            if (host === this.host) {
                return false;
            }

            this.host = host;
            this.client = this.esFactory({
                host: host,
                calcDeadTimeout: "flat"
            });

            return true;
        }
    }


