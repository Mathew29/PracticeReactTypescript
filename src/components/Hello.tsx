import React from 'react'


type World = {
  hello: string;
}

class Hello extends React.Component<{},World> {
  state: World = {
    hello: 'Hello World'
  }

  render() {
    return (
      <div>
        {this.state.hello}
      </div>
    )
  }
}
export default Hello;