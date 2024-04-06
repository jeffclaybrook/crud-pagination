"use client"

import { useFormState } from "react-dom"
import { updateContact } from "@/lib/actions"
import type { Contact } from "@prisma/client"
import SubmitButton from "./SubmitButton"
import CancelButton from "./CancelButton"

const EditForm = ({ contact }: { contact: Contact }) => {
 const updateContactWithId = updateContact.bind(null, contact.id)
 const [state, formAction] = useFormState(updateContactWithId, null)

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
     defaultValue={contact.name}
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
     defaultValue={contact.phone}
    />
    <div className="label" id="phone-error" aria-live="polite" aria-atomic="true">
     <span className="label-text-alt text-red-500">{state?.Error?.phone}</span>
    </div>
   </label>
   <SubmitButton label="update" />
   <CancelButton />
  </form>
 )
}

export default EditForm