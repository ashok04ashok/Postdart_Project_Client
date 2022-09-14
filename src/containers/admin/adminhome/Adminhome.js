import "./home.css"

import React, { useEffect, useState } from 'react'



import Adminnav from "../../../components/admin/Adminnav";
// import { PRODUCT_API } from "../../../global/Api";
const formInit = {
    firstName: '',
    lastName: '',
    userName: '',
    contactNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
}
export default function Adminhome() {

    const [isLoding, setIsLoding] = useState(false)
    const [user, setUser] = useState([])

    const [users, setUsers] = useState(formInit)

    const handleChange = ({ target: { name, value } }) => {
        setUsers({ ...users, [name]: value });
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        createUser();
        console.log(users)
    }

    // get user
    const getUser = async () => {
        setIsLoding(true)
        try {
            // const response = await fetch(`${PRODUCT_API}/admin/alluser`);
            let response = await fetch("http://localhost:8000/api/admin/alluser");
            response = await response.json();
            setUser(response)
            setIsLoding(false)
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getUser();
    }, [])


    // get create
    const createUser = async () => {

        try {
            let response = await fetch("http://localhost:8000/api/admin/createuser/", {
                method: "POST",
                body: JSON.stringify(users),
                Headers: { "Content-Type": "application/json" }
            });
            if (!response.ok) {
                throw new Error("request failed")
            }
            response = await response.json()
            console.log(response)
            // setUser()
            // getUser()

        } catch (err) {
            console.error(err.message)

        }
    }


    const deleteUser = async ({ _id, userName }) => {
        if (window.confirm(`are you sure delete userId-${_id}, user name-${userName}`)) {
            try {
                let response = await fetch(`http://localhost:8000/api/admin/inactiveuser/${_id}`, {
                    method: "PUT",
                    // body: JSON.stringify({ _id }),
                    Headers: { "Content-Type": "application/json" }
                })
                if (!response.ok) {
                    throw new Error("request failed")
                }
                response = await response.json()
                alert(" delet su")
                getUser()
            } catch (err) {
                console.error(err.message)
            }
        }
    }

    return (
        <div className="home_all">
            <Adminnav />
            <div className="back_ground_color"></div>


            <section>
                <div className="admininputtable">
                    <form onSubmit={handleSubmit}>
                        

                        <label className="admintableform" htmlFor="firstName" >First Name</label>{" "}
                        <input id="firstName" name="firstName" type="text" className="admintableform1" placeholder="Enter the First Name" value={users.firstName} onChange={handleChange} required />

                        <label className="admintableform" htmlFor="lastName" >Last Name</label>{" "}
                        <input id="lastName" name="lastName" type="text" className="admintableform1" placeholder="Enter the LAst Name" value={users.lastName} onChange={handleChange} />

                        <label className="admintableform" htmlFor="userName" >User Name</label>{" "}
                        <input id="userName" name="userName" type="text" className="admintableform1" placeholder="Enter the User Name" value={users.userName} onChange={handleChange} />

                        <label className="admintableform" htmlFor="contactNumber" >Contact Number</label>{" "}
                        <input id="contactNumber" name="contactNumber" type="text" className="admintableform1" placeholder="Enter the Contact Number" value={users.contactNumber} onChange={handleChange} />

                        <label className="admintableform" htmlFor="email" >Email</label>{" "}
                        <input id="email" name="email" type="email" className="admintableform1" placeholder="Enter the Email" value={users.email} onChange={handleChange} />

                        <label className="admintableform" htmlFor="password" >Password</label>{" "}
                        <input id="password" name="password" type="text" className="admintableform1" placeholder="Enter the Password" value={users.password} onChange={handleChange} />

                        <label className="admintableform" htmlFor="confirmPassword" >Confirm Password</label>{" "}
                        <input id="confirmPassword" name="confirmPassword" type="text" className="admintableform1" placeholder="Enter Confirm Password" value={users.confirmPassword} onChange={handleChange} />
                        <br />
                        <button type="submit">Save</button>
                    </form>


                </div>


            </section>


            <section>
                <table className='admintable'>
                    <thead >
                        <tr >
                            <th>Sl.No</th>
                            <th >User_Id</th>
                            <th >FirstName</th>
                            <th >LastName</th>
                            <th>Username</th>
                            <th>Contactnumber</th>
                            <th>Email</th>
                            <th>Profile</th>
                            <th>Post</th>
                            <th>Message</th>
                            <th>active</th>
                        </tr>
                    </thead>
                    <br />

                    {isLoding && (<div>Loding....</div>)}

                    {user.map((user) => {
                        return (
                            <tbody key={user.id}>
                                <tr className='admmintablerow'>
                                    <td className='atd'>{user._id}</td>
                                    <td >{user.firstName}</td>
                                    <td >{user.lastName}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.contactNumber}</td>
                                    <td>{user.email}</td>
                                    <td>Profile</td>
                                    <td>Post</td>
                                    <td>Message</td>
                                    <td>{JSON.stringify(user.active)}</td>
                                    <td onClick={() => deleteUser(user)}>delete</td>

                                </tr>
                            </tbody>
                        )
                    })}
                </table>


            </section>


        </div>
    );
}
