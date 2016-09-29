Video.js Watermark
=======================
A plugin display a watermak on top of the video with [Video.js](https://github.com/videojs/video.js/).

Using the Plugin
----------------
The plugin automatically registers itself when you include 'videojs.watermark.js' in your page:

    <script src='videojs.watermark.js'></script>

You probably want to include the default stylesheet, too. It handles showing the image over the video:

    <link href="videojs.watermark.css" rel="stylesheet">

Once you have your video element created, you can activate the watermark plugin.
The plugin take 5 options ``file`` and ``xpos`` and `ypos`` and ``xrepeat`` and ``opacity``.
It use the CSS show the image over the video.

    video.watermark({
        file: 'watermarks.png',
        xpos: 50,
        ypos: 50,
        xrepeat: 0,
        opacity: 0.5,
    });

or

    data-setup='{ "plugins": { "watermark": { "file": "watermarks.png", "xpos": "50", "ypos": "50" } } }'

Center:
    xpos: 50
    ypos: 50

Bottom right:
    xpos: 100
    ypos: 100

Top left:
    xpos: 0
    ypos: 0

Options
-------
A few more options has been add to do cool stuff. Here are all the defaults settings.
```text
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
    }
```

Known Issues
------------
It won't work when using the flash fallback.

Licence
-------
The piwigo-videojs plugin for Piwigo is free software:  you can redistribute it
and/or  modify  it under  the  terms  of the  GNU  General  Public License  as
published by the Free Software Foundation.

This program  is distributed in the hope  that it will be  useful, but WITHOUT
ANY WARRANTY; without even the  implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

See <http://www.gnu.org/licenses/gpl.html>.

