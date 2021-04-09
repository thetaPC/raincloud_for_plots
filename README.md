# raincloud_for_plots



Rain Problem: 

We are going to help a farmer. We will be building the functional code for an application that determines his plot of land and puts water for each plant. 
The cool part is that we will use organic means and generate a rain cloud, so account for how the rain cloud would generate and rain would fall. We will have the farmer push a button and then start the rain cloud, and then alert the farmer when it's complete. (console output of time is fine).

1 - Let's start with a structure 
2 - Let's write the function to generate the rain
3 - Let's determine how long it will take and alert the farmer of the time it took to water his field. 

Hints: Each plant just needs 1 drop of water (rain). His field has 10 x 10 plants. It doesn't matter if a plant gets more than 1 drop of rain, but each plant has to have at least 1 drop.

Bonus: What if each plant required 3 drops of water instead of 1. 

---

## Notes


key points:
determines his plot of land - would a visual be provided or would it be like the farmer minecraft or maybe a multi array with plant data or json file. in a real life scenario then either the farmer doesn't care about the details and is okay to enter dimensions or the farmer records everything so possibly saves the data to a database and the cloud would pull plant info like plot size from a datasource (api endpoint). however in a larger scope, there will be different types of farmers. it would be best to send the plot size via a datasource.

each plant would be inside a square, etc, that square would have dimensions. does the cloud distinguish the squares by a boundary strip or by also having square measurements under the returned data?

how the rain cloud would generate - need certain values like gravity, the height that the rain cloud is created in the air

how the rain cloud would fall - would fall based on random time and gravity

water for each plant - must keep in mind that a plant can be watered multiple times


Any crop size, 10 by 5 or 10 by 10


Always be inside the crop section. But it won’t be consistent. Random points. Make sure to write two tests. 
