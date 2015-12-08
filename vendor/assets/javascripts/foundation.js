////////////////////////////////////////////////////////////////////////////////
// Zurb Foundation javascript loader
////////////////////////////////////////////////////////////////////////////////
//
// This file is here to be inclueded from our application.js.
// Here we just load zurb, and the components we need.
//
// # HOW TO Update Zurb
// In order to update Zurb, please be sure to have install the
// following (FROM hhttps://github.com/zurb/bower-foundation) :
//
// 1. `cd vendor/assets/`
// 2. `npm install foundation-sites`
//
// Then ensure that the included files are OK.
//
// # LOAD javascript vendores for Zurb
// To make zurb work, we will need jQuery. Npm just ensure that the
// jQuery version is good, so better use this one for all the project.
//
//= require foundation-sites/node_modules/jquery/dist/jquery
//= require foundation-sites/js/motion-ui.js
//= require foundation-sites/js/foundation.core
//
// # LOAD Zurb Utils
//
//= require foundation-sites/js/foundation.util.box.js
//= require foundation-sites/js/foundation.util.keyboard
//= require foundation-sites/js/foundation.util.mediaQuery
//= require foundation-sites/js/foundation.util.motion
//= require foundation-sites/js/foundation.util.nest
//= require foundation-sites/js/foundation.util.timerAndImageLoader
//= require foundation-sites/js/foundation.util.touch
//= require foundation-sites/js/foundation.util.triggers
//
// ## LOAD Zurb Components
// Please be sure that the SCSS for the component are also loaded.
// As all the vendors have been loaded previously, we should not have any problems
// javascript side.
//
//= require foundation-sites/js/foundation.slider
//
// # RUN Zurb

$(function(){
    $(document).foundation();
});
