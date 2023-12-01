// import React, { Component } from 'react';
// import openai from 'openai';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       response: ''
//     };

//     // Initialize OpenAI API
//     openai.api_key = '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'; // Replace 'YOUR_API_KEY' with your actual API key
//   }

//   handleInputChange = (event) => {
//     this.setState({ input: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const input = this.state.input;

//     // Send ChatGPT request
//     openai.complete({
//       prompt: input,
//       model: 'chatgpt'
//     })
//       .then((response) => {
//         this.setState({ response: response.data.choices[0].text });
//       })
//       .catch((error) => {
//         console.error('ChatGPT error:', error);
//       });
//   };

//   render() {
//     return (
//       <div className="chatbot-container">
//         <h1>ChatGPT</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.input}
//             onChange={this.handleInputChange}
//             placeholder="Enter your prompt"
//           />
//           <button type="submit">Submit</button>
//         </form>
//         <div className="response-container">
//           <p>{this.state.response}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;


// import React, { useEffect } from 'react';
// import { OpenAI } from 'openai';

// const CheckOpenAI = () => {
//   useEffect(() => {
//     const openai = new OpenAI({ key: 'YOUR_API_KEY' });
//     console.log(openai);
//   }, []);

//   return <div>Checking OpenAI...</div>;
// };

// export default CheckOpenAI;
