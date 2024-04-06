import { deleteContact } from "@/lib/actions"
import { Trash2 } from "lucide-react"

interface DeleteButtonProps {
 id: string
}

const DeleteButton = ({
 id
}: DeleteButtonProps) => {
 const handleDelete = deleteContact.bind(null, id)

 return (
  <form action={handleDelete}>
   <button className="btn btn-circle btn-ghost">
    <Trash2 />
   </button>
  </form>
 )
}

export default DeleteButton