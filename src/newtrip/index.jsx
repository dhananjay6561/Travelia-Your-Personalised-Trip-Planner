import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function CreateTrip() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Load Google Places API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log("Google Maps API loaded");
      setIsScriptLoaded(true); // Set state to true when the script is loaded
    };
    script.onerror = () => {
      console.error("Error loading Google Maps API");
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup the script on component unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 justify-center'>
      <h2 className='font-bold text-3xl'>Let's Personalize Your Next Adventure!</h2>
      <p className='mt-3 text-gray-500 text-xl'>
        Provide your details, and our trip planner will design a tailored itinerary for your trip.
      </p>

      <div className='mt-20'>
        <div>
          <h2 className='text-l my-3 font-medium'>Tell us about your preferred Destination🥺</h2>
          {/* Render only after script is loaded */}
          {isScriptLoaded ? (
            <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
