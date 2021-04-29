import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Web Development</td>
            <td className="deposit">$10000.00</td>
            <td>Development</td>
            <td>10/10/2020</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">- $1200.00</td>
            <td>Home</td>
            <td>11/10/2020</td>
          </tr>
          <tr>
            <td>Web Development</td>
            <td>$10000.00</td>
            <td>Development</td>
            <td>10/10/2020</td>
          </tr>
          <tr>
            <td>Web Development</td>
            <td>$10000.00</td>
            <td>Development</td>
            <td>10/10/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
