class RequestsController {
    constructor(ConfigService, $state) {
        this.unknown = ConfigService.load().unknown;
        this.$state = $state;
    }
}

export const requestsComponent = {
    controller: RequestsController,
    templateUrl: '/views/requests.html'
};
