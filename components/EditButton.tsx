import Link from "next/link"
import EditIcon from "@/components/EditIcon"

interface EditButtonProps {
 id: string
}

const EditButton = ({
 id
}: EditButtonProps) => {
 return (
  <Link href={`/edit/${id}`} className="btn btn-circle btn-ghost">
   <EditIcon />
  </Link>
 )
}

export default EditButton