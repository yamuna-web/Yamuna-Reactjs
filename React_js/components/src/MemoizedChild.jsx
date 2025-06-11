import React from 'react';
const MemoizedChild = React.memo(({ onClick }) => {
  console.log('Child component rendered');

  return (
    <div className="mt-4">
      <button onClick={onClick} className="p-2 bg-blue-500 text-white rounded">
        Click Child Button
      </button>
    </div>
  );
});

export default MemoizedChild;
