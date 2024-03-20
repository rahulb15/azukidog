import React from "react";

const FollowSazuki = () => {
  return (
    <>
      <section className="buysazuki-sec py-16 relative" style={{background:"#121723", backgroundImage:"url('/images/myro_img/featured_bg1.png')"}}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between flex-wrap">
          <div className="basis-full md:basis-5/12 flex justify-center">
          <img src="/images/myro_img/paw_icon.svg" className="paw_Img" />
          

              </div>
            <div className="basis-full md:basis-7/12">
              <h1 className="pb-5 capitalize font-bold	text-7xl	">Follow   <span className="third-color"> AZUKI</span> On<br/>social media </h1>
              <div className="social-links flex my-5 gap-x-5">
                  <a href="#" className="social-icon twitter_icon">
                <img
                    src="/images/myro_img/telegram_icon.svg"
                    className="social-icon"

                  /></a>
                <a href="#" className="social-icon  ">

                <img
                    src="/images/myro_img/twitter_icon.svg"
                  className="social-icon"
                    
                  />
                  </a>

               
                </div>
              </div>

           
          </div>
        </div>
      </section>
    </>
  );
};

export default FollowSazuki;
