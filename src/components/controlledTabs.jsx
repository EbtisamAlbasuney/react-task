import React from "react";
import { useState } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export function ControlledTabs() {
  const [key, setKey] = useState("home");

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 "
      style={{marginTop:"-10px" }}
    >
      <Tab eventKey="home" title="FIND A JOB" style={{ fontWeight: "bold" ,border:" 2px solid #eee"}}>
        <div style={{ display: "flex" }}>
          <div style={{ borderRight: " #eee 1px solid", margin: "10px" }}>
          <label
          style={{ display: "block", fontWeight: "bold", fontSize: "13px" }}
        >
          JOB
        </label>
        <input
          placeholder="job title keyword"
          style={{
            marginRight: "5px",
            border: "1px solid #eee",
            fontSize: "12px",
            padding: "7px",
            marginTop:"7px"
          }}
        />
          </div>
          <div style={{ borderRight: " #eee 1px solid", margin: "10px" }}>
          <label
          style={{ display: "block", fontWeight: "bold", fontSize: "13px" }}
        >
          LOCATION
        </label>
        <input
          placeholder="location title keyword"
          style={{
            marginRight: "5px",
            border: "1px solid #eee",
            fontSize: "12px",
            padding: "7px",
            marginTop:"7px"
          }}
        />
          </div>
          <div style={{ borderRight: " #eee 1px solid", margin: "10px" }}>
            <label style={{ display: "block", fontWeight: "bold" ,fontSize: "13px"}}>
              CATEGORY
            </label>
            <div class="dropdown" style={{marginRight: "5px", fontSize:"12px" , padding:"7px"}}>
              <button
              style={{ marginLeft: "-6px" }}
                className="btn border dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                select industry
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <label style={{visibility:"hidden"}}>serach</label>
          <button className="btn btn-dark mt-3 " style={{width:"100%"}} type="search">
          <i className="fas fa-search #fff " style={{fontSize:"10px", padding:"5px"}}></i>
            search</button>

          </div>
        </div>
      </Tab>
      <Tab eventKey="profile" title="CREATE RESEME">
        jjjjjj
      </Tab>
    </Tabs>
        </div>
      </div>
    </div>
   
  );
}

export default ControlledTabs;

