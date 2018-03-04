import React from 'react';

class App extends React.Component {
   render() {
	var styling={
		fontSize: 14,
         color: 'blue',
		
	}
      return (	
         <div>
            <h5 style={styling}>Hello World!!! this is my first React program</h5>
			<p>Say Hello , Hi Bye Bye </p>	
         </div>
      );
   }
}
export default App;