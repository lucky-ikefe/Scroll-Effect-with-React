import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function useObserverTransition() {

    const { ref, inView} = useInView({threshold: .5});
    const [hasTransitioned, setHasTransitioned] = useState(false);

    useEffect(() => {
        if(inView && !hasTransitioned){
            setHasTransitioned(true)
        }
    }, [inView, hasTransitioned])

  return {ref, hasTransitioned};
}
