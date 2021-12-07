import { Button,Box,Tab,TextField,FormControl } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState } from "react";
 import { Link, Switch, Route } from 'react-router-dom';
import BookShow from '../../screens/bookshow/BookShow';
import Details from '../../screens/details/Details';
import Home from '../../screens/home/Home';
import './Header.css';
import ReactLogo from './logo.svg';
import Modal from "react-modal";

Modal.setAppElement("#root");
 
const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
      setIsOpen(!isOpen);
    }

    const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
        return (<><div className="header">
            <img src={ReactLogo} alt="Logo" className="logo" />
           
             
           <Link to="/"></Link> 
           <Link to="/details"></Link>
           <div className="btnDiv">
           <Link to="/bookshow" className="booLink"><Button variant="contained">Book Show</Button></Link> 
          
           <Button variant="contained" color="inherit" onClick={toggleModal}>Login</Button>
           <Button variant="contained" color="inherit" style={{display:'none'}}>Logout</Button>
           </div>
           </div>
         
            <Switch>    
           <Route exact path="/" ><Home/></Route> 
   
            <Route path="/bookshow" ><BookShow/></Route> 
              <Route path="/details" ><Details /></Route>        
                       
                  </Switch> 
                  <Modal 
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div ><Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="LOGIN" value="1" />
            <Tab label="REGISTER" value="2" />
         
          </TabList>
        </Box>
        <TabPanel value="1">
            <FormControl >
        <TextField
          id="standard-search"
          label="Username"
          type="UserName"
          variant="standard"
          required
        />
        </FormControl><br></br>
        <FormControl >
        <TextField
          id="standard-search"
          label="Password"
          type="password"
          variant="standard"
          required
        />
        </FormControl><br></br><br></br>
        <Button variant="contained" onClick={toggleModal}>Login</Button>
        </TabPanel>
        <TabPanel value="2">
        <FormControl >
        <TextField
          id="standard-search"
          label="First Name"
          type="firstname"
          variant="standard"
          required
        />
        </FormControl><br></br>
        <FormControl >
        <TextField
          id="standard-search"
          label="Last Name"
          type="lastname"
          variant="standard"
          required
        />
        </FormControl><br></br>
        <FormControl >
        <TextField
          id="standard-search"
          label="Email"
          type="email"
          variant="standard"
          required
        />
        </FormControl><br></br>
        <FormControl >
        <TextField
          id="standard-search"
          label="Password"
          type="password"
          variant="standard"
          required
        />
        </FormControl><br></br>
        <FormControl >
        <TextField
          id="standard-search"
          label="Contact No."
          type="contact"
          variant="standard"
          required
        />
        </FormControl><br></br><br></br>
        <Button variant="contained" onClick={toggleModal}>Register</Button>
        </TabPanel>
        
      </TabContext>

    </Box>
  
  </div>
        {/* <Button variant="contained" onClick={toggleModal}>Login</Button> */}
      </Modal>
                 </>
          
            
           
            
        
              );

            
    }

 
export default Header;