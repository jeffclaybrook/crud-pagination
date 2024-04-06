"use client"

import Link from "next/link"
import clsx from "clsx"
import { usePathname, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { generatePagination } from "@/lib/utils"

const Pagination = ({ totalPages }: { totalPages: number }) => {
 const pathname = usePathname()
 const searchParams = useSearchParams()
 const currentPage = Number(searchParams.get("page")) || 1

 const createPageURL = (pageNumber: string | number) => {
  const params = new URLSearchParams(searchParams)
  params.set("page", pageNumber.toString())
  return `${pathname}?${params.toString()}`
 }

 const allPages = generatePagination(currentPage, totalPages)

 const PaginationNumber = ({
  page,
  href,
  position,
  isActive
 }: {
  page: number | string;
  href: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean
 }) => {
  const className = clsx(
   "flex h-10 w-10 items-center justify-center text-sm border",
   {
    "rounded-l-sm": position === "first" || position === "single",
    "rounded-r-sm": position === "last" || position === "single",
    "z-10 bg-blue-500 border-blue-500 text-white": isActive,
    "hover:bg-gray-100": !isActive && position !== "middle",
    "text-gray-300 pointer-events-none": position === "middle"
   }
  )

  return isActive && position === "middle" ? (
   <div className={className}>{page}</div>
  ) : (
   <Link href={href} className={className}>{page}</Link>
  )
 }

 const PaginationArrow = ({
  href,
  direction,
  isDisabled
 }: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean
 }) => {
  const className = clsx(
   "flex h-10 w-10 items-center justify-center text-sm border",
   {
    "pointer-events-none text-gray-300": isDisabled,
    "hover:bg-gray-100": !isDisabled,
    "mr-2": direction === "left",
    "ml-2": direction === "right"
   }
  )

  const icon = direction === "left" ? (
   <ChevronLeft />
  ) : (
   <ChevronRight />
  )

  return isDisabled ? (
   <div className={className}>{icon}</div>
  ) : (
   <Link href={href} className={className}>{icon}</Link>
  )
 }

 return (
  <div className="inline-flex">
   <PaginationArrow
    direction="left"
    href={createPageURL(currentPage - 1)}
    isDisabled={currentPage <= 1}
   />
   <div className="flex -space-x-px">
    {allPages.map((page, i) => {
     let position: "first" | "last" | "single" | "middle" | undefined
     if (i === 0) position = "first"
     if (i === allPages.length - 1) position = "last"
     if (allPages.length === 1) position = "single"
     if (page === "...") position = "middle"
     return (
      <PaginationNumber
       key={i}
       href={createPageURL(page)}
       page={page}
       position={position}
       isActive={currentPage === page}
      />
     )
    })}
   </div>
   <PaginationArrow
    direction="right"
    href={createPageURL(currentPage + 1)}
    isDisabled={currentPage >= totalPages}
   />
  </div>
 )
}

export default Pagination