import { Execution } from './execution';
import { Side } from './types';
//import { jsExecutions } from '../data';

/**
 * A buy or sell order placed with a broker.
 */
export class Placement {
    executionMap: Map<string, Execution> = new Map();

    constructor(
        readonly id: string,
        public side: Side,
        public symbol: string,
        public quantity: number
    ) {}

    execute(execution: Execution) {
        this.executionMap.set(execution.id, execution);
    }

    get done(): number {
        // Convert executionMap into an array
        // Use the array reduce function to compute done

        const values = Array.from(this.executionMap.values());

        const summary = values.reduce(
            function({ done }, value) {
                return {
                    done: done + value.quantity
                };
            },
            {
                done: 0
            }
        );

        return summary.done;
    }
}
