import logo from './logo.svg';
import './App.css';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Typography variant="h1">Hello team, I have been deployed in AWS Amplify</Typography>
      <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </div>
  );
}

export default App;
