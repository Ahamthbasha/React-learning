import Reac,{useState} from 'react'

function HookCounterThree() {
    const [name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>
      <input type="text" value={name.firstName} onChange={e => setName({...name,firstName:e.target.value})}/>
      <input type="text" value={name.lastName} onChange={e => setName({...name,lastName:e.target.value})}/>
      <h2>your first name is {name.firstName}.Your last name is {name.lastName}</h2>

      <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default HookCounterThree


// use state does not automatically merge or update object that is the reason we use rest parameter