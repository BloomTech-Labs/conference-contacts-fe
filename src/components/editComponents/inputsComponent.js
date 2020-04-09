import React from 'react';

export default function InputsComponent({ fields, handleFieldChange }) {
  return (
    <>
      <div className="mt-4">
				<label className="block text-sm mb-1 text-2xl" htmlFor="name">
					Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					className="w-full border border-gray-900 rounded p-2 text-xl"
					onChange={handleFieldChange}
					value={fields.name || ''}
				/>
			</div>
			<div className="mt-4">
				<label className="block text-sm mb-1 text-2xl" htmlFor="jobtitle">
					Job Title
				</label>
				<input
					type="text"
					name="jobtitle"
					id="jobtitle"
					className="w-full border border-gray-900 rounded p-2 text-xl"
					onChange={handleFieldChange}
					value={fields.jobtitle || ''}
				/>
			</div>
			<div className="mt-4">
				<label className="block text-sm mb-1 text-2xl" htmlFor="industry">
					Industry
				</label>
				<input
					type="text"
					name="industry"
					id="industry"
					className="w-full border border-gray-900 rounded p-2 text-xl"
					onChange={handleFieldChange}
					value={fields.industry || ''}
				/>
			</div>
			<div className="mt-4">
				<label className="block text-sm mb-1 text-2xl" htmlFor="location">
					Location
				</label>
				<input
					type="text"
					name="location"
					id="location"
					className="w-full border border-gray-900 rounded p-2 text-xl"
					onChange={handleFieldChange}
					value={fields.location || ''}
				/>
			</div>
			<div className="mt-4">
				<label className="block text-sm mb-1 text-2xl" htmlFor="birthdate">
					Birthdate
				</label>
				<input
					type="date"
					name="birthdate"
					id="birthdate"
					className="w-full border border-gray-900 rounded p-2 text-xl"
					onChange={handleFieldChange}
					value={fields.birthdate || ''}
				/>
			</div>
			<div className="mt-4">
				<label className="block text-sm mb-1 text-2xl" htmlFor="tagline">
					Tagline
				</label>
				<input
					type="text"
					name="tagline"
					id="tagline"
					className="w-full border border-gray-900 rounded p-2 text-xl"
					onChange={handleFieldChange}
					value={fields.tagline || ''}
				/>
			</div>
			<div className="mt-4">
				<label className="block text-sm mb-1 text-2xl" htmlFor="bio">
					Bio
				</label>
				<textarea
					name="bio"
					id="bio"
					rows="5"
					className="w-full border border-gray-900 rounded p-2 text-xl"
					onChange={handleFieldChange}
					value={fields.bio || ''}
				/>
			</div>
    </>
  );
}
