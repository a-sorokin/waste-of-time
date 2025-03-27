export const EXPRESSIONS = [
  {
    title: '40 + 2',
    expression:
      '{\n' +
      '    type: "function",\n' +
      '    name: "add",\n' +
      '    parameters: [\n' +
      '        {\n' +
      '            type: "literal",\n' +
      '            value: 40\n' +
      '        },\n' +
      '        {\n' +
      '            type: "literal",\n' +
      '            value: 2\n' +
      '        }\n' +
      '    ]\n' +
      '}',
  },
  {
    title: '1 + 2 !== 3',
    expression:
      '{\n' +
      '    type: "function",\n' +
      '    name: "not",\n' +
      '    parameters: [\n' +
      '        {\n' +
      '            type: "function",\n' +
      '            name: "equals",\n' +
      '            parameters: [\n' +
      '                {\n' +
      '                    type: "function",\n' +
      '                    name: "add",\n' +
      '                    parameters: [\n' +
      '                        {\n' +
      '                            type: "literal",\n' +
      '                            value: 1\n' +
      '                        },\n' +
      '                        {\n' +
      '                            type: "literal",\n' +
      '                            value: 2\n' +
      '                        },\n' +
      '                    ]\n' +
      '                },\n' +
      '                {\n' +
      '                    type: "literal",\n' +
      '                    value: 3\n' +
      '                }\n' +
      '            ]\n' +
      '        }\n' +
      '    ]\n' +
      '}',
  },
];
