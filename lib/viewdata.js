/*
This file houses functions to manage in-app data that is accessed during transitions between 
view resources.
*/

function ViewData() {}

ViewData.prototype.ControllerRouteURL = "https://boomdyno.herokuapp.com/";

ViewData.prototype.storeUserDetails = function(key, value) { $.cookie(key, value) };
ViewData.prototype.getStoredUserDetail = function(key) { return $.cookie(key) };
ViewData.prototype.deleteStoredUserDetail = function(key) { $.removeCookie(key) };
ViewData.prototype.clearUserDetails = function() {
    var cookies = $.cookie();
    for (var cookie in cookies) {
        $.removeCookie(cookie);
    }
};