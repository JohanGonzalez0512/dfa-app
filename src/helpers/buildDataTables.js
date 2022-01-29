import React from 'react';

import { SpanTable } from '../components/ui/table/SpanTable';

export const buildData = (
    state,
    symbol1,
    symbol2, 
) => {
    
    return [
        { element: <SpanTable text={state} />, searched: false },
        { element: <SpanTable text={symbol1} />, searched: false },
        { element: <SpanTable text={symbol2} />, searched:false },
      
        
    ];
}


