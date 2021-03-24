import React from 'react';

const Location = () => {
    return (
        <>
            <div>
            <h2 class="kit text-center">KEEP IN TOUCH</h2>
        </div>
        <div class="kit_img">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.1248196520896!2d91.96887051503695!3d22.46194328523989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2fca34ae5549%3A0x35c88a37b3e90e97!2sChittagong%20University%20of%20Engineering%20and%20Technology%20(CUET)!5e0!3m2!1sen!2sbd!4v1600185658972!5m2!1sen!2sbd"
                frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"
                class="map_of_cuet"></iframe>
        </div>
        </>
    );
};

export default Location;