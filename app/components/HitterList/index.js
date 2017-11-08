import React from 'react';
// import PropTypes from 'prop-types';

import './hitterList.css';

function HitterList() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">HITTERS</th>
                <th scope="col">H-AB</th>
                <th scope="col">R</th>
                <th scope="col">RBI</th>
                <th scope="col">HR</th>
                <th scope="col">AVG</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">C. Taylor CF</th>
                <td>0-3</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>.273</td>
              </tr>
              <tr>
                <th scope="row">C. Seager SS</th>
                <td>1-3</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>.223</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// HitterList.propTypes = {
// };

export default HitterList;
