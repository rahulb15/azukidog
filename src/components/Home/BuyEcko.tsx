import React from "react";

const BuyEcko = () => {
  return (
    <>
      <section className="buysazuki-sec relative py-16 dark:bg-black">
        <div className="container mx-auto">
          <div
            className="items-top flex flex-wrap justify-between"
            style={{
              backgroundImage: "url('/images/myro_img/purple_light.svg')",
              backgroundSize: "contain",
              backgroundPosition: "bottom center",
              backgroundRepeat: "no-repeat",
              borderRadius: "20px",
            }}
          >
            <div className="basis-full md:basis-6/12">
              <div className="swap-div relative">
                <div className="inner-swap flex justify-between">
                  <span className="flex items-center justify-between">
                    <h3>SWAP</h3>
                  </span>
                  <div className="right-swap flex items-center justify-between gap-x-4">
                    <div className="gradi_border gradi_circle">
                      <img src="/images/myro_img/restart.svg" />
                    </div>
                    <div className="gradi_border gradi_circle">
                      <img src="/images/myro_img/setting.svg" />
                    </div>
                    <a
                      href="#"
                      className="btn-how-buy gradi_border gradi_border-full"
                      style={{ padding: "8px", minWidth: "140px" }}
                    >
                      <span
                        className="relative z-10"
                        style={{ fontSize: "16px" }}
                      >
                        {" "}
                        Game Mode{" "}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="inner-swap gradi_border flex justify-between">
                  <div className="inner-side-swap">
                    <h3>Give</h3>
                    <h2 className="third-color">0.00</h2>
                  </div>
                  <div className="inner-side-swap">
                    <h5 className="gray">Balance: 0.00</h5>
                    <div className="inner_coin gradi_border middium-gradi_border flex items-center">
                      <img src="/images/myro_img/dollar_icon.svg" />
                      <select name="kda" id="" className="border">
                        <option value="">KDA</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="gradi_border middium-gradi_border down_arrow">
                  <img
                    src="/images/myro_img/down_arrow.png"
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      width: "20px",
                    }}
                  />
                </div>
                <div className="inner-swap gradi_border flex justify-between">
                  <div className="inner-side-swap">
                    <h3>Receive</h3>
                    <h2 className="third-color">0.00</h2>
                  </div>
                  <div className="inner-side-swap">
                    <h5 className="gray">Balance: 0.00</h5>
                    <div className="inner_coin gradi_border middium-gradi_border flex items-center justify-between border">
                      <img src="/images/myro_img/dollar_icon.svg" />
                      <select name="kda" id="" className="border">
                        <option value="">KDA</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="inner-swap flex justify-between px-4">
                  <span>
                    <h3>Gas cost</h3>
                  </span>
                  <span>
                    <h3>Free</h3>
                  </span>
                </div>

                <div className="inner-swap flex justify-between">
                  <a
                    className="gradi_border gradi_border-full w-full border"
                    href="#"
                  >
                    <span className="relative z-10">Connect Wallet</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex basis-full pt-4 md:basis-5/12">
              <div className="w-full">
                <div className="flex items-center">
                  <h1 className="items-c  pb-5">
                    Or buy using <br />
                    <span
                      style={{ color: "#fc01b5" }}
                      className="flex items-center gap-x-1"
                    >
                      {" "}
                      <img
                        src="/images/myro_img/eckodesc.svg"
                        style={{ marginLeft: "-13px" }}
                      />{" "}
                      :
                    </span>
                  </h1>
                  <img
                    src="/images/myro_img/paw_img.svg"
                    style={{ marginBottom: "3px", width: "100px" }}
                  />
                </div>
                <p style={{ textAlign: "left" }} className="flex items-center">
                  Then simply swap $SOL to $AZUKI on{" "}
                  <img
                    src="/images/myro_img/eckodesc.svg"
                    style={{ marginBottom: "3px", width: "100px" }}
                  />
                  .{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuyEcko;
