import {
    config
} from '../config/index';

import {
    loadNgModule,
    ngModule
} from '../bootstrap/ngModule';

import {
    ConfigurationService
} from './configuration.service';

import './redirectHookRunBlock';
import './service';

let configurationService = new ConfigurationService();
configurationService.development = config.development;
configurationService.save();

const globalModule = {
    components: {},
    services: {
        ConfigurationService
    },
    runBlocks: []
};

loadNgModule(ngModule, globalModule);
