

const Features = () => {
  return (
    <>
      <section
        className="py-16 md:py-20 lg:py-28 items-center flex azukiplushies relative dark:bg-black"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between flex-wrap">
            <div className="basis-12/12 md:basis-1/2">
              <img src="/images/myro_img/dog_img.png" />
            </div>

            <div className="basis-12/12 md:basis-1/2 text-padding">
            <h1 className="pb-5"> <span className="third-color"> AZUKI  </span> NFTs</h1>
            <p className="pb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
            </p>
            <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur</p>
            
            <div className="card-sec">
              <div className="innercard">
               <span className='flex gap-x-4 items-center'><img src="/images/myro_img/dollar_icon.svg" /> <h6>pay with USDC</h6></span>
              <span className="bg-danger"><p>Total price: <b>  $29.99 USDC</b></p></span>
              <h6 style={{color:"#858585", margin:"10px 0"}}>Pay with</h6>
              {/* <select><h6>$29.99 USDC </h6> <img src="/images/myro_img/dollar_icon.svg" />
              <option><h6>$29.99 USDC </h6> <img src="/images/myro_img/dollar_icon.svg" /></option>
              </select> */}
              <a href="#" className="button connect-btn">
              Connect Wallet
              </a>
              <div className="payment-method flex gap-x-4 items-center">
               <a className='flex gap-x-4 items-center'><img src="/images/myro_img/payment_icon.png" />  <h6>pay with card</h6></a>
               <a className='flex gap-x-4 items-center'><h6>QR</h6><img src="/images/myro_img/qr_icon.png" />  </a>
              </div>
              </div>
            </div>
            
            </div>

        </div>
        </div>
      </section>
      
    
    </>
  );
};

export default Features;
