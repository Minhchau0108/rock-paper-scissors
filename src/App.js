import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PublicNavbar from './components/PublicNavbar'
import ChoiceCard from './components/ChoiceCard'
import { Container, Button, Row, Col, ButtonGroup} from 'react-bootstrap';

function App() {
  const shapes = ['rock', 'paper', 'scissors'];
  const [playerChoice, setPlayerChoice] = useState('');
  const [playerResult, setPlayerResult] = useState('tie');
  const [playerScore, setPlayerScore] = useState(0);

  const [computerChoice, setComputerChoice] = useState('');
  const [computerResult, setComputerResult] = useState('tie');
  const [computerScore, setComputerScore] = useState(0);

  const [playerName, setPlayerName] = useState('You');
  const [victory, setVictory] = useState({name: "", count : 0});


  const randomMove = (move)=>{
    const newComputerChoice = shapes[Math.floor(Math.random() * 3)];
    // const newPlayerChoice = shapes[Math.floor(Math.random() * 3)];
    // const newComputerChoice = shapes[0];
    // move = shapes[1];
    setPlayerChoice(move);
    setComputerChoice(newComputerChoice);
    calculateWinner(newComputerChoice, move);
  }
  const handleVictory = (value) =>{
      if(value === "" || victory.name !== value){
        setVictory({name: "", count: 0});
      }
      if(victory.name === value){
          setVictory({name: value, count: victory.count + 1});
      }
      if(victory.name === ""){
         setVictory({name: value, count: 1});
      }
    }
  
  const calculateWinner = (computerChoice, playerChoice) => {
        if (computerChoice === playerChoice) {
          setComputerResult('tie');
          setPlayerResult('tie');
          handleVictory("");
        } 
        if (computerChoice === 'rock') {
          if (playerChoice === 'paper') {
            setComputerResult('loss');
            setPlayerResult('win');
            setPlayerScore(playerScore + 1);
            handleVictory('player');
          } 
          if (playerChoice === 'scissors') {
            setComputerResult('win');
            setPlayerResult('loss');
            setComputerScore(computerScore + 1);
            handleVictory('computer');
          }
        } 
        if (computerChoice === 'paper') {
          if (playerChoice === 'scissors') {
            setComputerResult('loss');
            setPlayerResult('win');
            setPlayerScore(playerScore + 1);
            handleVictory('player');
          } 
          if (playerChoice === 'rock') {
            setComputerResult('win');
            setPlayerResult('loss');
            setComputerScore(computerScore + 1);
            handleVictory('computer');
          }
        } 
        if (computerChoice === 'scissors'){
          if (playerChoice === 'rock') {
            setComputerResult('loss');
            setPlayerResult('win');
            setPlayerScore(playerScore + 1);
            handleVictory('player');
          } 
          if (playerChoice === 'paper') {
            setComputerResult('win');
            setPlayerResult('loss');
            setComputerScore(computerScore + 1);
            handleVictory('computer');
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
    setPlayerName("You");
    setVictory({name: "",count:0})
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
      {victory.count >= 3 ? <h1>{victory.name} FlawVictory</h1> : null}
    </div>
  );
}

export default App;
