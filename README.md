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
The plugin take 5 options 'file' and 'xpos' and 'ypos' and 'xrepeat' and 'opacity'.
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

Known Issues
------------
It won't work when using the flash fallback.
