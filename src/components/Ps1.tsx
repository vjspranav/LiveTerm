import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

import config from '../../config.json';


export const Ps1 = () => {
  const [username, setUserName] = React.useState('');
  useEffect(() => {
    // check if localStorage has a username
    const localUsername = localStorage.getItem('ps1_username');
    if (localUsername) {
      setUserName(localUsername);
    }else{
      Swal.fire({
        title: 'Enter your username',
        text: 'This cannot be changed once set',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Save',
        showLoaderOnConfirm: true,
        preConfirm: (username) => {
          localStorage.setItem('ps1_username', username);
          setUserName(username);
          // reload the page
          window.location.reload();
        }
      });
    }
  }
  , []);
  return (
    <div>
      <span className="text-light-yellow dark:text-dark-yellow">
        {username ? username : config.ps1_username}
      </span>
      <span className="text-light-gray dark:text-dark-gray">@</span>
      <span className="text-light-green dark:text-dark-green">
        {config.ps1_hostname}
      </span>
      <span className="text-light-gray dark:text-dark-gray">:$ ~ </span>
    </div>
  );
};

export default Ps1;
