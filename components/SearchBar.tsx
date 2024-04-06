"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { Search as SearchIcon } from "lucide-react"

const SearchBar = () => {
 const searchParams = useSearchParams()
 const pathname = usePathname()
 const { replace } = useRouter()

 const handleSearch = useDebouncedCallback((term: string) => {
  const params = new URLSearchParams(searchParams)
  params.set("page", "1")
  term ? params.set("query", term) : params.delete("query")
  replace(`${pathname}?${params.toString()}`)
 }, 300)

 return (
  <label className="input input-bordered flex items-center gap-2 mr-2">
   <input
    type="text"
    placeholder="Search..."
    onChange={(e) => handleSearch(e.target.value)}
    defaultValue={searchParams.get("query")?.toString()}
    className="grow"
   />
   <SearchIcon className="text-gray-400" />
  </label>
 )
}

export default SearchBar