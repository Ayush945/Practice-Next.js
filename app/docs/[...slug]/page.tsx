import React from 'react'

function Docs({params}:{
  params:{
    slug:string[];
  }
}) {
  if(params.slug.length===3){
    return<h1>Viewing for featurre {params.slug[0]} and concept {params.slug[1]} and demo {params.slug[2]}</h1>
  }
  if(params.slug.length===2){
    return<h1>Viewing for featurre {params.slug[0]} and concept{params.slug[1]}</h1>
  }else if(params.slug.length===1){
    return <h1>View for feature {params.slug[0]}</h1>
  }
  return (
    <>Docs Page</>
  )
}

export default Docs;