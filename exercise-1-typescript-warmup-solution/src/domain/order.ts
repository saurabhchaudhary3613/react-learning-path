import { Placement } from './placement';
import { Side } from './types';

export interface OrderStatus {
    committed: number;
    done: number;
    notDone: number;
    uncommitted: number;
    pctDone: number;
    pctNotDone: number;
    pctUncommitted: number;
}

/**
 * An order to buy or sell a security for a specific fund.
 */
export class Order {
    placementMap: Map<string, Placement> = new Map();

    constructor(
        readonly id: string,
        public side: Side,
        public symbol: string,
        public quantity: number
    ) {}

    place(placement: Placement) {
        this.placementMap.set(placement.id, placement);
    }

    get status(): OrderStatus {
        // Convert placementMap into an array
        // Use the array reduce function to compute OrderStatus

        /**
         * notDone = committed - done
         * uncommitted = quantity - committed
         * pctDone = done / quantity
         * pctNotDone = notDone / quantity
         * pctUncommitted = uncommitted / quantity
         */

        const values: Placement[] = Array.from(this.placementMap.values());

        const summary = values.reduce(
            ({ commited, done }, currentValue) => {
                return {
                    commited: commited + currentValue.quantity,
                    done: done + currentValue.done
                };
            },
            {
                commited: 0,
                done: 0
            }
        );

        const notDone: number = summary.commited - summary.done;
        const uncommitted: number = this.quantity - summary.commited;

        const pctDone: number = summary.done / this.quantity;
        const pctNotDone: number = notDone / this.quantity;
        const pctUncommitted: number = uncommitted / this.quantity;

        return {
            committed: summary.commited,
            done: summary.done,
            notDone,
            uncommitted,
            pctDone,
            pctNotDone,
            pctUncommitted
        };
    }
}
