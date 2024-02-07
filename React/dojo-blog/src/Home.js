import { useState } from "react"

const Home = () => {
    // let name = "Ismail"
    const [name, setName] = useState("Ismail");
    const [age, setAge] = useState(0)

    const handleClick = (e) => {
        // console.log("hello, Ninjas")  
        setName("Aisha");
        setAge(age + 1);
        
      } 

    // const handleClickAgain = (name) => {
    //     console.log(`Hello ${name} `)
    // }
  
    return ( 
        <div>
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={() =>
                handleClickAgain("Ismail")
            }>Click me</button> */}

            <p>{name} will be {age} by November 17 {2023 + 1}</p>
        </div>
     );
}
 
export default Home;