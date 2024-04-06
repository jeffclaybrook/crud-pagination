"use client"

import { useFormState } from "react-dom"
import { saveContact } from "@/lib/actions"
import SubmitButton from "./SubmitButton"
import CancelButton from "./CancelButton"

const CreateForm = () => {
 const [state, formAction] = useFormState(saveContact, null)

 return (
  <form action={formAction} className="flex flex-col max-w-sm w-full mx-auto">
   <label className="form-control w-full">
    <div className="label">
     <span className="label-text">Name</span>
    </div>
    <input
     type="text"
     id="name"
     name="name"
     placeholder="Name"
     className="input input-bordered input-md w-full"
    />
    <div className="label" id="name-error" aria-live="polite" aria-atomic="true">
     <span className="label-text-alt text-red-500">{state?.Error?.name}</span>
    </div>
   </label>
   <label className="form-control w-full">
    <div className="label">
     <span className="label-text">Phone</span>
    </div>
    <input
     type="text"
     id="phone"
     name="phone"
     placeholder="Phone"
     className="input input-bordered input-md w-full"
    />
    <div className="label" id="phone-error" aria-live="polite" aria-atomic="true">
     <span className="label-text-alt text-red-500">{state?.Error?.phone}</span>
    </div>
   </label>
   <SubmitButton label="save" />
   <CancelButton />
  </form>
 )
}

export default CreateForm