import React, { useState, useEffect } from 'react';

// src/app.ts
export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState({ a: 9999 });
  return {
    masterState,
    setMasterState,
  };
}
