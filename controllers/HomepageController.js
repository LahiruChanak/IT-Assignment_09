// Customer Count
function customerCount() {
  const customerCount = customerDatabase.length.toString();
  $("#customerCount").text(customerCount);

  const itemCount = itemDatabase.length.toString();
  $("#itemCount").text(itemCount);
}

// Order Count
function orderCount() {
  const orderCount = orderDatabase.length.toString();
  $("#orderCount").text(orderCount);
}
