import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <div>Welcome to homepage</div>
    <Link href={"/blog"}>Blog</Link>
    <Link href={"/review"}>Review</Link>
    </>
  )
}

export default page