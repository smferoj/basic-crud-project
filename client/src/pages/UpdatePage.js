import React from 'react'
import AppNavbar from '../components/Common/AppNavbar'
import UpdateForm from '../components/Update/UpdateForm'
import { useParams } from 'react-router-dom'

const UpdatePage = () => {
  const params = useParams()
    // alert(JSON.stringify(params))
  return (
    <div>
      <AppNavbar/>
      {/* <UpdateForm id={params['id']}/> */}
      <UpdateForm id={params['id']}/>
    </div>
  )
}

export default UpdatePage