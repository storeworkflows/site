import React, {useEffect, useState} from "react";
import "./Logo.scss"

const Logo = () => {
  const [mobile, setMobile] = useState(false);


  const handleResizeWight = () => {
    (window.innerWidth > 400) ? setMobile(false) : setMobile(true);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResizeWight);
    return () => window.removeEventListener('resize', handleResizeWight);

  }, []);

  return(
    <div className="logo">
      {
        mobile ? <a href="#">
            <span>S</span>Wf
          </a>
          : <a href="#">
            <span>Store</span>Workflows
          </a>
      }
    </div>
  )
}

export default Logo