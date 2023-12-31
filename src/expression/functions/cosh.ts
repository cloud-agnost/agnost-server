import { Function } from "../Function";
import { ReturnType } from "../../utils/types";

/**
 * Returns the hyperbolic cosine of a value that is measured in radians
 *
 * @export
 * @class Function
 */
export default class FunctionImplementation extends Function {
  constructor() {
    super("cosh", {
      paramCount: 1,
      returnType: ReturnType.NUMBER,
      params: [ReturnType.NUMBER],
      mapping: {
        MongoDB: "$cosh",
        PostgreSQL: "COSH",
        MySQL: "n/a",
      },
    });
  }
}
