import {
    loadNgModule,
    ngModule
} from '../bootstrap/ngModule';

import {
    waterfallComponent
} from './waterfall.component';

import {
    waterfallState
} from './waterfall.state';

const waterfallModule = {
    components: {
        waterfallComponent
    },
    states: [waterfallState],
    configBlocks: [],
    runBlocks: []
};

loadNgModule(ngModule, waterfallModule);
