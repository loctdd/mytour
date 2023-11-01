import './App.scss';
import { Route, Routes} from "react-router-dom";
import Layout from './components/Layout';
import HomePage from './components/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
        {/* <Route path="/comic/:comicId" exact element={<DetailPage />}/>
        <Route path="/comic/:comicId/:chapterNumber/:chapterId" exact element={<ChapterPage />}/> */}
      </Route>
      {/* <Route path={pathLogin} exact element={<Login/>}/>
      <Route path={pathRegister} exact element={<Register/>}/> */}
    </Routes>
  );
}

export default App;
