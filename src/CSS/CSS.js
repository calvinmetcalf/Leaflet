(function(){
    function addCSS (cssText,cssTextIE) {
        if (document.createStyleSheet) { //this is true for IE 8 and older
            var styleSheet = document.createStyleSheet();
            styleSheet.cssText = cssText+cssTextIE;
        }
        else {
            var head = document.getElementByTagName("head")[0];
            var styleElt = document.createElement("style");
            head.appendChild(styleElt);
            styleElt.innerHTML = cssText;
        }
    }
    var css = {main : '.leaflet-map-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-pane,.leaflet-overlay-pane,.leaflet-shadow-pane,.leaflet-marker-pane,.leaflet-popup-pane,.leaflet-overlay-pane svg,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute}.leaflet-container{overflow:hidden;outline:0}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-moz-user-select:none;-webkit-user-select:none;user-select:none}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-clickable{cursor:pointer}.leaflet-dragging,.leaflet-dragging .leaflet-clickable{cursor:move}.leaflet-container img{max-width:none!important}.leaflet-container img.leaflet-image-layer{max-width:15000px!important}.leaflet-tile-pane{z-index:2}.leaflet-objects-pane{z-index:3}.leaflet-overlay-pane{z-index:4}.leaflet-shadow-pane{z-index:5}.leaflet-marker-pane{z-index:6}.leaflet-popup-pane{z-index:7}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0}.leaflet-control{position:relative;z-index:7;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-control-zoom{-moz-border-radius:7px;-webkit-border-radius:7px;border-radius:7px}.leaflet-control-zoom{padding:5px;background:rgba(0,0,0,0.25)}.leaflet-control-zoom a{background-color:rgba(255,255,255,0.75)}.leaflet-control-zoom a,.leaflet-control-layers a{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-control-zoom a{-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;width:19px;height:19px}.leaflet-control-zoom a:hover{background-color:#fff}.leaflet-touch .leaflet-control-zoom a{width:27px;height:27px}.leaflet-control-zoom-in{background-image:url(images/zoom-in.png);margin-bottom:5px}.leaflet-control-zoom-out{background-image:url(images/zoom-out.png)}.leaflet-control-layers{box-shadow:0 1px 7px #999;background:#f8f8f9;-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px}.leaflet-control-layers a{background-image:url(images/layers.png);width:36px;height:36px}.leaflet-touch .leaflet-control-layers a{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;font:12px/1.5 "Helvetica Neue",Arial,Helvetica,sans-serif;color:#333;background:#fff}.leaflet-control-layers input{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-container .leaflet-control-attribution{background-color:rgba(255,255,255,0.7);box-shadow:0 0 5px #bbb;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333}.leaflet-container .leaflet-control-attribution,.leaflet-container .leaflet-control-scale{font:11px/1.5 "Helvetica Neue",Arial,Helvetica,sans-serif}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:0;color:black;line-height:1;font-size:10px;padding-bottom:2px;text-shadow:1px 1px 1px #fff;background-color:rgba(255,255,255,0.5)}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;padding-top:1px;border-bottom:0;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers{box-shadow:none}.leaflet-touch .leaflet-control-layers{border:5px solid #bbb}.leaflet-fade-anim .leaflet-tile,.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;-o-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-tile-loaded,.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0.25,0.1,0.25,0.75);-moz-transition:-moz-transform .25s cubic-bezier(0.25,0.1,0.25,0.75);-o-transition:-o-transform .25s cubic-bezier(0.25,0.1,0.25,0.75);transition:transform .25s cubic-bezier(0.25,0.1,0.25,0.75)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile,.leaflet-touching .leaflet-zoom-animated{-webkit-transition:none;-moz-transition:none;-o-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-popup{position:absolute;text-align:center}.leaflet-popup-content-wrapper{padding:1px;text-align:left}.leaflet-popup-content{margin:14px 20px}.leaflet-popup-tip-container{margin:0 auto;width:40px;height:20px;position:relative;overflow:hidden}.leaflet-popup-tip{width:15px;height:15px;padding:1px;margin:-8px auto 0;-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;padding:4px 5px 0 0;text-align:center;width:18px;height:14px;font:16px/14px Tahoma,Verdana,sans-serif;color:#c3c3c3;text-decoration:none;font-weight:bold}.leaflet-container a.leaflet-popup-close-button:hover{color:#999}.leaflet-popup-content p{margin:18px 0}.leaflet-popup-scrolled{overflow:auto;border-bottom:1px solid #ddd;border-top:1px solid #ddd}.leaflet-container{background:#ddd}.leaflet-container a{color:#0078a8}.leaflet-container a.leaflet-active{outline:2px solid orange}.leaflet-zoom-box{border:2px dotted #05f;background:white;opacity:.5}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-editing-icon{border-radius:2px}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:white;box-shadow:0 3px 14px rgba(0,0,0,0.35);-webkit-box-shadow:0 3px 18px rgba(0,0,0,0.33)}.leaflet-popup-content-wrapper{-moz-border-radius:20px;-webkit-border-radius:20px;border-radius:20px}.leaflet-popup-content{font:12px/1.4 "Helvetica Neue",Arial,Helvetica,sans-serif}',
    ie : '.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{display:inline}.leaflet-popup-tip{width:21px;_width:27px;margin:0 auto;_margin-top:-3px;filter:progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678,M12=0.70710678,M21=-0.70710678,M22=0.70710678);-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)"}.leaflet-popup-tip-container{margin-top:-1px}.leaflet-popup-content-wrapper,.leaflet-popup-tip{border:1px solid #bbb}.leaflet-control-zoom{filter:progid:DXImageTransform.Microsoft.gradient(startColorStr="#3F000000",EndColorStr="#3F000000")}.leaflet-control-zoom a{background-color:#eee}.leaflet-control-zoom a:hover{background-color:#fff}.leaflet-control-attribution,.leaflet-control-layers{background:white}' };
    addCSS(css.main, css.ie);
}());