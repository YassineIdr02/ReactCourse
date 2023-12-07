import { useSelector } from "react-redux"

export default function Profile() {
  const user = useSelector(state => state.user.value)
  const themeColor = useSelector(state => state.theme.value)
  return (
    <div style={{color: themeColor}}>  
      <div>Profile</div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}
