import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import StormRank from './pages/StormRank';
import AuditExample from './pages/AuditExample';
import StormActivation from './pages/StormActivation';
import RequestStormActivation from './pages/RequestStormActivation';
import FreeAudit from './pages/FreeAudit';
import Insights from './pages/Insights';
import InsightArticleTemplate from './pages/InsightArticleTemplate';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stormrank" element={<StormRank />} />
          <Route path="audit-example" element={<AuditExample />} />
          <Route path="storm-activation" element={<StormActivation />} />
          <Route
            path="request-storm-activation"
            element={<RequestStormActivation />}
          />
          <Route path="free-audit" element={<FreeAudit />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<InsightArticleTemplate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}