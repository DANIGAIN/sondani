import axios from 'axios'
import React, { useState } from 'react'
import { Modal ,Button } from 'react-bootstrap'
import { toast } from 'react-toastify'

function AddSpecialist(props) {
    
  const [category,setCategory] = useState('')

   const handleSubmit =  async()=>
   {
       try{
        
        const res =  await axios.post('/specialist',{
            category
        });

        if(res.data.error){
            toast.error(res.data.error)
        }else 
        {
            props.onHide(); 
            toast.success("Add spacalist")
        }

       }catch(error)
       {
           toast.error(error.message)
       }
   }

  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        New Specilist
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form >
        <div className="row mb-4">
          <div className="col-12">
            <div className="form-outline">
              <input type="text"
                id="form6Example1"
                className="form-control"
                placeholder='Specilist name'
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
              />
            </div>
          </div>

        </div>
      </form>

    </Modal.Body>
    <Modal.Footer>
      <Button onClick={handleSubmit}> Submit</Button>
    </Modal.Footer>
  </Modal>

  )
}

export default AddSpecialist