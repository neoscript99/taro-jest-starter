import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import { Provider } from '@tarojs/mobx'
import Index from '../../../.temp/pages/index'
import IndexPure from '../../../.temp/pages/index/pure'
import counterStore from '../../store/counter'

const store = {
  counterStore
}

describe('ui test', () => {
  it('no mobx', () => {
    const component = renderToString(
      <IndexPure counterStore={counterStore} />
    )
    expect(component)
      .toMatchSnapshot()
  })

  it('with mobx', () => {
    const component = renderToString(
      <Provider store={store}>
        <Index />
      </Provider>
    )
    expect(component)
      .toMatchSnapshot()
  })
})
