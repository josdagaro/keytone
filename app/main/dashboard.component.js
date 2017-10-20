class DashboardController {
    constructor(ConfigService, $state) {
        this.unknown = ConfigService.load().unknown;
        this.$state = $state;
    }

    $onInit() {}

    isActive(path) {
        return this.$state.current.name === path;
    }
}

export const dashboardComponent = {
    controller: DashboardController,
    templateUrl: '/views/dashboard.html'
};
