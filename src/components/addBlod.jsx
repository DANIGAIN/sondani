import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import {handleSubmit} from './../api/bladApi'
import  'react-multiple-select-dropdown-lite/dist/index.css'

function AddBlod(props) {
  const {setBlod , blod} = props ; 
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
            Add Blod services :
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
                    placeholder='provider Name ..'
                    value={blod.name}
                    onChange={(e) => setBlod((prev) => ({ ...prev, name: e.target.value}))}
                  />
                </div>
              </div>
            </div>
          

            <div className="form-outline mb-4">
              <select
                className="form-select"
                aria-label="Default select example"
                value={blod.group}
                onChange={(e) => setBlod((prev) => ({ ...prev, group: e.target.value }))}
                id="groupId"
              >
                <option value={'DEFAULT'} >Blod group </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="o+">o+</option>
                <option value="o-">o-</option>
              </select>

            </div>
            <div className="form-outline mb-4">
            <input type="text"
                    id="form6Example1"
                    className="form-control"
                    placeholder='provider info ..'
                    value={blod.info}
                    onChange={(e) => setBlod((prev) => ({ ...prev, info: e.target.value}))}
                  />
            </div>
            <div className="form-outline mb-4">
            <input type="number"
                    id="form6Example1"
                    className="form-control"
                    placeholder='price ..'
                    value={blod.price}
                    onChange={(e) => setBlod((prev) => ({ ...prev, price: e.target.value}))}
                  />
            </div>
            <div className="form-outline mb-4">
            <input type="number"
                    id="form6Example1"
                    className="form-control"
                    placeholder='provider phone number ..'
                    value={blod.phone}
                    onChange={(e) => setBlod((prev) => ({ ...prev, phone: e.target.value}))}
                  />
            </div>
         </form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>handleSubmit(blod,setBlod,props.onHide , props.blods , props.setBlods)}> Submit</Button>     
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default AddBlod