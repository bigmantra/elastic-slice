    import {services} from "./services";
    
    export class ElasticService {
        public client:any;
        private esFactory:any;
        private host:any;

        static $inject = ['esFactory', 'eslHost'];
        constructor(esFactory:any, eslHost:any) {
            this.esFactory = esFactory;
            this.setHost(eslHost);
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


