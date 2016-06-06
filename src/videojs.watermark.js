console.log('watermark: Start');

(function() {
  console.log('watermark: Init defaults');
  var defaults = {
        file: 'Owned_Stamp.png',
        xpos: 0,
        ypos: 0,
        xrepeat: 0,
        opacity: 100,
        clickable: false,
        url: "",
        className: 'vjs-watermark',
	text: false,
	debug: false
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

    //! global varible containing reference to the DOM element
    var div;

  /**
   * register the thubmnails plugin
   */
  videojs.plugin('watermark', function(settings) {
    if (settings.debug) console.log('watermark: Register init');

    var options, player, video, img, link;
    options = extend(defaults, settings);

    /* Grab the necessary DOM elements */
    player = this.el();
    video = this.el().getElementsByTagName('video')[0];

    // create the watermark element
    if (!div) {
        div = document.createElement('div');
        div.className = options.className;
    }
    else {
        //! if div already exists, empty it
        div.innerHTML = '';
    }

    // if text is set, display text
    if (options.text)
        div.textContent = options.text;

    // if img is set, add img
    if (options.file) {
        img = document.createElement('img');
        div.appendChild(img);
        img.src = options.file;
    }

    //img.style.bottom = "0";
    //img.style.right = "0";
    if ((options.ypos === 0) && (options.xpos === 0)) // Top left
    {
      div.style.top = "0";
      div.style.left = "0";
    }
    else if ((options.ypos === 0) && (options.xpos === 100)) // Top right
    {
      div.style.top = "0";
      div.style.right = "0";
    }
    else if ((options.ypos === 100) && (options.xpos === 100)) // Bottom right
    {
      div.style.bottom = "0";
      div.style.right = "0";
    }
    else if ((options.ypos === 100) && (options.xpos === 0)) // Bottom left
    {
      div.style.bottom = "0";
      div.style.left = "0";
    }
    else if ((options.ypos === 50) && (options.xpos === 50)) // Center
    {
      if (options.debug) console.log('watermark: player:' + player.width + 'x' + player.height);
      if (options.debug) console.log('watermark: video:' + video.videoWidth + 'x' + video.videoHeight);
      if (options.debug) console.log('watermark: image:' + img.width + 'x' + img.height);
      div.style.top = (this.height()/2)+"px";
      div.style.left = (this.width()/2)+"px";
    }
    div.style.opacity = options.opacity;

    //div.style.backgroundImage = "url("+options.file+")";
    //div.style.backgroundPosition.x = options.xpos+"%";
    //div.style.backgroundPosition.y = options.ypos+"%";
    //div.style.backgroundRepeat = options.xrepeat;
    //div.style.opacity = (options.opacity/100);

    //if user wants watermark to be clickable, add anchor elem
    //todo: check if options.url is an actual url?
    if (options.clickable && options.url !== "") {
      link = document.createElement("a");
      link.href = options.url;
      link.target = "_blank";
      link.appendChild(div);
      //add clickable watermark to the player
      player.appendChild(link);
    } else {
      //add normal watermark to the player
      player.appendChild(div);
    }

    if (options.debug) console.log('watermark: Register end');
  });
})();
