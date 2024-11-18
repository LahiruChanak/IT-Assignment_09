function generateNextID(previousID) {
  // Extract the numeric part of the ID
  const numericValue = parseInt(previousID.replace(/\D/g, ""));

  // Increment the numeric part
  const nextNumericValue = numericValue + 1;

  // Pad the numeric part with leading zeros if necessary
  const nextNumericStr = nextNumericValue
    .toString()
    .padStart(previousID.length - 1, "0");

  // Construct the next ID by combining the prefix and the new numeric part
  const prefix = previousID.replace(/\d/g, "");
  const nextID = prefix + nextNumericStr;

  return nextID;
}
