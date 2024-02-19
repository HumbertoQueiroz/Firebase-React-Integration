import { useState } from 'react'
import './App.css'
import * as FirebaseController  from "./components/firebaseCoontoller"

function App() {
  const [pathOnDb, setPathOnDB] = useState('')
  const [data, setData] = useState('')
  const [dataReceived, setDataReceived] = useState('')
  const [dataIsJson, setDataIsJson] = useState(false)

  function onButtonCreateUpdateClicked(){
    FirebaseController.createOrUpdateData(pathOnDb, data, (error, data) => {
      if(error){
        console.error(error)
        return
      }

      console.log('onButtonCreateUpdateClicked: ',data)
    })
  }
  function onButtonCreateItemListClicked(){
    FirebaseController.createItemToList(pathOnDb, data, (error, data) => {
      if(error){
        console.error(error)
        return
      }

      console.log('onButtonCreateUpdateClicked: ',data)
    })
  }
  function onButtonReadListClicked(){
    FirebaseController.readData(pathOnDb, (error, data)=>{
      if(error){
        console.error(error)
        return
      }
      console.log('onButtonCreateUpdateClicked: ', data)
    })
    setDataReceived(data)
  }
  function onButtonDeleteClicked(){
    FirebaseController.deleteData(pathOnDb, (error, data)=>{
      if(error){
        console.error(error)
        return
      }
      console.log('onButtonDeleteClicked: ', pathOnDb)
    })
  }



  return (
    <div>
    <textarea 
      placeholder='pathOnDB'
      onChange={event=>setPathOnDB(event.target.value)}
    /><br/>
    <textarea 
      placeholder='data' 
       
      onChange={event=>setData(event.target.value)}
    />
    <br/>
    <small>On get data: {JSON.stringify(dataReceived)}</small>
    <input type="checkbox" onChange={event=>setDataIsJson(event.target.value)} />
    <br/>
    <button 
      onClick={onButtonCreateUpdateClicked}
    >
      Create or UPdate data</button><br/>
    <button 
      onClick={onButtonCreateItemListClicked}
    >
      Create item to list</button><br/>
    <button 
      onClick={onButtonReadListClicked}
    >
      Read data</button><br/>
    <button 
      onClick={onButtonDeleteClicked}
    >
      Delete data</button><br/>
    </div>
  )
}

export default App
