import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {React, useState} from 'react';

function DropdownCom(){
   
        // const languageOptions = [
    //     { key: "English", text: "English", value: "EN" },
    //     { key: "Spanish", text: "Spanish", value: "ES" }
    //  ];
    const getInitialState = () => {
        const value = "Select Your Language";
        return value;
        
    };
    
    const [value, setvalue] = useState(getInitialState);

    const handleSelectChange = (event) => {
        setvalue(event.target.value);
        console.log(value);
    };

    return(
        <>
            <h1>LANGUAGE SELECTOR</h1>
            
            <select onChange={handleSelectChange} title="Select LANGUAGE" value={value}>
                <option >Select Language</option>
                <option >Apple</option>
                <option >Orange</option>
                <option >Banana</option>
            </select>
            {/* <DropdownButton id="dropdown-basic-button" title="Select LANGUAGE" value={value} onChange={handleSelectChange}>
                <Dropdown.Item href="#/action-1" value="English">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2" value="French">French</Dropdown.Item>
                <Dropdown.Item href="#/action-3" value="italy">italy</Dropdown.Item>
            </DropdownButton> */}
            console.log(value);

            <p>{`You selected ${value}`}</p>
            console.log(value);
            {/* <Dropdown
                button
                className='icon'
                floating
                labeled
                icon='world'
                options={languageOptions}
                search
                text='Select Language'
                // onChange={handleChange}
            /> */}
            console.log(value);
        </>
        
      
    )
}

export default DropdownCom;