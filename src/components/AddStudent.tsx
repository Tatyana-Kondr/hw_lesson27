import React, { useState } from 'react'

export default function AddStudent() {
    type studentData ={
        firstName: string,
        lastName: string,
        grade: string
    };

    const [formData, setFormData] = useState<studentData>({firstName: "", lastName: "", grade: ""});
    const changeHandler =(event:React.ChangeEvent<HTMLInputElement>):void => {
        const {value, name} = event.target;
        const newData:studentData = {...formData, [name]: value};
        setFormData(newData); 
        console.log(formData);
    }

  return (
    <div>
        <h3>Форма добавления студентов</h3>
        <form>
            <input value={formData.firstName} type="text" name='firstName' placeholder='firstName' onChange={changeHandler} />
            <input value={formData.lastName} type="text" name='lastName' placeholder='lastName' onChange={changeHandler} />
            <input value={formData.grade} type="text" name='grade' placeholder='grade' onChange={changeHandler} />
            <button>Добавить</button>
        </form>
    </div>
  )
}
