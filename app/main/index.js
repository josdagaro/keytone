import {
    loadNgModule,
    ngModule
} from '../bootstrap/ngModule';

import {
    dashboardComponent
} from './dashboard.component';

import {
    homeComponent
} from './home.component';

import {
    dashboardState,
    homeState
} from './dashboard.state';

import {
    defaultConfigurationBlock,
    locationConfigurationBlock,
    trackingRunBlock
} from './dashboard.config';

const mainModule = {
    components: {
        dashboardComponent,
        homeComponent
    },
    states: [dashboardState, homeState],
    configBlocks: [defaultConfigurationBlock, locationConfigurationBlock],
    runBlocks: [trackingRunBlock]
};

loadNgModule(ngModule, mainModule);
