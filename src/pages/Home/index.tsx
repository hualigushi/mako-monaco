import { PageContainer } from '@ant-design/pro-components';
import { unstable_buildProxyFunction as buildProxyFunction } from 'valtio/vanilla';
console.log('qly ~ buildProxyFunction:', buildProxyFunction);
const HomePage: React.FC = () => {
  return <PageContainer ghost></PageContainer>;
};

export default HomePage;
