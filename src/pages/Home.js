import React,{useState,useEffect,useContext} from 'react'
import AuthContext from '../context/AuthContext'

const Home = () => {
  let { authTokens, logoutUser } = useContext(AuthContext)
  const [notes,setNotes] = useState([])

  console.log(authTokens.access)
  useEffect(() =>{
    getNotes();
  },[])

  const getNotes = async()=>{
    let response = await fetch('http://127.0.0.1:8000/api/notes/',{
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json();
    if(response.status === 200){
      setNotes(data)
    }else if(response.statusText === 'Unauthorized'){
      logoutUser()
    }
  }
  return (
    <div>
      <p>You are logged in to the home page</p>

        {notes.map((note) =>(
          <li key={note.id}>{note.body}</li>
        ))}
    </div>
  )
}

export default Home