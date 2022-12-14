import React, { useState } from 'react';

const EditForm = ({ tweet, onClose, onUpdate }) => {
  const [text, setText] = useState(tweet.text);
  const onChange = (event) => {
    setText(event.target.value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    onUpdate(tweet.id, text);
    onClose();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mt-4 w-11/12 flex flex-col gap-y-3 items-end">
        <input
          className="w-full border p-2 focus:outline-none rounded"
          value={text}
          type="text"
          required
          autoFocus
          onChange={onChange}
        />
        <div className="flex gap-x-1">
          <button className="bg-blue rounded-md py-1 px-3 text-white text-sm">
            수정
          </button>
          <button
            onClick={onClose}
            className="bg-red rounded-md py-1 px-3 text-white text-sm"
          >
            취소
          </button>
        </div>
      </div>
      <button className="text-blue float-right -mt-6">✎</button>
    </form>
  );
};

export default EditForm;
