import { notFound } from 'next/navigation'
import React from 'react'

export default function ReviewDetail({params}:{
    params:{reviewId:string}
}) 
{
  if(parseInt(params.reviewId)>1000){
      notFound();
    }
  return (
    <h1>Review {params.reviewId} for product</h1>
  )
}
