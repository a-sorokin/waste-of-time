import { add, equals, not } from 'apps/ast/base/functions.js';

// todo: refactor and improve.
export class Evaluator {
  evaluate(expression) {
    if (expression.type == 'literal') {
      var val = expression.value;
      return val;
    } else {
      if (expression.name == 'add') {
        let param1 = this.evaluate(expression.parameters[0]);
        let param2 = this.evaluate(expression.parameters[1]);
        return add(param1, param2);
      } else if (expression.name == 'equals') {
        let param1 = this.evaluate(expression.parameters[0]);
        let param2 = this.evaluate(expression.parameters[1]);
        return equals(param1, param2);
      } else if (expression.name == 'not') {
        return not(expression.parameters[0]);
      }
    }
    throw 'Unknown function';
  }
}
