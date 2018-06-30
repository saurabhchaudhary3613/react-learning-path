import { Order } from '../domain';
import { jsOrders } from '../data';
import { Side } from '../domain/types';

export function loadOrders(): Map<string, Order> {
    // load JS orders from ../../data and convert them to Order objects

    const orderMap: Map<string, Order> = new Map();

    jsOrders.forEach(order => {
        const side: Side = order.side === Side.BUY ? Side.BUY : Side.SELL;
        const orderObj = new Order(
            order.id,
            side,
            order.symbol,
            order.quantity
        );
        orderMap.set(order.id, orderObj);
    });

    return orderMap;
}
