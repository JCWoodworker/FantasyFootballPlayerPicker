export const removeElementsById = (array1, array2) => {
  // Create a map of object IDs to objects.
  const objectMap = new Map();
  for (const object of array2) {
    objectMap.set(object.PlayerID, object);
  }

  // Iterate over the first array of objects and remove any objects with the same ID from the map.
  for (const object of array1) {
    const mappedObject = objectMap.get(object.PlayerID);
    if (mappedObject) {
      objectMap.delete(object.PlayerID);
    }
  }

  // Return the array of objects that are still in the map.
  return Array.from(objectMap.values());
}

export default removeElementsById
