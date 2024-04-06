"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import { prisma } from "./prisma"

const ContactSchema = z.object({
 name: z.string().min(1, { message: "Name is required"}),
 phone: z.string().min(10, { message: "Phone is required" })
})

export const saveContact = async (prevState: any, formData: FormData) => {
 const validatedFields = ContactSchema.safeParse(
  Object.fromEntries(formData.entries())
 )

 if (!validatedFields.success) {
  return {
   Error: validatedFields.error.flatten().fieldErrors
  }
 }

 try {
  await prisma.contact.create({
   data: {
    name: validatedFields.data.name,
    phone: validatedFields.data.phone
   }
  })
 } catch (error) {
  return { message: "Unable to create contact" }
 }

 revalidatePath("/")
 redirect("/")
}

export const updateContact = async (id: string, prevState: any, formData: FormData) => {
 const validatedFields = ContactSchema.safeParse(
  Object.fromEntries(formData.entries())
 )

 if (!validatedFields.success) {
  return {
   Error: validatedFields.error.flatten().fieldErrors
  }
 }

 try {
  await prisma.contact.update({
   data: {
    name: validatedFields.data.name,
    phone: validatedFields.data.phone
   },
   where: {
    id
   }
  })
 } catch (error) {
  return { message: "Unable to create contact" }
 }

 revalidatePath("/")
 redirect("/")
}

export const deleteContact = async (id: string) => {
 try {
  await prisma.contact.delete({
   where: {
    id
   }
  })
 } catch (error) {
  return { message: "Unable to delete contact" }
 }
 revalidatePath("/")
}