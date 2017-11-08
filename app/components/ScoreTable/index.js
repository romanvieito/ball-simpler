import React from 'react';

import Score from './Score';
import './score.css';

function ScoreTable() {
  return (
    <section style={divStyle}>
      <div className="wrapper">
        <div className="innings">
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">FINAL</th>
                <th scope="col">1</th>
                <th scope="col">2</th>
                <th scope="col">3</th>
                <th scope="col">4</th>
                <th scope="col">5</th>
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Visitor</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">Host</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="scores">
          <Score>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">R</th>
                  <th scope="col">H</th>
                  <th scope="col">E</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">0</th>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <th scope="row">0</th>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </Score>
        </div>
      </div>
    </section>
  );
}

const divStyle = {
  paddingTop: '1em',
};

export default ScoreTable;
