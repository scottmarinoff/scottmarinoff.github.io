//mixpanel.js

import mixpanel from 'mixpanel-browser';

mixpanel.init('c776e46536c51dc4aac9940cdd098961', {debug: true, cross_subdomain_cookie: false, track_pageview: "url-with-path-and-query-string", persistence: 'localStorage'});