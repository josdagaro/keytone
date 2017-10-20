export const dashboardState = {
    name: 'dashboard',
    redirectTo: 'requests',
    component: 'dashboardComponent'
};

export const requestsState = {
    parent: 'dashboard',
    name: 'requests',
    url: '/',
    component: 'requestsComponent'
};
