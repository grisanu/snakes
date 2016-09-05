// list of color to use
var colorsList = ["Crimson",
					"Cyan",
					"DarkBlue",
					"DarkCyan",
					"DarkGoldenRod",
					"DarkGray",
					"DarkGreen",
					"DarkKhaki",
					"DarkMagenta",
					"DarkOliveGreen",
					"DarkOrange",
					"DarkOrchid",
					"DarkRed",
					"DarkSalmon",
					"DarkSeaGreen",
					"DarkSlateBlue",
					"DarkSlateGray",
					"DarkTurquoise",
					"DarkViolet",
					"DeepPink",
					"DeepSkyBlue",
					"DimGray",
					"DodgerBlue",
					"FireBrick",
					"Magenta",
					"Maroon",
					"MediumAquaMarine",
					"MediumBlue",
					"MediumOrchid",
					"MediumPurple",
					"MediumSeaGreen",
					"MediumSlateBlue",
					"MediumSpringGreen",
					"MediumTurquoise",
					"MediumVioletRed",
					"MidnightBlue"];

function each(collection, iterator) {
	if (Array.isArray(collection)) {
	
		for (var i = 0; i < collection.length; i++) {
	
			iterator(collection[i], i, collection)
	
		}
	} else if (collection.constructor === Object){
	
		for (var i in collection) {
	
			iterator(collection[i], i, collection);
	
		}
	}
}