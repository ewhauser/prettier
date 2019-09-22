const prettier = require('prettier')

test('default', () => {
  const options = {
    filepath: 'package.json',
    parser: 'json-stringify',
    plugins: ['prettier-plugin-pkg'],
  }
  const fixture = {
    engines: {
      npm: 'joker',
      node: 'batman',
    },
  }

  const input = JSON.stringify(fixture, null, 2)
  const output = prettier.format(input, options)

  expect(output).toMatchSnapshot()
})