import './App.css';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';


const listsaleVertical = ['Industrial Sales',
                          'Black + Decker Sales',
                          'Healthcare Sales',
                          'E-Commerce Sales',
                          'SAARC Sales',]


 
const App =(res) => {

  const [saleVertical, setSV] = useState([]);
  console.log('saleVertical', saleVertical);

  const[leave, setLV] = useState('');
  console.log('leave', leave);

  const[localEmail, setLE] = useState('');
  console.log('localEmail', localEmail);

  const handleSubmit = async() => {
    console.log('Result', saleVertical, leave, localEmail);
    var bodyy = JSON.stringify({ localEmail, leave, saleVertical });
    console.log('body', bodyy);

    axios.post("https://3x5v91qjyi.execute-api.us-east-1.amazonaws.com/invent/inventory", bodyy).then((response) => {
      console.log('response',response.data);
    res.send(response.data);
  }).catch((err) => {
    if (err)
      throw err;
  })

    // try {
    //   const res = await fetch('/login', { 
    //     method: 'POST', 
    //     body: JSON.stringify({ localEmail, leave, saleVertical }),
    //     headers: {'Content-Type': 'application/json'}
    //   });
    //   console.log('res', res);

    // }
    // catch (err) {
    //   console.log(err);
    // }
  }


  return (
    <div className="App">
      <TextField
        label="Email"
        variant="outlined"
        name="localEmail"
        value={localEmail || ''}
        onChange={(event) => setLE(event.target.value)}
        size="small"
      />
      <TextField
        label="Leave"
        variant="outlined"
        name="leave"
        value={leave || ''}
        onChange={(event) => setLV(event.target.value)}
        size="small"
      />
      <Autocomplete
        options={listsaleVertical || []}
        getOptionLabel={(o) => o}
        multiple
        value={saleVertical || []}
        onChange={(event, newValue) => setSV(newValue)}
        renderInput={(param) => (
          <TextField
            {...param}
            label="Sale's Vertical List"
            placeholder="Select a sale's vertical"
            fullWidth
            variant="outlined"
            size="small"
          />
        )}
      />
      <Button onClick={handleSubmit}>Save Changes</Button>
    </div>
  );
}

export default App;
