import React from 'react'

export default function Admintable({user}) {
//     const deleteUser = async () => {
// if (window.confirm(`are you sure delete ${name}`)){
//     window.alert("deleted")
// }
//         // let response = await fetch()

//     }
    return (
        < >
            <tbody >
                <tr className='admmintablerow'>
                <td>1</td>
                <td className='atd'>{user._id}</td>
                <td >{user.firstName}</td>
                <td >{user.lastName}</td>
                <td>{user.userName}</td>
                <td>{user.contactNumber}</td>
                <td>{user.email}</td>
                <td>Profile</td>
                <td>Post</td>
                <td>Message</td>
                <td>{JSON.stringify( user.active)}</td>

                </tr>
            </tbody>
        </>
    );
}
