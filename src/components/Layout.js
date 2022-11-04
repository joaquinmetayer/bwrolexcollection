import { Component } from 'react'

const styles = {
  layout: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    color: '#000'
  },
  container: {
    maxWidth: '1500px',
  }
}
class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout