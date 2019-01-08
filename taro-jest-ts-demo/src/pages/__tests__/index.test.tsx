import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import HelloWorld from '../../../.temp/pages/index/HelloWorld'
import configStore from '../../store'

const store = configStore()

test('with redux', () => {
  const component = renderToString(
    <HelloWorld />
  )
  expect(component)
    .toMatchSnapshot()
})
