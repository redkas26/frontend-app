
export default function Posts({postName="no title", postBody="no body"}){
   return(
    <div 
        style={{
            border:"solid teal 5px",
            padding:"10px",
            background:"white",
            margin:"25px",
            borderRadius:"5px"
        }}
    >
        <h2>{postName}</h2>  
        <hr />   
        <p>{postBody}</p>
    </div>
   )
}