import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { Student } from './Apple';
import { Student, Department } from './App';

const students = [
  { id: 1, name: "Eshmat", age: 18 },
  { id: 2, name: "Toshmat", age: 18 },
  { id: 3, name: "Gulmat", age: 18 },
  { id: 4, name: "Eshmamat", age: 18 },
  { id: 5, name: "Asliddin", age: 18 },
  { id: 6, name: "Ibrohim", age: 18 },
]
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>

    {
      students.map((value) => {
        return < Student data={value} />

      })
    }
  </div>
)


