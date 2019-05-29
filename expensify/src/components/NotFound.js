import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NotFound extends Component {
  render() {
    return (
      <div>
        404! <Link to="/">Go home</Link>
      </div>
    );
  }
}

export default NotFound;
