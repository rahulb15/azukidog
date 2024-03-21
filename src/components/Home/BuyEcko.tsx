import React from "react";

const BuyEcko = () => {
    return (
        <>
            <section className="buysazuki-sec py-16 relative" style={{ background: "#000" }}>
                <div className="container mx-auto">
                    <div className="flex items-top justify-between flex-wrap" style={{backgroundImage:"url('/images/myro_img/purple_light.svg')", backgroundPosition:"bottom center"}}>
                        <div className="basis-full md:basis-6/12">
                            <div className="swap-div relative">
                                <div className="inner-swap flex justify-between">
                                    <span className="flex justify-between items-center"><h3>SWAP</h3></span>
                                    <div className="right-swap flex justify-between items-center gap-x-4">
                                        <div className="gradi_border gradi_circle">
                                            <img src="/images/myro_img/restart.svg" />
                                        </div>
                                        <div className="gradi_border gradi_circle">
                                            <img src="/images/myro_img/setting.svg" />
                                        </div>
                                        <a href="#" className="btn-how-buy gradi_border gradi_border-full" style={{padding:"8px", minWidth:"140px"}}  >
                                           <span className="z-10 relative" style={{fontSize:"16px"}}>  Game Mode </span></a>
                                    </div>
                                </div>
                                <div className="inner-swap flex justify-between gradi_border">
                                    <div className="inner-side-swap">
                                        <h3>Give</h3>
                                        <h2 className="third-color">0.00</h2>
                                    </div>
                                    <div className="inner-side-swap">
                                        <h5 className="gray">Balance: 0.00</h5>
                                        <div className="inner_coin gradi_border middium-gradi_border flex items-center">
                                            <img src="/images/myro_img/dollar_icon.svg" />
                                            <select name="kda" id="" className="border">
                                                <option value="">

                                                    KDA</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>

                                <div className="gradi_border middium-gradi_border down_arrow">
                                    <img src="/images/myro_img/down_arrow.png" style={{position:"absolute", top:"15px",left:"15px", width:"20px"}}/>
                                </div>
                                <div className="inner-swap flex justify-between gradi_border">
                                    <div className="inner-side-swap">
                                        <h3>Receive</h3>
                                        <h2 className="third-color">0.00</h2>
                                    </div>
                                    <div className="inner-side-swap">
                                        <h5 className="gray">Balance: 0.00</h5>
                                        <div className="inner_coin border flex items-center gradi_border middium-gradi_border justify-between">
                                            <img src="/images/myro_img/dollar_icon.svg" />
                                            <select name="kda" id="" className="border">
                                                <option value="">

                                                    KDA</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="inner-swap flex justify-between px-4">
                                    <span><h3>Gas cost</h3></span>
                                    <span><h3>Free</h3></span>
                                </div>

                                <div className="inner-swap flex justify-between">
                                <a className="border gradi_border gradi_border-full w-full" href="#">
                                <span className="z-10 relative">Connect Wallet</span>
                                </a>

                                
                                </div>
                                


                            </div>
                        </div>
                        <div className="basis-full md:basis-5/12 flex pt-4">
                            <div className="w-full">
                                <div className="flex items-center">
                                <h1 className="pb-5  items-c">Or  buy  using  <br />
                                    <span style={{ color: "#fc01b5" }} className="flex gap-x-1 items-center"> <img src="/images/myro_img/eckodesc.svg" style={{ marginLeft: "-13px" }} /> :</span>
                                   
                                    </h1>
                                    <img src="/images/myro_img/paw_img.svg" style={{ marginBottom: "3px", width: "100px" }} />

                                    </div>
                                <p style={{ textAlign: "left" }} className="flex items-center">
                                    Then simply swap $SOL to $AZUKI on <img src="/images/myro_img/eckodesc.svg" style={{ marginBottom: "3px", width: "100px" }} />. </p>

                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default BuyEcko;
