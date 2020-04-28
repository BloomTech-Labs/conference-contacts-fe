import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { NavLink } from 'react-router-dom';

const Settings = () => {
    return (
        <div>
            <div className=''>
                <h2>Cancel</h2>
                <h2>Save</h2>
            </div>
            <div>
                <img src='' alt='' />
            </div>
            <div className="mb-4 w-2/3">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
        </div>
    )
}

export default Settings;