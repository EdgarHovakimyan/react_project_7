import React from "react"
import { useForm } from 'react-hook-form';
import { IDeveloper } from "../types";

interface Props {
    add: Function
    technologies: string[]
}

function AddDevelopers({ add , technologies }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<IDeveloper>();
    const save = (data: IDeveloper) => {
        data.id = Date.now()
        add(data)
        reset()
    }
    return (<>
        <form className="w-50 p-2 border mx-auto" onSubmit={handleSubmit(save)}>
            <div className="form-group my-2">
                <input type="text"
                    placeholder='Name'
                    className="form-control"
                    {...register("name", {
                        required: "Fill the field",
                        pattern: { value: /[A-Za-z]$/g, message: "chpetq e tiv lini" }
                    })}
                />
                {errors.name && <p className='text-danger'>{errors.name.message}</p>}
            </div>
            <div className="form-group my-2">
                <input type="text"
                    placeholder='Surname'
                    className="form-control"
                    {...register("surname", {
                        required: "Fill the field",
                        pattern: { value: /[A-Za-z]/g, message: "chpetq e tiv lini" }
                    })}
                />
                {errors.surname && <p className='text-danger'>{errors.surname.message}</p>}
            </div>
            <div className="form-group my-2">
                <input type="number"
                    placeholder='Age'
                    className="form-control"
                    {...register("age", {
                        required: "Fill the field",
                        pattern: { value: /[0-9]/g, message: "petq e tiv lini" }
                    })}
                />
                {errors.age && <p className='text-danger'>{errors.age.message}</p>}
            </div>
            <div className="form-group my-2">
                <select
                    className="form-control"
                    multiple
                    {...register("skills", {
                        required: "Fill the field",
                    })}
                >
                    <option value="" disabled>Select Skills</option>
                    {technologies.map((elm, i) => <option key={i}>
                        {elm}
                    </option>)}
                </select>
                {errors.skills && <p className='text-danger'>{errors.skills.message}</p>}
            </div>
            <button className="btn btn-success">Add</button>
        </form>
    </>)
}

export default React.memo(AddDevelopers)