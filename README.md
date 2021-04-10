# raincloud_for_plots

Rain Problem:

We are going to help a farmer. We will be building the functional code for an application that determines his plot of land and puts water for each plant.
The cool part is that we will use organic means and generate a rain cloud, so account for how the rain cloud would generate and rain would fall. We will have the farmer push a button and then start the rain cloud, and then alert the farmer when it's complete. (console output of time is fine).

1 - Let's start with a structure
2 - Let's write the function to generate the rain
3 - Let's determine how long it will take and alert the farmer of the time it took to water his field.

Hints: Each plant just needs 1 drop of water (rain). His field has 10 x 10 plants. It doesn't matter if a plant gets more than 1 drop of rain, but each plant has to have at least 1 drop.

Bonus: What if each plant required 3 drops of water instead of 1.

Any crop size, 10 by 5 or 10 by 10.

The rain will always be inside the crop section, but it won’t be consistent on location.

Two tests minimum are needed.

---

## Notes

### Features

#### Determines his plot of land

In a real life scenario, the farmer doesn't care about the details and is willing to enter dimensions or the farmer might find that tedious especially if there's multiple plots.

Therefore, a datasouce will be used to gather all data on the farmer's plot. The data will include the dimensions along with minimum water requirements per plant.

#### How the rain cloud would generate

Values that are connected to hardware are required. In a perfect scenario, the rain cloud would be able to produce droplets at incredible speeds. However, to mimic a realistic world, the value of longest waiting period that can occur for a rain drop must be provided.

#### how the rain cloud would fall

Rain is never consistent. Rain drops can fall at different speeds and at random locations. Therefore, randomizers will be needed to mimic both scenarios.

#### Water for each plant

There will be times that certain plants may need more than one droplet to survive. Therefore, a counter will be necessary to compare with the size of the plot.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Use the filepath to access the build: `raincloud_for_plots/build/index.html`

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
