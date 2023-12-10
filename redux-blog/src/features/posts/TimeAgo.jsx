import React from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
  let timeAgo = 'Invalid date';

  try {
    if (timestamp) {
      const date = parseISO(timestamp);
      timeAgo = formatDistanceToNow(date) + ' ago';
    }
  } catch (error) {
    console.error('Error processing timestamp:', error);
  }

  return (
    <span title={timestamp}>
      <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
