var _ = require('common/util');

//define what layers that you will using
var layer = {
	background: 0,
	primaryObj: 1,
	count: 2 // total of used layer, background & primaryObj.
};
var xObj = 0, yObj = 0;
_.extend(exports, {
	':load': function() {
		var self = this;
		
		//declare variable for SceneView in parent form
		var scene = this.get('scene');
		
		//configure total of layer that will be used in existing sceneView
		scene.setLayers(layer.count);
		
		//setup the first layer --> background
		//first, define the sprite sheet using below command
		//.defineSpritesheet('define_variable_for_your_background_layer', your_image_location, width_of_your_image, height_of_your_image);
		scene.defineSpritesheet('bg', app.imageURL('bg.jpg'), 100, 100);
		
		//second, setup the background layer
		//if the image want to be repeated, use 'true' in tile, if not the kindly use 'false'
		//.setLayerBackground(existing-layer, { sprite: variable-that-have-been-defined-before, x: x-position, y: y-position, width: width-of-the-layer, height: width-of-the-layer, tile: boolean });
		scene.setLayerBackground(layer.bg, { sprite:'bg', x:-16, y:-5, width: 500, height: 500, tile:true });
		
		//third, adding configured layer to the SceneView
		//.add({ sprite: variable-that-have-been-defined-before, x: x-pos, y: y-pos, layer: layer-number, frame: frame-number });
		scene.add({ sprite:'bg', x:0, y:0, layer:0, frame:0 });
		
		scene.defineSpritesheet('po', app.imageURL('primobj.jpg'), 50, 50);
		scene.setLayerBackground(layer.primaryObj, { sprite:'po', x:0, y:0, width: 50, height: 50, tile:false });
		scene.add({ sprite:'po', x:0, y:0, layer:1, frame:0 });
	},

	':keypress': function(key) {
		var self = this;
		var scene = this.get('scene');
		
		if(key === 'up'){
			yObj--;
			scene.changeLayer(layer.primaryObj, {
				x: xObj, y: yObj, width:50, height:50, visible:true
			});
		}
		else if(key === 'down'){
			yObj++;
			scene.changeLayer(layer.primaryObj, {
				x: xObj, y: yObj, width:50, height:50, visible:true
			});
		}
		else if(key === 'left'){
			xObj--;
			scene.changeLayer(layer.primaryObj, {
				x: xObj, y: yObj, width:50, height:50, visible:true
			});
		}
		else if(key === 'right'){
			xObj++;
			scene.changeLayer(layer.primaryObj, {
				x: xObj, y: yObj, width:50, height:50, visible:true
			});
		}
	}
});