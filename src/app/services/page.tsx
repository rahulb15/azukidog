"use client";
import { Metadata } from "next";
import { motion } from "framer-motion";


const Services = () => {
  const tradeCycleData = [
    [1, 1000000, "7%", 70000, "80%", 56000, "20%", "2%", 20000],
    [2, 1052000, "7%", 73640, "80%", 58912, "20%", "2%", 21040],
    [3, 1110912, "7%", 77764, "80%", 62211, "20%", "2%", 22218],
    [4, 1173123, "7%", 82119, "80%", 65695, "20%", "2%", 23462],
    [5, 1238818, "7%", 86717, "80%", 69374, "20%", "2%", 24776],
    [6, 1308192, "7%", 91573, "80%", 73259, "20%", "2%", 26164],
    [7, 1381451, "7%", 96702, "80%", 77361, "20%", "2%", 27629],
    [8, 1458812, "7%", 102117, "80%", 81693, "20%", "2%", 29176],
    [9, 1540505, "7%", 107835, "80%", 86268, "20%", "2%", 30810],
    [10, 1626773, "7%", 113874, "80%", 91099, "20%", "2%", 32535],
    [11, 1717873, "7%", 120251, "80%", 96201, "20%", "2%", 34357],
    [12, 1814074, "7%", 126985, "80%", 101588, "20%", "2%", 36281],
  ];

  const recentTradesData = [
    ["NCC", "03-24-23", 105.55, 120, "04-25-23", 4.5, 118.5, 12.27],
    ["NCC", "03-24-23", 106.52, 120, "04-25-23", 4.5, 118.5, 11.25],
    ["BATA India", "04-25-23", 1470, 1560, "05-16-23", 3, 1545, 5.1],
    ["BATA India", "04-25-23", 1471, 1560, "05-16-23", 3, 1545, 5.03],
    ["Laurus Labs", "16-05-2023", 316, 340, "30-05-2023", 2, 332, 5.06],
    ["Quess", "30-05-2023", 411, 440, "12-06-2023", 1.8, 428.45, 4.25],
    [
      "Engineers India",
      "30-05-2023",
      110.44,
      125,
      "22-06-2023",
      3.2,
      117.45,
      6.35,
    ],
    ["Quess", "31-05-2023", 410, 440, "12-06-2023", 1.7, 428.3, 4.46],
    ["Century Ply", "12-06-2023", 612.8, 670, "30-06-2023", 2.5, 662, 8.03],
    ["Century Ply", "12-06-2023", 613.47, 670, "30-06-2023", 2.5, 662, 7.91],
    ["STAR", "22-06-2023", 412.22, 470, "03-07-2023", 1.5, 468.32, 13.61],
    ["CDSL", "30-06-2023", 1111, 1180, "03-07-2023", 0.4, 1160, 4.41],
    ["Suprajit", "04-07-2023", 420, 460, "26-07-2023", 3.1, 418, -0.48],
    ["Nazara", "04-07-2023", 718, "785-850", "14-07-2023", 1.4, 662, -7.8],
    [
      "Sun Pharma",
      "14-07-2023",
      1072,
      "1150-1175",
      "26-07-2023",
      1.7,
      1122,
      4.66,
    ],
    ["BHEL", "26-07-2023", 103, "120-139", "28-08-2023", 4.7, 134, 30.1],
    ["HEG", "02-08-2023", 1758, 2200, "28-08-2023", 3.7, 1763, 0.28],
    ["MOIL", "29-08-2023", 226, 260, "01-09-2023", 0.4, 242.6, 7.35],
  ];

  return (
    <>
      <section className="pb-[120px] pt-[120px]">
      <motion.div initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
        className="container"
      >
        {/* <div className="container"> */}
          <div className="-mx-4 flex flex-wrap justify-center">
            <section id="about" className="about section-bg service-sec">
              <div className="container" data-aos="fade-up">
                <div className="section-title"></div>
                <div className="row service-row mb-5 mt-5  bg-white rounded-lg shadow-lg  text-center text-lg-left" style={{ border: '1px solid', borderRadius:'0' }}>
                  {/* First Column (col-md-4) */}
                  <div className="col-md-3 bg-primary text-center text-white">
                    <div className="divCenter" style={{height:"100%", display:"flex", alignItems:'center', padding:'20px'}}>
                      <h3 className="pt-4">
                        Minimum Investment of 2500 US $ Equivalent
                      </h3>
                      {/* <p className="p-3 text-left">Minimum Investment is equivalent to 2500 US $ .This will be Highlighted
                        like Investment 50 Lakh</p> */}
                    </div>
                  </div>

                  {/* Second Column (col-md-8) */}
                  <div className="col-md-9">
                    {/* Nested Row within Second Column */}
                    <div className="row service-row">
                      {/* Nested Column (col-md-3) */}
                      <div className="col-md-3">
                        <p className="pt-4">
                          We would like to recommend a time frame of minimum 2
                          years for investment to experience the real benefit of
                          investment
                        </p>
                      </div>
                      <div className="col-md-3 vl">
                        <p className="pt-4">
                          Funds entrusted will be deployed in varied asset
                          classes as per the proper Risk Vs Rewards Analysis and
                          client’s requirement
                        </p>
                      </div>
                      <div className="col-md-3 vl">
                        <p className="pt-4">
                          Confiance charges 25% of profit as our fees, there
                          will be no Management Fees for investment. Confiance
                          utilizes waterfall model for fee calculation
                        </p>
                      </div>
                      <div className="col-md-3 vl">
                        <p className="pt-4">
                          We recommend only unleveraged funds, set aside for
                          long term investment, be invested with us.
                        </p>
                      </div>
                      <div
                        className="col-md-12"
                        style={{ backgroundColor: "gainsboro" }}
                      >
                        <p className="py-3" style={{ fontSize: "15px" }}>
                          Investments in equities are subject to market risks.
                          There is no assurance of capital protection or
                          guaranteed returns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-5 mt-5">
                  <div
                    className="col-lg-12 pt-lg-0 content d-flex flex-column justify-content-center mt-4 pt-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <h4>Customized Financial Planning (Charges – 50US $)</h4>
                    <b>Portfolio Management Service</b>
                    <ul style={{ listStyle:'outside', paddingBottom:'20px' }}>
                      <li>
                        High Risk – High Returns (Money deployed to Crypto
                        Currency investment & Crypto/Tech Startups).
                      </li>
                      <li>
                        Medium Risk – Higher Returns (Money deployed to Swing
                        Trading across India & US markets).
                      </li>
                    </ul>
                    <b>Illustration</b>
                    <p style={{ textAlign: "justify" }}>
                      We are working with high degree of accuracy (~80% Success
                      rate) estimate of 5-7% return potential for every
                      investment per Trader Cycle(#). We do active analysis
                      based on Risk! Reward analysis for each trade. Below
                      illustration showcases ~90% overall return before payment
                      of Confiance fees with conservative estimates.
                    </p>
                  </div>
                </div>

                <div className="row custom-table-row">
                  {/* Render trade cycle table */}
                  <table className="table-striped table service-table" border={1}>
                    <thead>
                      <tr>
                        <th>Trade Cycle#</th>
                        <th>Corpus</th>
                        <th>Return Objective</th>
                        <th>Potential Profit</th>
                        <th>Success</th>
                        <th>Potential Gain</th>
                        <th>Failure</th>
                        <th>Stop Loss</th>
                        <th>Potential Loss</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Render trade cycle data rows */}
                      {tradeCycleData.map((row, index) => (
                        <tr key={index}>
                          {row.map((value, index) => (
                            <td key={index}>{value}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <h4>Few Recent Trades </h4>

                  {/* Render recent trades table */}
                  <table className="table-striped table service-table" border={1}>
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Buy Date</th>
                        <th>Buy Price</th>
                        <th>Target</th>
                        <th>Sell Date</th>
                        <th>Holding Period (Week#)</th>
                        <th>Sell Price</th>
                        <th>Profit Loss%</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Render recent trades data rows */}
                      {recentTradesData.map((row, index) => (
                        <tr key={index}>
                          {row.map((value, index) => (
                            <td key={index}>{value}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        {/* </div> */}
      </motion.div>
      </section>
    </>
  );
};

export default Services;
