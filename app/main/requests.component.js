class RequestsController {
    constructor(ConfigService, $state, NgTableParams) {
        this.unknown = ConfigService.load().unknown;
        this.$state = $state;
        this.ngTableParams = NgTableParams;
        this.setTableColumns();
        this.setTableParams();
    }

    loadTableData() {
        return [{
                method: 'PUT',
                URL: 'app/index.php',
                a: true
            },
            {
                method: 'GET',
                URL: 'app/index.php/api/collection/bases/currentUser',
                a: true
            }
        ];
    }

    setTableParams() {
        this.tableParams = new this.ngTableParams({
            sorting: {
                Time: 'desc'
            }
        }, {
            dataset: this.loadTableData()
        });
    }

    setTableColumns() {
        this.columns = [{
                field: 'method',
                title: 'Method',
                sortable: 'method'
            },
            {
                field: 'meta.simple_url',
                title: 'URL',
                sortable: 'meta.simple_url'
            },
            {
                field: 'a',
                title: 'Time',
                sortable: 'a'
            },
            {
                field: 'a',
                title: 'WT',
                sortable: 'a'
            },
            {
                field: 'a',
                title: 'CPU',
                sortable: 'a'
            },
            {
                field: 'a',
                title: 'MU',
                sortable: 'a'
            },
            {
                field: 'a',
                title: 'PMU',
                sortable: 'a'
            }
        ];
    }
}

export const requestsComponent = {
    controller: RequestsController,
    templateUrl: '/views/requests.html'
};
