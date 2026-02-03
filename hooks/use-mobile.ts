import { useState, useEffect } from 'react';

// Hook to detect if the user is on a mobile device
export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        // Check screen width
        return window.innerWidth < 768;
      };

      // Set initial value
      setIsMobile(checkMobile());

      // Add event listener for resize
      const handleResize = () => {
        setIsMobile(checkMobile());
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return isMobile;
}