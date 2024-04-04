requirejs(['./mixpanel.amd'], function(mixpanel) {

    mixpanel.init("c776e46536c51dc4aac9940cdd098961", {
        debug: true,
        loaded: function() {
            debug: true, 
            track_pageview: "url-with-path-and-query-string", 
            persistence: 'localStorage'
        }
    });
});
