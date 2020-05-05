import React, { useState } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { addDataActionCreator } from '../../store/actions/addDataActionCreator';

const TZOFFSET = (new Date().getTimezoneOffset())*60000;

const AddData = props => {
  const [date, setDate] = useState((new Date(Date.now() - TZOFFSET)).toISOString().slice(0,-5));
  const [text, setText] = useState('');

  const addTask = event => {
    event.preventDefault();    
    props.addData({ text, date: new Date(date), checked: false });
    setText('');
  }

  const changeText = event => setText(event.target.value);

  const changeDate = event => {
    if (event.target.value !== date) {
      setDate(event.target.value);
    }
  }
  
  return (
    <form className="add-data" onSubmit={addTask}>
      <h2>Менеджер задач</h2>
      <textarea className="add-data__text" rows="3" onChange={changeText} name="text" value={text} />
      <input className="add-data__date" type="datetime-local" name="date" onBlur={changeDate} defaultValue={date}/>
      <input className="add-data__button" value="Добавить" type="submit" />
    </form>
  );
};

let mapStateToProps = state => ({
});
let mapDispatchToProps = dispatch => (
  {
    addData: data => dispatch(addDataActionCreator(data))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(AddData);
