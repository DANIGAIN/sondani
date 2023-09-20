import React  from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';

function AddDoctor(props) {
  const [doctorData, setDoctorData] = useState({
    name: '',
    specialist: '',
    rating: '',
    image: ''
  })


  const handleSubmit = async () => {

    try {

      const formdate = new FormData();
      formdate.append('image', doctorData.image);
      formdate.append('name', doctorData.name);
      formdate.append('specialist', doctorData.specialist);
      formdate.append('rating', doctorData.rating);

      const response = await axios.post('/doctor', formdate, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      if (response.error) {
        toast.error(response.error.message);
      } else {
        props.onHide();
        toast.success("Add a Doctor");
      }

    } catch (error) {
      toast.error(error.message);
    }

  }
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
            <div className="form-outline mb-4">
              <select
                className="form-select"
                aria-label="Default select example"
                id="specialist"
                value={doctorData.specialist}
                onChange={(e) =>
                  setDoctorData((prev) => ({ ...prev, specialist: e.target.value }))
                }
              >
                <option value="specialist doctor">specialist doctor</option>
                <option value="Neurosurgeon">Neurosurgeon</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Surgeon">Surgeon</option>
                <option value="Dentist">Dentist</option>
                <option value="Eye Specialist">Eye Specialist</option>
                <option value="Urology">Urology</option>
              </select>
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
          <Button onClick={handleSubmit}> Submit</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default AddDoctor