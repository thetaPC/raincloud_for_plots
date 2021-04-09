import React from 'react';
import { plotsData } from '../../data/plots';
import '../../styles/App/App.css';

function App() {
  let initiateRaincloud = async () => {
    // TODO: Allow each plot to have different water minimum requirement per plant.
    // Using performance instead of a setTimeout or setInterval to improve time accuracy.
    const t0 = performance.now();

    // Hashmap to keep track of how many times a specific plant was watered.
    // Keeping track of water droplets may be useful for a future feature request.
    let plants = new Map();
    let isAllPlantsWatered = false;
    const maximumTimeForDropToForm = 1000;

    // TODO: Allow the farmer to select which plot he wants the rain cloud to generate over.
    const selectedPlot = plotsData.plotA;
    /* Using a datasource to determine his plot.
    This would allow a farmer to select from multiple plots. */
    const sizeOfPlot = selectedPlot.width * selectedPlot.length;

    console.log('raining...');
    while (!isAllPlantsWatered) {
      // Randomize water drop location along with random rain drop creation rate.
      // This mocks a rain cloud.
      // In a perfect world, the engineers could generate the droplets within milliseconds.
      // However, realistically the rain cloud will be limited to its build and the rate won't be perfected.
      let waterDropletLocation = await createRainDrop(sizeOfPlot, maximumTimeForDropToForm);
      if (!plants.has(waterDropletLocation)) {
        plants.set(waterDropletLocation, 1);
      } else {
        plants.set(waterDropletLocation, plants.get(waterDropletLocation) + 1);
      }
      // Check if all plants have been watered.
      if (plants.size === sizeOfPlot) {
        isAllPlantsWatered = true;
      }
    }
    console.log('all watered');
    const t1 = performance.now();
    console.log(`Call to doSomething took ${(t1 - t0) / 1000} seconds.`);
  };

  const wait = (milliseconds) => {
    return new Promise(res => setTimeout(res, milliseconds))
  };

  let createRainDrop = async (sizeOfPlot, maximumTimeForDropToForm) => {
    let rainDropTimeToForm = Math.floor(Math.random() * maximumTimeForDropToForm) + 1;
    await wait(rainDropTimeToForm);
    console.log('drop');
    return Math.floor(Math.random() * sizeOfPlot) + 1;
  };


  return (
    <div className="App">
      <button id="rain" onClick={initiateRaincloud}>Rain Now</button>
    </div>
  );
}

export default App;
