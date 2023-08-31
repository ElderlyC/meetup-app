import { Routes, Route } from "react-router-dom";
import HostMeetupPage from "./Pages/HostMeetupPage";
import MeetupSettingsPage from "./Pages/MeetupSettingsPage";
import TablePage from "./Pages/TablePage";
import MeetupsListPage from "./Pages/MeetupsListPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HostMeetupPage />} />
          <Route path="/Meetup-Settings" element={<MeetupSettingsPage />} />
          <Route path="/Table" element={<TablePage />} />
          <Route path="/Meetups-List" element={<MeetupsListPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
