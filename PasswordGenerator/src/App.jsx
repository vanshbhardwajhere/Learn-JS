import { useState,useCallback ,useEffect,useRef} from 'react'


function App() {
  const [length,setLength]=useState(8);
  const [numAllow,setNumAllow] = useState(true);
  const [charAllow,setCharAllow] = useState(true);
  const [password,setPassword] = useState();
  //ref hook
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllow) str += "0123456789";
    if(charAllow) str += "!@#$%^&*()_+";

    for(let i=1;i<=length;i++){
        let char = Math.floor(Math.random() * str.length +1);
        pass += str.charAt(char)
    }
    setPassword(pass);

  } ,[length,numAllow,charAllow,setPassword]);
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator();
  },[length,numAllow,charAllow,passwordGenerator])
  return (
    <div>
      <h1 className='text-4xl text-center font-bold text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        
          <input type="text" 
          value={password}
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button className='bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard()}
          >copy</button>
        

      </div>
      <div className='text-white'>
        <div>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
      
        <div>
          <input 
          type="checkbox" 
          defaultChecked = {numAllow}
          id = "numberInput"
          className='cursor-pointer'
          onChange={()=>{setNumAllow((prev) => !prev)}}
          />
          <label>Numbers</label>
        </div>
      
        <div>
          <input style={{}}
          type="checkbox" 
          defaultChecked = {charAllow}
          id = "charInput"
          className='cursor-pointer'
          onChange={()=>{setCharAllow((prev) => !prev)}}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
