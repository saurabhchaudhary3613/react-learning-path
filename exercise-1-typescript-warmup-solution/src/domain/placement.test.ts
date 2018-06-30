import { Execution } from './execution';
import { Placement } from './placement';
import { Side } from './types';

test('A partially executed placement returns the correct done quantity', () => {
    const placement = new Placement('p110', Side.BUY, 'AAPL', 3000);
    const execution = new Execution('e111', 300);
    placement.execute(execution);
    expect(placement.done).toBeCloseTo(300);
});

test('A partially executed placement returns the correct done quantity', () => {
    const placement = new Placement('p210', Side.SELL, 'MSFT', 6000);
    const execution = new Execution('e211', 2000);
    placement.execute(execution);
    expect(placement.done).toBeCloseTo(2000);
});

test('A partially executed placement returns the correct done quantity', () => {
    const placement = new Placement('p120', Side.BUY, 'AAPL', 4000);
    const execution1 = new Execution('e121', 800);
    const execution2 = new Execution('e122', 1200);
    placement.execute(execution1);
    placement.execute(execution2);
    expect(placement.done).toBeCloseTo(2000);
});
