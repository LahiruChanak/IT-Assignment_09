// Load the customer and item counts
function loadCount() {
  const customerCount = customerDatabase.length.toString();
  $("#customerCount").text(customerCount);

  const itemCount = itemDatabase.length.toString();
  $("#itemCount").text(itemCount);
}

// Load order count
function orderCount() {
  const orderCount = orderDatabase.length.toString();
  $("#orderCount").text(orderCount);
}
