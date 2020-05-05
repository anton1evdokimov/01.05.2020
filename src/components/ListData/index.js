import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { changeDataActionCreator } from '../../store/actions/changeDataActionCreator';

const ListData = props => {
  const handleChange = (item, event) => {
    props.changeData({ id: item.id, checked: event.target.checked })
  }
  return (
    <ul className="list-data">
      {
        props.list.map(
          item => <li key={item.id} className="list-data__item">
            <input type="checkbox" className="list-data__checkbox"
              onChange={event => handleChange(item, event)} defaultChecked={item.checked} />
            <span className={item.checked && "list-data__text--checked"} title={item.text}>
              {item.date.toLocaleString()} {item.text}
            </span>
          </li>
        )
      }
    </ul>
  );
};
let mapStateToProps = state => ({
  list: state.data.list,
});

let mapDispatchToProps = dispatch => ({
  changeData: item => dispatch(changeDataActionCreator(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListData);
