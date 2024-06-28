import { Metadata } from 'next';
import { notFound } from 'next/navigation'


type Props={
  params:{
    reviewId:string;
  }
}

export const generateMetadata= async({
  params,
}:Props):Promise<Metadata>=>{
  const title=await new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve(`andriod ${params.reviewId}`);
  },100)
  });

  return{
    title:`Review ${title}`,
  };
}

export default function ReviewDetail({params}:Props) 
{
  if(parseInt(params.reviewId)>1000){
      notFound();
    }
  return (
    <h1>Review {params.reviewId} for product</h1>
  )
}
