import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import HelloWorld from '../../../.temp/pages/index/HelloWorld'
import countReducer from '../../reducers/counter'
import { ADD, MINUS } from '../../constants/counter'


test('HelloWorld', () => {
  const component = renderToString(
    <HelloWorld />
  )
  expect(component)
    .toMatchSnapshot()
})

it('Reducer Test', function () {
  let state = { num: 0 }
  state = countReducer(state, { type: ADD })

  expect(state.num)
    .toEqual(1)
})

it('Array Test', function () {
  const numList: number[] = [1, 2, 3]
  const sear = numList.find(v => v === 2)
  const sum = numList.reduce((acc, v) => acc + v, 0)
  expect(sum)
    .toBe(6)
  expect(sear)
    .toBe(2)
})
