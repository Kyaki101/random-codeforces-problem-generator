import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import ImageLogo from './ImageLogo'
import InputBox from './InputBox'
import SearchButton from './SearchButton'

function App() {
    const [problems, setProblems] = useState(null);
    const [error, setError] = useState(null);


    const handleSubmit = async () => {
        try {
            const response = await fetch("https://codeforces.com/api/problemset.problems");
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setProblems(data.result.problems); 
            console.log(data.result.problems);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error.message);
        }
    };

    useEffect(() => {
        handleSubmit();
    }, []);



    return(
        <>

            <ImageLogo></ImageLogo>
            <InputBox problems={problems}></InputBox>

            
        </>
    )

}

export default App
