import {
    config
} from '../config/index';

import {
    loadNgModule,
    ngModule
} from '../bootstrap/ngModule';

import {
    ConfigService
} from './config.service';

import './redirectHookRunBlock';
import './service';

let configService = new ConfigService();
configService.unknown = config.unknown;
configService.save();

const globalModule = {
    components: {},
    services: {
        ConfigService
    },
    runBlocks: []
};

loadNgModule(ngModule, globalModule);
