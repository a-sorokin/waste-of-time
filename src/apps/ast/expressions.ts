export const EXPRESSIONS = [
  {
    title: '40 + 2',
    expression:
      '{"type":"function","name":"add","parameters":[{"type":"literal","value":40},{"type":"literal","value":2}]}',
  },
  {
    title: '1 + 2 !== 3',
    expression:
      '{"type":"function","name":"not","parameters":[{"type":"function","name":"equals","parameters":' +
      '[{"type":"function","name":"add","parameters":[{"type":"literal","value":1},{"type":"literal",' +
      '"value":2}]},{"type":"literal","value":3}]}]}',
  },
  {
    title: 'contains(fetchGet("https://google.com"), "Bing")',
    expression:
      '{"type":"function","name":"contains","parameters":[{"type":"function","name":' +
      '"fetchGet","parameters":[{"type":"literal","value":"/google"}]},{"type":"literal","value":"Bing"}]}',
  },
];
