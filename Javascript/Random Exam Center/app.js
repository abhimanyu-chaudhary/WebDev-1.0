function generateRandomExamCenter(centers) {
  // Get the number of centers
  const numberOfCenters = centers.length;

  // Generate a random number between 0 and the number of centers - 1
  const randomIndex = Math.floor(Math.random() * numberOfCenters);

  // Return the center at the random index
  return centers[randomIndex];
}

// Example usage:
const centers = ["New York", "London", "Tokyo"];
const examCenter = generateRandomExamCenter(centers);
console.log(examCenter); // "Tokyo"