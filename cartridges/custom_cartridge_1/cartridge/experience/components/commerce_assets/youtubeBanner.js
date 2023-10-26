'use strict';
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
/**
 * Render logic for the component.
 */
module.exports.render = function (context) {
    var model = new HashMap();
    model.link = context.content.link
    var src;
    if (model.link.includes('https://www.youtube.com/watch?v=')) {
        src = "https://www.youtube.com/embed/" + model.link.split('=')[1];
       
    } else {
        src = 'https://www.youtube.com/embed/' + model.link;
    }

    model.src = src;
    model.width = context.content.width;
    model.height = context.content.height;

    return new Template('experience/components/commerce_assets/youtubeBanner').render(model).text;
}