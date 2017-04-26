import React, {Component} from 'react';
import '../stylesheets/reset.css';
import '../stylesheets/App.css';

class App extends Component {

    render() {

      const childWithProp = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, {
        });
      });
        return (
              <main>
                {childWithProp}
              </main>
        );
    }
}

export default App;
