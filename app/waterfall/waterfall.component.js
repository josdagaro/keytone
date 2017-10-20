class WaterfallController {
    constructor(ConfigService, $state) {
        this.unknown = ConfigService.load().unknown;
        this.$state = $state;
    }
}

export const waterfallComponent = {
    controller: WaterfallController,
    templateUrl: '/views/waterfall.html'
};
