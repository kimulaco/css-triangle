/* eslint no-unused-vars: off */
/* eslint @typescript-eslint/no-unused-vars: off */
import { h, app, View } from 'hyperapp'
import cssTriangle from '../lib/css-triangle'

class State {
  public constructor (public readonly css: object) {
    console.log(css)
  }
}

class Actions {
  public init () {
    return (state: State) => {
      return state
    }
  }
}

const view: View<State> = (state, actions) => {
  return h('main', {}, [
    h('div', {}, JSON.stringify(state.css, null, '  '))
  ])
}

app(new State(cssTriangle.generate()), new Actions(), view, document.body)
