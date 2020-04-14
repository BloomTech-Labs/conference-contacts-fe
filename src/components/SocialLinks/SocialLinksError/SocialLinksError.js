import React from 'react';

const SocialLinksError = (props) => {
    const {linkError } = props;

    return(
        <div className="flex">

          {linkError && (
           
            <p className="text-red-600 font-bold my-1">
              Please click on the "+" to select a social media account type or enter a valid username or email.
            </p>
          )}

        </div>
    );
}

export default SocialLinksError;