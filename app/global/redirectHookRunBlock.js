function redirectHookRunBlock($transitions, current, target) {
    let redirection = {to: (state) => state.name === current};

    let redirect = (transition) => {
        let $state = transition.router.stateService;
        return $state.target(target, undefined, {location: true});
    };

    $transitions.onBefore(redirection, redirect, {priority: 10});
}
