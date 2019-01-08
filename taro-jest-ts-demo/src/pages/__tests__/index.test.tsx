import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import HelloWorld from '../../../.temp/pages/index/HelloWorld'

test('HelloWorld', () => {
  const component = renderToString(
    <HelloWorld />
  )
  expect(component)
    .toMatchSnapshot()
})
