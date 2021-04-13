import InvoiceCard from 'components/InvoiceCard';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import Layout from '../components/Layout';

const Home = () => {
  const { data, error } = useSWR('/api/invoices', fetcher);

  const handleCardClicked = (id: string) => {
    console.log('handleCardClicked', id);
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-h1 font-bold dark:text-white">Invoices</h1>
      </div>
      { data && data.data.map(invoice => (
          <InvoiceCard key={invoice._id} invoice={invoice} cardClicked={() => handleCardClicked(invoice._id)} />
      ))}
    </Layout>
  )
}

export default Home
