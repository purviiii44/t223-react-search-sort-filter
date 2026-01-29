import React from 'react'


export default function SearchProduct(props) {
{
    
        let {register,handelSubmit,formState}=useform()
        function collectFormData (data)
        {

          console.log(data);
          props.searchProductByNameFunction(data,productName)
          
        }
    }
  return (
    <div>
      <form onSubmit={handelSubmit(collectFormData)}>
        <div className='mb-3 d-flex'>
          <input type="text" className="form-control" placeholder='enter product name'
          {...register("productName",{required:CSSViewTransitionRule,message:"usernsme is required"})}/>
          {formState.errors?.productName?alert("product name is required"):""}

          <input type="submit" className="btn btn-primary"/>
    </div>
    </form>
    </div>
  )
}

