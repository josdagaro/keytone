class HomeController {
    constructor(ConfigurationService, $state) {
        this.development = ConfigurationService.load().development;
        this.$state = $state;
    }
}

export const homeComponent = {
    controller: HomeController,
    templateUrl: '/views/home.html'
};
