import React from "react";

const BuySazuki = () => {
  return (
    <>
      <section className="buysazuki-sec howtobuy_azuki py-16 pb-2 relative" style={{ background: "#000" }}>
        <div className="container mx-auto">
          <div className="flex items-top justify-between flex-wrap">
            <div className="basis-full lg:basis-4/12" style={{ marginTop: "13%" }}>
              <h1 className="pb-5 text-center w-full">How  to  buy  <span className="third-color"> $AZUKI</span></h1>
              <img src='/images/myro_img/dog_img.png' />
            </div>
            <div className="basis-full lg:basis-8/12 flex justify-end howtobuy_div">
              <div className="pawimg_div flex items-start">
                <img src="/images/myro_img/leftside_paw.svg" className="buy_sazukiimg" /></div>

              <div className="middlecard px-4 py-4">
                <div className=" home-hover gradi_border">
                  <div className="card_content px-6 py-4 flex items-center justify-between">
                    <div className="leftside_content ">
                  <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Step 1
                  </h2>
                  <div className="gradi_border" style={{ width: "150px", height: "4px!important",padding:"2px" }}></div>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color dark:text-gray-300 sm:text-lg lg:text-base xl:text-lg" style={{ maxHeight: '300px', overflow: 'auto' }}>
                    Buy $KDA and send it to a supported wallet
                  </p>
                  </div>
                  <div className="rightside_img">
                    <img src="/images/myro_img/buy_wallet.svg" />
                  </div>
                  </div>
                </div>

                <div className=" home-hover gradi_border">
                  <div className="card_content px-6 py-4 flex items-center justify-between">
                    <div className="leftside_content ">
                  <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Step 2
                  </h2>
                  <div className="gradi_border" style={{ width: "150px", height: "4px!important",padding:"2px" }}></div>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color dark:text-gray-300 sm:text-lg lg:text-base xl:text-lg" style={{ maxHeight: '300px', overflow: 'auto' }}>
                  Connect your wallet on eckoDEX
                  </p>
                  </div>
                  <div className="rightside_img">
                    <img src="/images/myro_img/connect_wallet.svg" />
                  </div>
                  </div>
                </div>

                <div className=" home-hover gradi_border">
                  <div className="card_content px-6 py-4 flex items-center justify-between">
                    <div className="leftside_content ">
                  <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Step 3
                  </h2>
                  <div className="gradi_border" style={{ width: "150px", height: "4px!important",padding:"2px" }}></div>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color dark:text-gray-300 sm:text-lg lg:text-base xl:text-lg" style={{ maxHeight: '300px', overflow: 'auto' }}>
                  Swap $KDA for $AZUKI to join the Azuki army                  </p>

                  <a href="#" className="btn-text my-5 gradi_border" style={{margin:"0", marginTop:"10px", textAlign:"center"}}>
                    <div>
                    Get Ecko</div></a>
                  </div>
                  <div className="rightside_img">
                    <img src="/images/myro_img/swap_wallet.svg" />
                  </div>
                  </div>
                </div>
              </div>


              <div className="pawimg_div flex items-end">
                <img src="/images/myro_img/rightside_paw.svg" className="buy_sazukiimg" />
              </div>


            </div>
          </div>

          <div className="bottomside_paw flex justify-center pt-5">
            <img src="/images/myro_img/bottomside_paw.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BuySazuki;
