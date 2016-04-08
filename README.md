# LocalStoragePersistedComponent

Parent class for components which should persist their state to localStorage.

 - subclasses must call super(props, storageId), where `storageId` is the localStorage key
 - subclasses should provide defaultState to set which values are persisted, and give initial values

Example - a input-field which persists its value to localstorage:

```jsx
import LocalStoragePersistedComponent from './index'

class LSPInput extends LocalStoragePersistedComponent {
  constructor(props) {
    super(props, 'persisted-input', { value: '' })
  }
  onChange(e) {
    this.setState({ value: e.target.value })
  }
  render() {
    return <input value={this.state.value} onChange={this.onChange.bind(this)} />
  }
}

<LSPInput />
```