import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, one journey: departure, change, arrival.
// Mara leaves her mountain village at dusk; the road and the
// brass kettle carry her to the city; the turn lands on what
// "home" means by the final clause.
const entry =
  "When the last bus left her mountain village at dusk, Mara walked the gravel road with her mother's brass kettle in her arms, and by the time the city lights found her she understood that home was never the house she had left, only the weight she had chosen to carry.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
