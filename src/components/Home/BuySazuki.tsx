import React from "react";

const BuySazuki = () => {
  return (
    <>
      <section className="buysazuki-sec py-16 relative" style={{background:"#000"}}>
        <div className="container mx-auto">
          <div className="flex items-top justify-between flex-wrap">
          <div className="basis-full md:basis-5/12" style={{marginTop:"13%"}}>
              <h1 className="pb-5 ">How  to  buy  <span className="third-color"> $AZUKI</span></h1>
              <p style={{textAlign:"left"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur.</p>
              
              <button className="btn-how-buy">Buy Azuki</button>

            </div>
            <div className="basis-full md:basis-7/12 flex justify-end">
              <img src="/images/myro_img/howtobuyazuki.svg" className="buy_sazukiimg" />
            </div>           
          </div>
        </div>
      </section>
    </>
  );
};

export default BuySazuki;
