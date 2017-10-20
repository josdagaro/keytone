class FunctionsController {
    constructor(ConfigService, $state) {
        this.unknown = ConfigService.load().unknown;
        this.$state = $state;
    }
}

export const functionsComponent = {
    controller: FunctionsController,
    templateUrl: '/views/functions.html'
};
