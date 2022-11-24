import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'

export var storyboard = (
  <Storyboard data-uid='0cd'>
    <Scene
      style={{
        width: 700,
        height: 759,
        position: 'absolute',
        left: 212,
        top: 128,
      }}
      data-label='Playground'
      data-uid='3fc'
    >
      <Playground style={{}} data-uid='d9d' />
    </Scene>
    <Scene
      style={{
        width: 744,
        height: 1133,
        position: 'absolute',
        left: 1036,
        top: 128,
      }}
      data-label='My App'
      data-uid='2c5'
    >
      <App style={{}} data-uid='a28' />
    </Scene>
    <img
      alt=''
      src='./assets/Screenshot 2022-11-24 at 4.39.09 PM.png'
      style={{
        position: 'absolute',
        left: -94,
        top: 53,
        width: 94,
        height: 166,
      }}
      data-uid='cba'
      data-aspect-ratio-locked
    />
    <img
      alt=''
      src='./assets/Screenshot 2022-11-24 at 4.40.16 PM.png'
      style={{
        position: 'absolute',
        left: 54,
        top: 198,
        width: 108,
        height: 98,
      }}
      data-uid='894'
      data-aspect-ratio-locked
    />
    <img
      alt=''
      src='./assets/finderino.png'
      style={{
        position: 'absolute',
        left: -234,
        top: 296,
        width: 152,
        height: 134,
      }}
      data-uid='797'
      data-aspect-ratio-locked
    />
  </Storyboard>
)
