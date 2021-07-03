import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="signature">
        <img
          className="creative-commons-image"
          src="https://cdn.worldvectorlogo.com/logos/creative-commons.svg"
          alt="Creative Commons"
        />
        {` ${year} Gabriel Borges`}
      </div>

      <div className="credits">
        <div>
          Photo by
          <a href="https://unsplash.com/@jdent?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            {' Jason Dent'}
          </a>
          {' on'}
          <a href="https://unsplash.com/s/photos/safe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            {' Unsplash'}
          </a>
        </div>

        <div>
          Logo made by
          <a
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
          >
            {' Smashicons'}
          </a>
          {' from'}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            {' www.flaticon.com'}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
