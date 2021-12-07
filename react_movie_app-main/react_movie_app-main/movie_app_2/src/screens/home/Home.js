import React, { useEffect } from "react";
import { ImageList,ImageListItem,ImageListItemBar,TextField,Box,FormControl,Button} from '@mui/material';
import genres from '../../common/genre';
import './Home.css';
import '../../common/moviesData'
import moviesData from '../../common/moviesData';
import artists from '../../common/artists';
import { Link } from 'react-router-dom';





const Home = (props) => {
  useEffect(() => {
 
//  fetch("https://documenter.getpostman.com/view/13634964/TzeXm81N")
//                   .then((response)=>{ return response.json() })
                 
                    
 
  }, []);
 
     
        return (<div>
      
           
            <div className="heading">
                <span >Upcoming Movies</span>
            </div> 
            <div className="imageList">
            <ImageList sx={{  overflowX:'visible', overflowY: 'hidden', height: 220, whiteSpace: 'wrap', marginTop:0}} >
            <ImageListItem key="Subheader" cols={6}>
        
            </ImageListItem>
          {moviesData.map((item) => (
        
        <ImageListItem key={item.id} style={{float:'left'}} >
         <img style={{width: 300, height : 200}}
            src={`${item.poster_url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.poster_url}?w=248&fit=crop&auto=format`}
            alt={item.title}
            
          />
          <ImageListItemBar
            title={item.title}
          
          />
        </ImageListItem> 
        
         ))} 
        </ImageList>
            </div> 
            <div className="flex-container">
                <div className="left">
                <ImageList sx={{  }} >
         <ImageListItem key="Subheader" cols={4} >
        
      </ImageListItem>
     
      {moviesData.slice(2, 6).map((item) => (
     
        <ImageListItem key={item.id} className="rleasedMovieList" style={{overflow:'hidden'}}>

              <Link to="/details"><img style={{height:350}}
                   src={`${item.poster_url}?w=248&fit=crop&auto=format`}
                     srcSet={`${item.poster_url}?w=248&fit=crop&auto=format`}
                         alt={item.title} 
            
                    /></Link>
       
          <ImageListItemBar
            title={item.title}
            subtitle={item.release_date}
           
          />
        </ImageListItem>
     
        
         ))}   
    </ImageList>

      
        
                </div>
                <div className="right">
                    
                <Box className="movieSearchForm"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h4 style={{color:'skyblue'}}>FIND MOVIES BY:</h4>
        <div>
        
        <FormControl >
        <TextField
          id="standard-search"
          label="Movie Name"
          type="MovieName"
          variant="standard"
        />
        </FormControl>
        <FormControl >
        <TextField
          id="standard-select-currency-native"
          select
          label="Genres"
          variant="standard"
        >
          
           {genres.map((option) => (
            <option key={option.id} value={option.id}>
            {/* <Checkbox name="geners" /> */}
              {option.name}
            </option>
          ))}
        </TextField>
        </FormControl>
        <FormControl>
        <TextField
          id="standard-select-currency-native"
          select
          label="Artists"
          
          
          variant="standard"
        >
          {artists.map((option) => (
            <option key={option.id} value={option.id}>
                {/* <Checkbox name="artists" /> */}
              {option.first_name} {option.last_name}
            </option>
          ))}
        </TextField>
        </FormControl>
       
        <FormControl>
        <TextField
          id="standard-search"
          label="Release Date Start"
          type="MovieName"
          variant="standard"
        />
        </FormControl>
        <FormControl>
        <TextField
          id="standard-search"
          label="Release Date End"
          type="MovieName"
          variant="standard"
        />
        </FormControl>
        
        <Button variant="contained" style={{width:200}}>APPLY</Button>
      </div>
    </Box>
                </div>
            </div>
          
            </div>  
            
        );
    }

export default Home;
