let initiateRaincloud = (width, length) => {
	// TODO: Rain should not be at a consistent fall rate.
	
	// Using performance instead of a setTimeout or setInterval to improve time accuracy.
	const t0 = performance.now();
	
	// Must figure out how to determine size of plot. Better to pass it as an argument.
	const sizeOfPlot = width*length;
	
	// Hashmap to keep track of how many times a specific plant was watered.
	// Keeping track of water droplets may be useful for a future feature.
	let plants = new Map();
	let isAllPlantsWatered = false;
	
	console.log('raining...');
	while (!isAllPlantsWatered) {
		// randomize water drops
		let waterDropletLocation = Math.floor(Math.random() * sizeOfPlot) + 1;
		if (!plants.has(waterDropletLocation)) {
			plants.set(waterDropletLocation, 1);
		} else {
			plants.set(waterDropletLocation, plants.get(waterDropletLocation) + 1);
		}
		// check if all plants watered
		if (plants.size == sizeOfPlot) {
			isAllPlantsWatered = true;
		}
		// for (i = 0; i < sizeOfPlot; i++) {
			// let waterDropletLocation = Math.floor(Math.random() * sizeOfPlot) + 1;
		//}
	}
	console.log('all watered');
	const t1 = performance.now();
	// console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
	console.log(`Call to doSomething took ${(t1 - t0)/1000} seconds.`);
};