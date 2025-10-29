import { useEffect } from 'react';

function useOutsideClicK(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if click was outside the ref element
      if (ref.current && !ref.current.contains(event.target)) {
        callback(); // Run callback if clicked outside
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export default useOutsideClicK