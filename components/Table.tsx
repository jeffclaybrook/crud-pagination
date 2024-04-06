import { getContacts } from "@/lib/data"
import { formatDate } from "@/lib/utils"
import EditButton from "./EditButton"
import DeleteButton from "./DeleteButton"

const Table = async ({
 query,
 currentPage
}: {
 query: string;
 currentPage: number
}) => {
 const contacts = await getContacts(query, currentPage)

 return (
  <div className="overflow-x-auto">
   <table className="table">
    <thead>
     <tr>
      <th>#</th>
      <th>Name</th>
      <th>Phone Number</th>
      <th>Created At</th>
      <th>Actions</th>
     </tr>
    </thead>
    <tbody>
     {contacts.map((contact, i) => (
      <tr key={contact.id}>
       <td>{i + 1}</td>
       <td>{contact.name}</td>
       <td>{contact.phone}</td>
       <td>{formatDate(contact.createdAt.toString())}</td>
       <td className="flex gap-1">
        <EditButton id={contact.id} />
        <DeleteButton id={contact.id} />
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 )
}

export default Table