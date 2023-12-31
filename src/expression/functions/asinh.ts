import { Function } from "../Function";
import { ReturnType } from "../../utils/types";

/**
 * Returns the inverse hyperbolic sine (hyperbolic arcsine) of a value
 *
 * @export
 * @class Function
 */
export default class FunctionImplementation extends Function {
  constructor() {
    super("asinh", {
      paramCount: 1,
      returnType: ReturnType.NUMBER,
      params: [ReturnType.NUMBER],
      mapping: {
        MongoDB: "$asinh",
        PostgreSQL: "ASINH",
        MySQL: "n/a",
      },
    });
  }
}
