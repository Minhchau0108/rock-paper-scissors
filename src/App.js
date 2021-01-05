import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PublicNavbar from './components/PublicNavbar'
import ChoiceCard from './components/ChoiceCard'
import { Container, Button, Row, Col} from 'react-bootstrap';


function App() {
  const shapes = ['rock', 'paper', 'scissors'];
  let computerChoice;
  let playerChoice;
  const randomMove = ()=>{
    computerChoice = shapes[Math.floor(Math.random()*3)];
    playerChoice = shapes[Math.floor(Math.random()*3)];
    console.log('Computer:', computerChoice);
    console.log('Player:', playerChoice);
  }
  let computerResult;
  let playerResult;
  const calculateWinner = ()=>{
    if(playerChoice === computerChoice){
      computerResult = "tie";
      playerResult = "tie";
    }

    if(playerChoice === 'rock'){
      if(computerChoice === 'paper'){
        playerResult = "loss";
        computerResult = "win"
      }
      else{
        playerResult = "win";
        computerResult = "loss"
      }
    }

    if(playerChoice === 'paper'){
      if(computerChoice === 'scissors'){
        playerResult = "loss";
        computerResult = "win"
      }
      else{
        playerResult = "win";
        computerResult = "loss"
      }
    }

    if(playerChoice === 'scissors'){
      if(computerChoice === 'rock'){
        playerResult = "loss";
        computerResult = "win"
      }
      else{
        playerResult = "win";
        computerResult = "loss"
      }
    }
  }
  const play = () =>{
    randomMove();
    calculateWinner();
    console.log('playerResult', playerResult);
    console.log('computerResult', computerResult);
  }
  play();

  return (
    <div className="App">
      <PublicNavbar/>
      <Container>
        <Row>
          <Col xs={12} md={6}><ChoiceCard title="You" winner={playerResult} shape={playerChoice}/></Col>
          <Col xs={12} md={6}><ChoiceCard title="Computer" winner={computerResult} shape={computerChoice}/></Col>
        </Row>
        <Button onClick={play}>Play Random</Button>
      </Container>
    </div>
  );
}

export default App;
