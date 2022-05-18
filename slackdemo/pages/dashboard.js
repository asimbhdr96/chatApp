

import PrivateRoute from '../client/components/PrivateRoute'

const Dashboard = () => {
  return (<PrivateRoute>
  <div>Hello</div>
  </PrivateRoute>);
};

Dashboard.getInitialProps = async props => {
  console.info('##### Congratulations! You are authorized! ######', props);
  return {};
};

export default Dashboard;
