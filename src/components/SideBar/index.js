import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const SideBar = () => {
  return (
    <div className="side-bar-container">
      <Tabs>
        <TabList>
          <Tab>
            <p>Angi</p>
          </Tab>
          <Tab>
            <p>mHelpDesk</p>
          </Tab>
          <Tab>
            <p>Westat</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <h2>Apprentice Engineer</h2>
            <ul>
              <li>
                Architected and implemented the front-end of Apple Music's
                embeddable web player widget, which lets users log in and listen
                to full songs in the browser
              </li>
              <li>
                Built and shipped the Apple Music Extension within Facebook
                Messenger leveraging third-party and internal APIs
              </li>
              <li>
                Contributed extensively to MusicKit.js, a JavaScript framework
                that allows developers to add an Apple Music player to their web
                apps
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Quality Engineer</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Helpdesk Specialist</h2>
            <ul>
              <li>
                Architected and implemented the front-end of Apple Music's
                embeddable web player widget, which lets users log in and listen
                to full songs in the browser
              </li>
              <li>
                Built and shipped the Apple Music Extension within Facebook
                Messenger leveraging third-party and internal APIs
              </li>
              <li>
                Contributed extensively to MusicKit.js, a JavaScript framework
                that allows developers to add an Apple Music player to their web
                apps
              </li>
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SideBar;
