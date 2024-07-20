
import "./App.css";
import { useEffect } from "react";
import { connect, Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
const initialState={
  mark:[0,0,0,0,0,0,0,0,0],
  player:2,
  gameOver:false
};
// store configuration
const reducer=(state=initialState,action)=>{
  switch(action.type){
case 'SET_PLAYER':
  return {...state,player:action.payload};
case 'SET_MARK':
  return {...state,mark:action.payload};
  case 'SET_GAMEOVER':
  return {...state,gameOver:action.payload};
default:
  return state;  
}
};
const store=configureStore({reducer});
function App(){
  return(
    <>
     <Provider store={store}>
    <div className="header">
    <h1 className="title">TIC TAC TOE</h1>
    <p className="sub-title">By Pradeep Modak</p>
    </div>
    <div className="matrix">
     
      <BoardContainer/>
   
    </div>
    </Provider>
    </>
  );
}

const mapStateToProps=(state)=>{
return{
  mark:state.mark,
  player:state.player,
  gameOver:state.gameOver
}
}
const mapDispatchToProps=(dispatch)=>{
  return {
setMark:(mark)=>{
dispatch({type:'SET_MARK',payload:mark})
},
setPlayer:(player)=>{
dispatch({type:'SET_PLAYER',payload:player})
},
set_gameOver:(status)=>{
  dispatch({type:'SET_GAMEOVER',payload:status})
  },
  }
}
const BoardContainer=connect(mapStateToProps,mapDispatchToProps)(Board);
function Board({mark,player,gameOver,setMark,setPlayer, set_gameOver}){


  useEffect(() => {
    const wins=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let c of wins){
      if(mark[c[0]]===1 && mark[c[1]]===1 && mark[c[2]]===1){
        alert(`Player O is  Winner`);
        set_gameOver(true);
      }
      if(mark[c[0]]===2 && mark[c[1]]===2 && mark[c[2]]===2){
        alert(`Player X is  Winner`);
        set_gameOver(true);
      }
    }
  }, [mark,set_gameOver])
  

  const changeMark=(i)=>{
    const m=[...mark];
    if(m[i]===0 && !gameOver){
m[i] = player;
setMark(m);
player===2?setPlayer(1):setPlayer(2);
    }
    else{
      alert('Please ! click on empty box');
    }

}

return(
  <div className="Board">
    <div>
    <Block mark={mark[0]} position={0} changeMark={changeMark}></Block>
    <Block mark={mark[1]} position={1} changeMark={changeMark}></Block>
    <Block mark={mark[2]} position={2} changeMark={changeMark}></Block>
    </div>
    <div>
    <Block mark={mark[3]} position={3} changeMark={changeMark}></Block>
    <Block mark={mark[4]} position={4} changeMark={changeMark}></Block>
    <Block mark={mark[5]} position={5} changeMark={changeMark}></Block>
    </div>
    <div>
    <Block mark={mark[6]} position={6} changeMark={changeMark}></Block>
    <Block mark={mark[7]} position={7} changeMark={changeMark}></Block>
    <Block mark={mark[8]} position={8} changeMark={changeMark}></Block>
    </div>

  </div>
);
}

function Block({mark,changeMark,position}){
  return(
    <div className={`Block sign${mark}`}
    onClick={()=>changeMark(position)}
    >  
    </div>
  )
}
export default App; 