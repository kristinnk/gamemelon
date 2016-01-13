var game = {
    // Run on page load.
    "onload" : function () {
        // Initialize the video.
        if (!me.video.init("screen", 640, 480, true )) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

 
        // Initialize the audio.
        me.audio.init("mp3,ogg");
 
        // Set a callback to run when loading is complete.
        me.loader.onload = this.loaded.bind(this);
      
        // Load the resources.
        me.loader.preload(game.resources);
 
        // Initialize melonJS and display a loading screen.
        me.state.change(me.state.LOADING);
    },

    // Run on game resources loaded.
    "loaded" : function () {
        //me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());
 
        // Start the game.
        me.state.change(me.state.PLAY);
    }
};


game.resources = [
	{name: "net",  type:"image", src: "img/net.png"},
	{name: "tiles",  type:"image", src: "img/tiles.png"},
	{name: "brighTiles",  type:"image", src: "img/brickTiles.png"},
	{name: "level1", type: "tmx", src: "maps/test.tmx"}
];


game.PlayScreen = me.ScreenObject.extend({
 
    onResetEvent: function() {
        me.levelDirector.loadLevel("level1");
    },
 

    onDestroyEvent: function() {
    }
 
});