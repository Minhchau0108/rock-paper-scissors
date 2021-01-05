import React from 'react';
import rock from '../images/rock.png';
import paper from '../images/paper.png';
import scissors from '../images/scissors.png'

const ChoiceCard = (props) => {
        console.log('Props:', props);
    //     let borderClassName = 'border-dark';
    //     if(props.winner === 'win')
    //     {
    //         borderClassName ='border-success';
    //     }
    //     if(props.winner === 'loss')
    //     {
    //         borderClassName = 'border-danger';
    //     }

    //     let sourceImg = rock;
    //     if(props.shape === 'paper'){
    //         sourceImg = paper;
    //     }
    //     if(props.shape === 'scissors'){
    //         sourceImg = scissors;
    //     }

    // return <div className={`choice-card ${borderClassName}`}>
	//         <h2 className="text-center">{props.title}</h2>
    //         <img src={`${sourceImg}`}/>
    //     </div>

    return(
        <div className={`choice-card ${props.winner=== 'win' ? 'border-success' : ((props.winner=== 'loss') ? 'border-danger' :'border-dark') }`}>
                <h2 className="text-center">{props.title}</h2>
            <img src={props.shape === rock ? rock : (props.shape === paper? paper : scissors)} 
            alt={props.shape}></img>
        </div>
    ) 
}

export default ChoiceCard
