import { redirect } from 'next/navigation'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  redirect("https://discord.com/api/oauth2/authorize?client_id=1063585436565516419&permissions=1374389545990&scope=bot%20applications.commands")
}