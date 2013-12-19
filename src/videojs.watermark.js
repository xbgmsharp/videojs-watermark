console.log('watermark: Start');

(function() {
  console.log('watermark: Init defaults');
  var defaults = {
        file: 'Owned_Stamp.png',
        xpos: 0,
        ypos: 0,
        xrepeat: 0,
        opacity: 100,
    },
    extend = function() {
      var args, target, i, object, property;
      args = Array.prototype.slice.call(arguments);
      target = args.shift() || {};
      for (i in args) {
        object = args[i];
        for (property in object) {
          if (object.hasOwnProperty(property)) {
            if (typeof object[property] === 'object') {
              target[property] = extend(target[property], object[property]);
            } else {
              target[property] = object[property];
            }
          }
        }
      }
      return target;
    };

  /**
   * register the thubmnails plugin
   */
  videojs.plugin('watermark', function(options) {
    console.log('watermark: Register init');

    var settings, video, div, img;
    settings = extend(defaults, options);

    /* Grab the necessary DOM elements */
    video = this.el();

    // create the watermark element
    div = document.createElement('div');
    img = document.createElement('img');
    div.appendChild(img);
    img.className = 'vjs-watermark';
    img.src = options.file;
    //img.style.bottom = "0";
    //img.style.right = "0";
    if ((options.ypos == 0) && (options.xpos == 0)) // Top left
    {
      img.style.top = "0";
      img.style.left = "0";
    }
    else if ((options.ypos == 0) && (options.xpos == 100)) // Top right
    {
      img.style.top = "0";
      img.style.right = "0";
    }
    else if ((options.ypos == 100) && (options.xpos == 100)) // Bottom right
    {
      img.style.bottom = "0";
      img.style.right = "0";
    }
    else if ((options.ypos == 100) && (options.xpos == 0)) // Bottom left
    {
      img.style.bottom = "0";
      img.style.left = "0";
    }
    else if ((options.ypos == 50) && (options.xpos == 50)) // Center
    {
      img.style.top = (this.height()/2)+"px";
      img.style.left = (this.width()/2)+"px";
    }
    div.style.opacity = options.opacity;

    //div.style.backgroundImage = "url("+options.file+")";
    //div.style.backgroundPosition.x = options.xpos+"%";
    //div.style.backgroundPosition.y = options.ypos+"%";
    //div.style.backgroundRepeat = options.xrepeat;
    //div.style.opacity = (options.opacity/100);

    // add the watermark to the player
    video.appendChild(div);

    //video.oncontextmenu = function(){alert("Hello!");}
    console.log('watermark: Register end');
  });
})();
