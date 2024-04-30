import { Typography } from 'antd'
import { useParams } from 'react-router-dom'

const Employee = () => {
    const {id} = useParams()
  return (
    <div className="">
        <Typography.Title level={4}>Employee</Typography.Title>
    </div>
  )
}

export default Employee