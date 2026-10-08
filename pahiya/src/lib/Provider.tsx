'use client'
import React, { ReactNode } from 'react'
import { SessionProvider } from "next-auth/react";
function Provider({children}:{children:ReactNode}) {
  return (
    <div>
      <SessionProvider>
        {children}
      </SessionProvider>
    </div>
  )
}

export default Provider
