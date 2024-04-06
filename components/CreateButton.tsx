import Link from "next/link"
import { Plus } from "lucide-react"

const CreateButton = () => {
 return (
  <Link href={"/create"} className="btn btn-neutral">
   <Plus />
   Create
  </Link>
 )
}

export default CreateButton