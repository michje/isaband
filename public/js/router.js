
define([
    'jquery',
    'underscore',
    'backbone',
    'views/header',
    'views/home/home',
    'views/about/about',
    'views/band/band',
    'views/playlist/playlist',
    'views/schedule/list',
],
function ($, _, Backbone, headerView, homeView, aboutView, bandView, playlistView, scheduleListView) {

    var Router = Backbone.Router.extend({
        routes: {
            "": "home",
            // "wines/page/:page"	: "list",
            // "wines/add"         : "addWine",
            // "wines/:id"         : "wineDetails",
            "calendar": "calendar",
            "about": "about",
            "the-band": "band",
            "playlist": "playlist"
        },

        initialize: function () {
            headerView.render();
        },
        home: function () {
            homeView.render();
            headerView.selectMenuItem('home-menuitem');
        },
        band: function () {
            bandView.render();
            headerView.selectMenuItem('the-band-menuitem');
        },
        playlist: function () {
            playlistView.render();
            headerView.selectMenuItem('playlist-menuitem');
        },
        calendar: function () {
            scheduleListView.render();
            headerView.selectMenuItem('calendar-menuitem');
        },
        about: function () {
            aboutView.render();
            headerView.selectMenuItem('about-menuitem');
        }

    });

    return new Router();
});

//    list: function (page) {
//        var p = page ? parseInt(page, 10) : 1;
//        var wineList = new WineCollection();
//        wineList.fetch({ success: function () {
//            $("#content").html(new WineListView({ model: wineList, page: p }).el);
//        }
//        });
//        this.headerView.selectMenuItem('home-menu');
//    },

//    wineDetails: function (id) {
//        var wine = new Wine({ id: id });
//        wine.fetch({ success: function () {
//            $("#content").html(new WineView({ model: wine }).el);
//        }
//        });
//        this.headerView.selectMenuItem();
//    },

//    addWine: function () {
//        var wine = new Wine();
//        $('#content').html(new WineView({ model: wine }).el);
//        this.headerView.selectMenuItem('add-menu');
//    },