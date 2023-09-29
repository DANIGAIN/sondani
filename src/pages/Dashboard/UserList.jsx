import React from 'react'
import { roles, rolesColor } from '../../assets/Constant'
import { handelDeleteUser } from '../../api/userApi';

function UserList(props) {
  const { users, setUsers } = props;
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-centered w-100 dt-responsive nowrap"
                id="products-datatable"
              >
                <thead className="table-light">
                  <tr>
                    <th className="all" style={{ width: 20 }}>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck1"
                        />
                        <label className="form-check-label" htmlFor="customCheck1">
                          &nbsp;
                        </label>
                      </div>
                    </th>
                    <th className="all">Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th style={{ width: 85 }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, ind) =>
                  (
                    <tr key={ind}>
                      <td>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck3"
                          />
                          <label className="form-check-label" htmlFor="customCheck3">
                            &nbsp;
                          </label>
                        </div>
                      </td>

                      <td>{user.name}</td>


                      <td>{user.email}</td>
                      <td>
                        <span className={`badge ${rolesColor[user.role]}`}>{roles[user.role]}</span>
                      </td>
                      <td className="table-action">                
                        <a className="action-icon">
                          <i onClick={() => handelDeleteUser(user.id ,users ,setUsers)} className="mdi mdi-delete" />
                        </a>
                      </td>
                    </tr>
                  ))}


                </tbody>
              </table>
            </div>
          </div>{" "}
          {/* end card-body*/}
        </div>{" "}
        {/* end card*/}
      </div>{" "}
      {/* end col */}
    </div>

  )
}

export default UserList