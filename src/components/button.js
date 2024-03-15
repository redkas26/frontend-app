/* eslint-disable import/no-anonymous-default-export */

export default function Button({title="click", children}){

    return(
        <button 
            style={{
                background:"yellow",
                margin:"25px 5px 0 0",
                color:"teal",
                borderRadius:"10px"
            }}
        >
            <h6>{title}</h6>
            {children}
        </button>
       
    )

}