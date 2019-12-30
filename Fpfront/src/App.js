import React, {
  Component
} from 'react';

class App extends Component {
  state = {
    suv1: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const suv1 = await res.json();
      this.setState({
        suv1
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return ( < div > {
      this.state.suv1.map(item => ( < div key = {
          item.id
        } >
        <
        h1 > {
          item.title
        } < /h1>    <
        span > {
          item.writer
        } <
        /span>   <span > {item.body} </span >
        <
        span > {
          item.updated_date
        } < /span>   <
        /div>
      ))
    } < /div>);
  }
}


export default App;