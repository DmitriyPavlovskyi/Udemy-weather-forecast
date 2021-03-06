import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
// Sparklines takes array of numbers and returns diagramm
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={200} width={300} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
