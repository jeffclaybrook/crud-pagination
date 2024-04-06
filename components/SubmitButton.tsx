"use client"

import { useFormStatus } from "react-dom"

interface SubmitButtonProps {
 label: string
}

const SubmitButton = ({
 label
}: SubmitButtonProps) => {
 const { pending } = useFormStatus()

 return (
  <button type="submit" className="btn btn-neutral" disabled={pending}>
   {label === "save" ? (
    <span>{pending ? "Saving..." : "Save"}</span>
   ) : (
    <span>{pending ? "Updating..." : "Update"}</span>
   )}
  </button>
 )
}

export default SubmitButton