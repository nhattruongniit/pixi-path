var canvas, app;
var loader = PIXI.loader;
var resources = PIXI.loader.resources;
var Sprite = PIXI.Sprite;
var TextureCache = PIXI.utils.TextureCache;
var Rectangle = PIXI.Rectangle;

app = new PIXI.Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1
});

canvas = document.getElementById("myCanvas").appendChild(app.view);

loader
// Loading images into the texture cache
// .add([
//     "../images/cat.png",
//     "../images/explorer.png",
//     "../images/tileset.png"
// ])

//Loading the texture atlas
    .add("../images/treasureHunter.json")
    .on("progress", loadProgressHandler)
    .load(setup);

function loadProgressHandler(loader, resources) {
    console.log('loading: ' + resources.url + "|" + "progress: " + loader.progress + "%");
}


var dungeon, explorer, treasure, id;

function setup() {}