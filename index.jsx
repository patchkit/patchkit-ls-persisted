import React from 'react'

// parent class for components which should persist their state to localstorage
// - subclasses must call super(props, storageId), where `storageId` is the localStorage key
// - subclasses should provide defaultState to set which values are persisted, and give initial values
export default class LocalStoragePersistedComponent extends React.Component {
  constructor(props, storageId, defaultState) {
    super(props)
    
    // load state from local storage
    this.storageId = storageId
    try { this.state = JSON.parse(localStorage[this.storageId]) }
    catch(e) { this.state = {} }

    // write any missing state props from default state
    this.persistKeys = Object.keys(defaultState)
    for (var k in defaultState) {
      if (!(k in this.state))
        this.state[k] = defaultState[k]
    }
  }

  setState(obj, cb) {
    // override to persist to local storage
    super.setState(obj, (prevState, currentProps) => {
      // extract only the persisted keys
      var saveState = {}
      this.persistKeys.forEach(k => saveState[k] = this.state[k])

      // store
      localStorage[this.storageId] = JSON.stringify(saveState)
      cb && cb(prevState, currentProps)
    })
  }
}