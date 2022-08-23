import DataTable from './DataTable'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <DataTable product='Product' name='Name' image='Image' price='Price' color='Color' size='Size'/>
    </div>
  )
}

export default Dashboard