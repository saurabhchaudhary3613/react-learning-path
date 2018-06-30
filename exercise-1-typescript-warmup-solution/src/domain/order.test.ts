import { Order, OrderStatus } from './order';
import { Placement } from './placement';
import { Side } from './types';

test('A partially placed order returns the correct uncommitted percentage', () => {
    const order = new Order('o100', Side.BUY, 'AAPL', 10000);
    const placement = new Placement('p110', Side.BUY, 'AAPL', 3000);
    order.place(placement);
    expect(order.status.pctUncommitted).toBeCloseTo(0.7);
});

test('A partially placed order returns the correct uncommitted percentage', () => {
    const order = new Order('o200', Side.SELL, 'MSFT', 10000);
    const placement1 = new Placement('p210', Side.SELL, 'MSFT', 6000);
    const placement2 = new Placement('p220', Side.SELL, 'MSFT', 1000);
    const placement3 = new Placement('p230', Side.SELL, 'MSFT', 1000);
    order.place(placement1);
    order.place(placement2);
    order.place(placement3);
    expect(order.status.pctUncommitted).toBeCloseTo(0.2);
});
