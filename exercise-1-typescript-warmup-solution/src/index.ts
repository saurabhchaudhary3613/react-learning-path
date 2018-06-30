/* tslint:disable:no-console */

import { loadOrders } from './adapters/order.adapter';
import { jsPlacements, jsExecutions } from './data';
import { Side, Order, Placement } from './domain';

const orderMap = loadOrders();

const executions = (placementObj: Placement) => {
    jsExecutions.forEach(placement => {
        if (placement.placementId === placementObj.id) {
            placementObj.execute(placement);
        }
    });
};

const placements = (order: Order) => {
    jsPlacements.forEach(placement => {
        if (placement.orderId === order.id) {
            const side: Side =
                placement.side == Side.BUY ? Side.BUY : Side.SELL;
            const placementObj = new Placement(
                placement.id,
                side,
                placement.symbol,
                placement.quantity
            );
            executions(placementObj);
            order.place(placementObj);
        }
    });
};

// iterate through orders and log their status
orderMap.forEach(val => {
    placements(val);
    console.log(val.status);
});
console.log(`${orderMap.size} orders`);
