require('coffee-script/register') /* so we can require coffeescript */
require('coffee-cache').setCacheDir('.coffee/cache') /* two level is NECESSARY; coffeescript doesn't get recompiled every time we require it */
require('../compute.coffee')
