// [root]index.js

requirejs(['assets/js/mixpanel.amd.js'], function(mixpanel) {

    mixpanel.init("c776e46536c51dc4aac9940cdd098961", {
        debug: true,
        track_pageview: "url-with-path-and-query-string", 
        persistence: 'localStorage'
    });
});
