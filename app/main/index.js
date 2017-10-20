import {
    loadNgModule,
    ngModule
} from '../bootstrap/ngModule';

import {
    dashboardComponent
} from './dashboard.component';

import {
    requestsComponent
} from './requests.component';

import {
    dashboardState,
    requestsState
} from './dashboard.state';

import {
    defaultConfigurationBlock,
    locationConfigurationBlock,
    trackingRunBlock
} from './dashboard.config';

const mainModule = {
    components: {
        dashboardComponent,
        requestsComponent
    },
    states: [dashboardState, requestsState],
    configBlocks: [defaultConfigurationBlock, locationConfigurationBlock],
    runBlocks: [trackingRunBlock]
};

loadNgModule(ngModule, mainModule);
