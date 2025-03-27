import { add, equals, not } from "./functions";

enum EXPRESSION_TYPES {
  literal = "literal",
}

enum NAMES {
  add = "add",
  equals = "equals",
  not = "not",
}

type Expression = {
  type: EXPRESSION_TYPES;
  name: NAMES;
  parameters: Expression[];
  value: unknown;
};

const evaluate = (expression: Expression) => {
  if (expression.type == EXPRESSION_TYPES.literal) {
    return expression.value;
  }

  if (expression.name == NAMES.add) {
    const param1 = evaluate(expression.parameters[0]);
    const param2 = evaluate(expression.parameters[1]);
    return add(param1, param2);
  }

  if (expression.name == NAMES.equals) {
    const param1 = evaluate(expression.parameters[0]);
    const param2 = evaluate(expression.parameters[1]);
    return equals(param1, param2);
  }

  if (expression.name == NAMES.not) {
    return not(expression.parameters[0]);
  }

  throw "Unknown function";
};
