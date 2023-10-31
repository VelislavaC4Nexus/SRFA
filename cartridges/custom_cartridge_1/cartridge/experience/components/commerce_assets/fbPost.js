// link,title,width,height,merchandisersTitle,content

'use strict';
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
/**
 * Render logic for the component.
 */
module.exports.render = function (context) {
    var model = new HashMap();

    model.iframeSrc = context.content.iframeSrc;
    model.title = context.content.title;
    model.width = context.content.width;
    model.height = context.content.height;

    model.merchandisersTitle = context.content.merchandisersTitle;
    model.content = context.content.content;

    return new Template('experience/components/commerce_assets/fbPost').render(model).text;
}