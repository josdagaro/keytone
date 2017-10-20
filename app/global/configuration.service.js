export class ConfigurationService {
    constructor() {
        this.development = false;
        this.load();
    }

    load() {
        try {
            return angular.extend(this, angular.fromJson(sessionStorage.getItem('configuration')));
        } catch (error) {
            console.log(error);
        }

        return this;
    }

    save() {
        sessionStorage.setItem('configuration', angular.toJson(angular.extend({}, this)));

        if (this.development) {
            console.log('-> App configuration saved');
            console.log(sessionStorage.getItem('configuration'));
        }
    }
}
