import React, { useState, useEffect } from 'react';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const useObservable = (obs: Observable<any>) => {
  const [state, setState] = useState({});

  useEffect(() => {
    const sub = obs.pipe(tap(x => console.log('subbed', x))).subscribe(setState);
    return () => sub.unsubscribe();
  }, [obs]);

  return state;
};

export default useObservable;
