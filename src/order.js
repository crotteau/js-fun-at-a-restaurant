// takeOrder
var deliveryOrders = []
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length >= 3) {
    var order =
    deliveryOrders.push(order)
    deliveryOrders.pop()
    return deliveryOrders
  } else {
      var order =
      deliveryOrders.push(order)
      return deliveryOrders
  }
}

// refundOrder
function refundOrder(orderNumber, deliveryOrders) {
  var refund = (element => element.orderNumber === orderNumber)
  var index = deliveryOrders.findIndex(refund)
    deliveryOrders.splice(index, 1)
    return deliveryOrders
  }

// listItems
function listItems(orders) {
  var itemNames = [];
  for (var i = 0; i < orders.length; i++) {
    itemNames.push(orders[i].item);
    finalItems = (itemNames.join(', '))
  }
  return finalItems;
}

// // searchOrder
function searchOrder(deliveryOrders, foodName) { 
 for (var i = 0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].item === foodName)
    return true
 } return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder 
}