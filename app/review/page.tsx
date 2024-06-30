import Link from 'next/link';
import React from 'react'

function ReviewPage() {
    const reviewId=100;
  return (
    <>
    <div>Reviews List</div>
    <h1><Link href={'/review/1'}>Review 1</Link></h1>
    <h1><Link href={'/review/2'}>Review 2</Link></h1>
    <h1><Link href={'/review/3'} replace>Review 3</Link></h1>
    <Link href={"/"}>Home</Link>
    <h1><Link href={`review/${reviewId}`}>{`Review ${reviewId}`} </Link></h1>
    </>
  )
}

export default ReviewPage;