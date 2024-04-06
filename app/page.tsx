import { Suspense } from "react"
import { getContactPages } from "@/lib/data"
import Table from "@/components/Table"
import Skeleton from "@/components/Skeleton"
import Pagination from "@/components/Pagination"
import CreateButton from "@/components/CreateButton"
import SearchBar from "@/components/SearchBar"

const Contacts = async ({
 searchParams
}: {
 searchParams?: {
  query?: string
  page?: string
 }
}) => {
 const query = searchParams?.query || ""
 const currentPage = Number(searchParams?.page) || 1
 const totalPages = await getContactPages(query)

 return (
  <div className="mt-5 px-8">
   <div className="flex items-center justify-end mb-4">
    <SearchBar />
    <CreateButton />
   </div>
   <Suspense key={query + currentPage} fallback={<Skeleton />}>
    <Table query={query} currentPage={currentPage} />
   </Suspense>
   <div className="flex justify-center mt-4">
    <Pagination totalPages={totalPages} />
   </div>
  </div>
 )
}

export default Contacts