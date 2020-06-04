import React from 'react';

export default function DisplayValue({ title, value }) {
  return (
    <>
      <h2 className="pb-2 block uppercase text-sm text-gray-700 tracking-widest mobile:text-lg">
        {title}
      </h2>
      <p className=" text-xl">{value ? value : <span>None</span>}</p>
    </>
  );
}
