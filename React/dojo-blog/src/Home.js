const Home = () => {

    const handleClick = (e) => {
        console.log("hello, Ninjas", e)  
      } 

    const handleClickAgain = (name) => {
        console.log(`Hello ${name} `)
    }
    return ( 
        <div>
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() =>
                handleClickAgain("Ismail")
            }>Click me</button>
        </div>
     );
}
 
export default Home;