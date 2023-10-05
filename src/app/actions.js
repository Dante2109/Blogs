"use server"
import { cookies } from 'next/headers'
 
export async function create(token) {
  cookies().set('token', token)
}

export async function del() {
  cookies().delete('token')
}