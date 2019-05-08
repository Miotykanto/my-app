import React from 'react';

<div className="App">
        <button onClick={this.openPopup}></button>

        <Popup show={this.state.isOpen}
          onClose={this.closePopup}>
          <SubscriptionForm></SubscriptionForm>
        </Popup>
      </div>

export default Popup;