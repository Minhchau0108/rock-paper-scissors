import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PublicNavbar from './components/PublicNavbar'
import ChoiceCard from './components/ChoiceCard'
import { Container, Button, Row, Col, ButtonGroup} from 'react-bootstrap';

let victory = {name : "", count : 0};
function changeVictory(value){
  if(victory.name === value){
    victory.count += 1;
  }
  else if(victory.name === ""){
    victory.count = 1;
    victory.name = value;
  }
  else{
    victory.name = "";
    victory.count = 0;
  }
}
function App() {
  const shapes = ['rock', 'paper', 'scissors'];
  const [playerChoice, setPlayerChoice] = useState('');
  const [playerResult, setPlayerResult] = useState('tie');
  const [playerScore, setPlayerScore] = useState(0);

  const [computerChoice, setComputerChoice] = useState('');
  const [computerResult, setComputerResult] = useState('tie');
  const [computerScore, setComputerScore] = useState(0);

  const [playerName, setPlayerName] = useState('You');

  const randomMove = (move)=>{
    const newComputerChoice = shapes[Math.floor(Math.random() * 3)];
    // // const newPlayerChoice = shapes[Math.floor(Math.random() * 3)];
    // const newComputerChoice = shapes[0];
    // move = shapes[1];
    setPlayerChoice(move);
    setComputerChoice(newComputerChoice);
    calculateWinner(newComputerChoice, move);
  }

  const calculateWinner = (computerChoice, playerChoice) => {
    console.log(victory.count);
    console.log(victory.name);
        if (computerChoice === playerChoice) {
          setComputerResult('tie');
          setPlayerResult('tie');
          victory.name = "";
          victory.count = 0;
        } else if (computerChoice === 'rock') {
          if (playerChoice === 'paper') {
            setComputerResult('loss');
            setPlayerResult('win');
            setPlayerScore(playerScore + 1);
            changeVictory('player');
          } else {
            setComputerResult('win');
            setPlayerResult('loss');
            setComputerScore(computerScore + 1);
            changeVictory('computer');
          }
        } else if (computerChoice === 'paper') {
          if (playerChoice === 'scissors') {
            setComputerResult('loss');
            setPlayerResult('win');
            setPlayerScore(playerScore + 1);
            changeVictory('player');
          } else {
            setComputerResult('win');
            setPlayerResult('loss');
            setComputerScore(computerScore + 1);
            changeVictory('computer');
          }
        } else {
          if (playerChoice === 'rock') {
            setComputerResult('loss');
            setPlayerResult('win');
            setPlayerScore(playerScore + 1);
            changeVictory('player');
          } else {
            setComputerResult('win');
            setPlayerResult('loss');
            setComputerScore(computerScore + 1);
            changeVictory('computer');
          }
        }
  }
  const restart = () =>{
    setPlayerResult('win');
    setPlayerScore(0);
    setPlayerResult('tie');

    setComputerResult('loss');
    setComputerScore(0);
    setComputerResult('tie');
    victory.count = 0;
    victory.name ="";
  }
  const handleChangeName = (event)=>{
      setPlayerName(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div className="App">
      <PublicNavbar/>
      <form onSubmit={handleSubmit}>
          <label>
              Name:
              <input type="text" onChange={handleChangeName} />
          </label>
          <input type="submit" value="Submit" />
      </form>
      <Container>
        <Row>
          <Col xs={12} md={6}><ChoiceCard title={playerName} winner={playerResult} shape={playerChoice} score={playerScore}/></Col>
          <Col xs={12} md={6}><ChoiceCard title="Computer" winner={computerResult} shape={computerChoice} score={computerScore}/></Col>
        </Row>
          <ButtonGroup>
            <Button variant="outline-dark" className="mx-1" onClick={() => randomMove('rock')}>
              Play 👊
            </Button>
            <Button variant="outline-dark" className="mx-1" onClick={() => randomMove('paper')}>
              Play 🤚
            </Button>
            <Button variant="outline-dark" className="mx-1" onClick={() => randomMove('scissors')}>
              Play ✌
            </Button>
          </ButtonGroup>
          <Button variant="secondary" onClick={restart}>Restart</Button>
      </Container>
      {victory.count >= 3 ? <h1>FlawVictory</h1> : null}
    </div>
  );
}

export default App;
