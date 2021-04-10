import React, { useState } from 'react';
import { plotsData } from '../../data/plots';
import '../../styles/App/App.css';

function App() {
  const [option, setOption] = useState('plotA');
  const [rainDurationText, setRainDurationText] = useState('');
  const [rainDropList, setRainDropList] = useState([]);

  const screenWidth = window.innerWidth;

  let initiateRaincloud = async (plot) => {
    // TODO: Allow each plot to have different water minimum requirement per plant.
    // Using performance instead of a setTimeout or setInterval to improve time accuracy.
    const t0: number = performance.now();

    setRainDurationText('');

    // Hashmap to keep track of how many times a specific plant was watered.
    // Keeping track of water droplets may be useful for a future feature request.
    let plants: Map<number, number> = new Map();
    let isAllPlantsWatered: boolean = false;
    // This will keep track of how many plants were watered based on minimum water requirements.
    let amountOfPlantsWatered: number = 0;
    const maximumTimeForDropToForm: number = 500;

    // TODO: Allow the farmer to select which plot he wants the rain cloud to generate over.
    const selectedPlot: any = plotsData[plot];
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
        if (selectedPlot.minimumWaterRequired === 1) {
          amountOfPlantsWatered++;
        }
      } else {
        plants.set(waterDropletLocation, plants.get(waterDropletLocation) + 1);
        if (selectedPlot.minimumWaterRequired === plants.get(waterDropletLocation)) {
          amountOfPlantsWatered++;
        }
      }
      // Check if all plants have been watered.
      if (amountOfPlantsWatered === sizeOfPlot) {
        isAllPlantsWatered = true;
      }
    }
    console.log('all watered');
    const t1 = performance.now();
    console.log(`Watering the plot took ${(t1 - t0) / 1000} seconds.`);
    setRainDurationText(`Watering ${option} took ${(t1 - t0) / 1000} seconds.`);
    setRainDropList([]);
  };

  const wait = (milliseconds: number): any => {
    return new Promise(res => setTimeout(res, milliseconds))
  };

  let createRainDrop = async (sizeOfPlot: number, maximumTimeForDropToForm: number): Promise<number> => {
    let rainDropTimeToForm = Math.floor(Math.random() * maximumTimeForDropToForm) + 1;
    await wait(rainDropTimeToForm);
    console.log('drop');
    let rainDropLeftLocation = Math.floor(Math.random() * screenWidth) + 1;
    setRainDropList(state => [...state, { left: rainDropLeftLocation }]);
    return Math.floor(Math.random() * sizeOfPlot) + 1;
  };

  return (
    <div className="App">
      <select value={option} onChange={e => setOption(e.target.value)}>
        <option key="plotA" value="plotA">Plot A</option>
        <option key="plotB" value="plotB">Plot B</option>
      </select>

      <button id="rain" onClick={() => initiateRaincloud(option)}>Rain Now</button>
      <p id="rainDuration">{rainDurationText}</p>
      <div id="rainCloud">
        {rainDropList.map((rainDrop, index) => {
          return <div className="drop" style={{ left: rainDrop.left + '%' }}></div>
        })}
      </div>
    </div>
  );
}

export default App;
