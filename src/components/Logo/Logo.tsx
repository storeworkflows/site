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

  const logo = mobile ? <><span>S</span>Wf</> : <><span>Store</span>Workflows</>;

  return(
    <div className="logo">
       <a href="#">{logo}</a>
    </div>
  )
}

export default Logo