import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrement, increment } from './store/redux/reducers';

// const Counter = (props) => { // without redux
const Counter = ( props ) => {
    // const { setCount, count } = props; // without redux
    // const [count, setCount] = React.useState(0); // without redux
    // const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const { name } = props;
    const [ votes, setVotes ] = React.useState(0); 

    const handleIncrement = () => {
        // setCount(count + 1); // without redux
        dispatch(increment());
        setVotes(votes + 1);
    }

    const handleDecrement = () => {
        // setCount(count - 1); // without redux
        dispatch(decrement());
        setVotes(votes - 1);

    }

  return (
  <div style={{backgroundColor: "grey", margin: "10px"}}>
      <h2> {name} </h2>
      <h3> { `Votes: ${votes}` } </h3>
      {/* <h3> {`Count: ${count}`} </h3> */}
      <div style={{display: "flex", justifyContent: "center"}}>
          <button onClick={handleDecrement}> Decrement </button>
          <button onClick={handleIncrement}> Increment </button>
      </div>
  </div>
  );
}

export default Counter;
