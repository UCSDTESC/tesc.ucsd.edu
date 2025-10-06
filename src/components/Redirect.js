import React from 'react';

function RedirectComponent() {
  const externalUrl = 'https://tescatucsd.org';

  React.useEffect(() => {
    // Redirect to external URL
    window.location.href = externalUrl;
  }, []); 

  return (
    <div>Redirecting to new website...</div> 
  );
}

export default RedirectComponent;
