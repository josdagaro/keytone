class DashboardController {
    constructor(ConfigurationService, $state) {
        this.development = ConfigurationService.load().development;
        this.$state = $state;
        this.menuIsActive = false;
    }

    $onInit() {}

    activeMenu() {
        this.menuIsActive = !this.menuIsActive;
    }

    changeMenuState(state) {
        this.menuIsActive = state;
    }
}

export const dashboardComponent = {
    controller: DashboardController,
    templateUrl: '/views/dashboard.html'
};
