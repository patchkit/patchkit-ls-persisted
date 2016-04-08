import React from 'react'
import LocalStoragePersistedComponent from './index'

class LSPInput extends LocalStoragePersistedComponent {
  constructor(props) {
    super(props, 'lsp-input', {
      value: ''
    })
  }
  onChange(e) {
    this.setState({ value: e.target.value })
  }
  render() {
    return <input value={this.state.value} onChange={this.onChange.bind(this)} />
  }
}

export default class LocalStoratePersistedComponentDemo extends React.Component {
  render() {
    return <div>
      <h1>patchkit-ls-persisted</h1>
      <section className="demo-ls-persisted">
        <header>&lt;LocalStoratePersistedComponent&gt;</header>
        <div className="content">
          <div>The value in this input will persist after leaving this page:</div>
          <div><LSPInput /></div>
        </div>
      </section>
    </div>
  }
}