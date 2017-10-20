import {
    loadNgModule,
    ngModule
} from '../bootstrap/ngModule';

import {
    functionsComponent
} from './functions.component';

import {
    functionsState
} from './functions.state';

const functionsModule = {
    components: {
        functionsComponent
    },
    states: [functionsState],
    configBlocks: [],
    runBlocks: []
};

loadNgModule(ngModule, functionsModule);
