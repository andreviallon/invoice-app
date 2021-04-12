import InvoiceCard from 'components/InvoiceCard';
import useSWR from 'swr';
import Layout from '../components/Layout';

export default function Home() {
  const fetcher = url => fetch(url).then(res => res.json());

  const { data, error } = useSWR('/api/invoices', fetcher);

  const handleCardClicked = (id: string) => {
    console.log('handleCardClicked', id);
  };

  return (
    <Layout>
      <div className="flex justify-between items-center">
        <h1 className="text-h1 font-bold dark:text-white">Invoices</h1>
      </div>
      {data ? 
        data.data.map(invoice => (
          <InvoiceCard key={invoice._id} invoice={invoice} cardClicked={() => handleCardClicked(invoice._id)}></InvoiceCard>
        ))
        :
        <div>loading...</div>
      }
    </Layout>
  )
}
