import React from 'react'
import { Student } from '../types/Student'



export default function StudentItem({firstName, lastName, grades}: Student) {
  return (
    <div>
        <p>firstName: {firstName}</p>
        <p>lastName: {lastName}</p>
        <p>grades: {grades}</p>
    </div>
  )
}