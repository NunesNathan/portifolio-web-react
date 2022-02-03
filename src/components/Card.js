import React from 'react';

export default function Card({ i, title, leftSide, rightSide }) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        {/* <ol id={`leftSide-${i}`} className="list-group">
          {leftSide.map((eachLeftItem, ileft) => (
            <li key={`left-${ileft}`} >
              <a
                className="list-group-item list-group-item-action"
                href={`#${title.replace(/\s/g, '-')}-item-${ileft}`}>
              {eachLeftItem}
              </a>
            </li>
          ))}
        </ol> */}
        <ol
          data-bs-spy="scroll"
          data-bs-target={`#leftSide-${i}`}
          data-bs-offset="0"
          className="scrollspy"
          tabIndex="0"
        >
          {rightSide.map((eachRightItem, iRight) => (
            <li key={`left-${iRight}`}>
              <h5 id={`#${title.replace(/\s/g, '')}-item-${iRight}`}>{leftSide[iRight]}</h5>
              <p>
                {eachRightItem}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>);
}
