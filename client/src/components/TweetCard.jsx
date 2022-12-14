import React, { memo, useState } from 'react';
import Avatar from './Avatar';

import EditForm from './EditForm';

const TweetCard = memo(
  ({ tweet, onDelete, onUpdate, onUsernameClick, author }) => {
    const { id, username, name, url, text, createdAt } = tweet;
    const [editing, setEditing] = useState(false);
    const onClose = () => setEditing(false);

    return (
      <li className="w-full py-4 px-5 flex gap-x-2 hover:bg-modalgrey border-b">
        <Avatar url={url} name={name} />
        <div className="w-full flex flex-col gap-y-2">
          <div className="flex justify-between">
            <div className="flex items-end gap-x-1 font-bold">
              <span className="">{name}</span>
              <span
                onClick={() => onUsernameClick(tweet)}
                className="text-blue text-sm"
              >
                @{username}
              </span>
              <span className="text-grey text-xs">{createdAt}</span>
            </div>
            {author && (
              <button
                onClick={() => onDelete(id)}
                className="text-xs font-bold text-blue"
              >
                X
              </button>
            )}
          </div>
          {editing ? (
            <EditForm tweet={tweet} onClose={onClose} onUpdate={onUpdate} />
          ) : (
            <div>
              <p class="w-11/12">{text}</p>
              {author && (
                <button
                  onClick={() => setEditing(true)}
                  className="text-blue float-right -mt-6"
                >
                  ✎
                </button>
              )}
            </div>
          )}
        </div>
      </li>
    );
  }
);

export default TweetCard;
