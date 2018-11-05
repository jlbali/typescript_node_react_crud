import React, { Component } from 'react';
import ToDosPage from './components/todos/ToDosPage';

const mockToDos = [                               
  {
    id: 1,
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress',
  },
];


class App extends Component {
  render() {
    return (
      <div className="main­content">
        <ToDosPage todos={mockToDos} />
      </div>
    );
  }
}
export default App;


