export class ConfigService {
    constructor() {
        this.unknown = false;
        this.load();
    }

    load() {
        try {
            return angular.extend(this, angular.fromJson(sessionStorage.getItem('config')));
        } catch (error) {
            console.log(error);
        }

        return this;
    }

    save() {
        sessionStorage.setItem('config', angular.toJson(angular.extend({}, this)));

        if (this.development) {
            console.log('-> App configuration saved');
            console.log(sessionStorage.getItem('config'));
        }
    }
}
