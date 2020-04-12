import React from 'react';

const SocialLinksError = (props) => {
    const {linkError, fields} = props;

    return(
        <div className="relative">

          {linkError && (
           
            <p className="text-red-600 font-bold my-3">
              Please click on the "+" to select a social media account type or enter a valid username or email.
            </p>
          )}

        </div>
    );
}

export default SocialLinksError;