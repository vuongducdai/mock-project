import DataTable from './DataTable'

const Dashboard = () => {
  return (
    <div className='p-2.5'>
      <h1>Dashboard</h1>
      <DataTable product='Product' name='NAME' image='IMAGE' price='PRICE' color='COLOR' size='SIZE'/>
    </div>
  )
}



export default Dashboard