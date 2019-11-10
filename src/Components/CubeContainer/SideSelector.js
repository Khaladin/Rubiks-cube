import React from 'react';

const SideSelector = ({ setSideShowing }) => {
  return(
    <div className="change-face">
      <div className={'show-button show-button-yellow'} onClick={() => setSideShowing('show-right')}>
        Show right
      </div>
      <div className={'show-button show-button-blue'} onClick={() => setSideShowing('show-left')}>
        Show left
      </div>
      <div className={'show-button show-button-red'} onClick={() => setSideShowing('show-front')}>
        show front
      </div>
      <div className={'show-button show-button-green'} onClick={() => setSideShowing('show-back')}>
        Show Back
      </div>
      <div className={'show-button show-button-pink'} onClick={() => setSideShowing('show-top')}>
          Show top
      </div>
      <div className={'show-button show-button-light-blue'} onClick={() => setSideShowing('show-bottom')}>
          show bottom
      </div>
    </div>
  )
}

export default SideSelector;
