import React from "react";
import { useState } from "react";
import images from '../assets/images/download.jpg';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export function JobsTabs() {
  const [key, setKey] = useState("home");

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
            <p style={{fontSize:"12px", marginTop:"30px" , fontWeight:"bold"}}>we have 123 jobs for you</p>
            <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 "
      style={{marginTop:"-10px", border:"1px solid #eee" }}
    >
      <Tab eventKey="home" title="ALL JOBS" >
      <div className="d-flex justify-content-between mt-4">
          <div>< img src={images} style={{width:"40px"}}/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"green"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
      <div>< img src={images} style={{width:"40px"}}/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"green"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
      <div>< img src={images} style={{width:"40px"}}/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"green"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
      <div>< img src={images} style={{width:"40px"}}/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"green"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>



      
      </Tab>
      <Tab eventKey="PROFILE" title="FULLTIME">
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"blue"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"blue"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"blue"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"blue"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      </Tab>
      <Tab eventKey="hom" title="FREELANCE">
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"red"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"red"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"red"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"red"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      </Tab>
      <Tab  eventKey="ho" title="PARTTIME">
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"yellow"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"yellow"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"yellow"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"yellow"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      </Tab>
      <Tab eventKey="h" title="INTERNSHIP">
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"green"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"green"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"green"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
          <div>< img src="public/images/download.jpg"/></div>
          <div style={{ fontWeight: "bold", marginLeft:"10px" }}>project manger
              <p style={{ fontWeight: "normal"  , fontSize:"13px"}}><span style={{color:"blue"}}>cocacola</span> | happiness</p>
          </div>
          <div ><i class="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div><i class="far fa-clock"></i> <span>8 hours ago</span></div>
          <div ><p style={{color:"#fff",backgroundColor:"green"}}>temperary</p></div>
          <div style={{fontSize:"20px" , fontWeight:"bold", cursor:"pointer"}}>...</div>
      </div>
      </Tab>
    </Tabs>
            
        <button style={{border:"none", width:"70%",marginLeft:"15%" ,marginTop:"50px", fontWeight:"bold", padding:"10px"}}>LOAD MORE LISTINGS</button>
        </div>
      </div>
    </div>
  
  );
}

export default JobsTabs;

