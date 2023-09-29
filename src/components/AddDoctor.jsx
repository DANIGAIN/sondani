import React, { useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
import  {useDoctor} from '../hooks/useDoctor'
import { getSpecialists } from "../api/spApi";
import { handleSubmit } from '../api/doctorApi';
function AddDoctor(props) {
  const {doctorData, setDoctorData} = useDoctor();
  const [specialist, setSpecialist] = useState([]);

  useEffect(() => {
      getSpecialists().then((res)=>setSpecialist(res))
  }, [])

  const  options  = []
  specialist.map((data)=>{
      const obj = { label: data.category  , value:data._id}
      options.push(obj);
  })


  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Doctor
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
                    placeholder='Doctor name'
                    value={doctorData.name}
                    onChange={(e) => setDoctorData((prev) => ({ ...prev, name: e.target.value }))}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-12">
                <div className="form-outline">
                  <input type="email"
                    id="email"
                    className="form-control"
                    placeholder='Doctor Email'
                    value={doctorData.email}
                    onChange={(e) => setDoctorData((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>
            </div>
            <div className="form-outline mb-4 ">
            <MultiSelect
               onChange={val => setDoctorData((perv)=>({...perv ,specialist:val}))}
               options={options}
               placeholder="Select specialist"
               selectionLimit="5"
               className='w-100'
            />
            </div>

            <div className="form-outline mb-4">
              <select
                className="form-select"
                aria-label="Default select example"
                value={doctorData.rating}
                onChange={(e) => setDoctorData((prev) => ({ ...prev, rating: e.target.value }))}
                id="ratingId"
              >
                <option value={'DEFAULT'} >Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

              </select>

            </div>

            <div className="mb-3">
              <input className="form-control"
                type="file"
                id="formFile"
                name='image'
                onChange={(e) => setDoctorData((prev) => ({ ...prev, image: e.target.files[0] }))}
              />
            </div>

          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>handleSubmit(doctorData,props.onHide)}> Submit</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default AddDoctor