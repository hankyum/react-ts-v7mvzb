import * as React from 'react';
import './style.css';
import data from './data';
const d = data.map((item) => {
  for (let p in item) {
    if (!item[p]) {
      delete item[p];
    }
  }
  return item;
});

const genItem = (item) => {
  return Object.en
}

const genBody = () => {
  return d.map((item) => {
    return (
      <ul>
        {
          
        }
      </ul>
    );
  });
};

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>{genBody()}</div>
    </div>
  );
}
