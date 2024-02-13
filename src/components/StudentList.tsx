import React from 'react'
import { Student } from '../types/Student'
import StudentItem from './StudentItem'

export default function StudentList() {
    const students:Student[] = [
        {firstName: "Ivan", lastName: "Ivanov", grades: [3, 4, 5, 4, 3, 4]},
        {firstName: "Peter", lastName: "Petrov", grades: [5, 4, 3, 3, 5, 4]},
        {firstName: "Sidor", lastName: "Sidorov", grades: [5, 4, 4, 4, 5, 3]}
    ]
  return (
    <div>
        {
            students.map((student) => <StudentItem key={student.lastName} {...student}/>)
        }
    </div>
  )
}