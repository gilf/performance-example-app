import React, { useState, useEffect } from 'react';
import MainContent from './MainContent';

const LazyLoadedComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
      <div>
        <MainContent />
        {/* LazyLoadedComponent should be conditionally loaded here */}
      </div>
  );
}

export default App;
