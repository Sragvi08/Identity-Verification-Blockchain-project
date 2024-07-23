import { useEffect, useState } from 'react';
import { useContract } from '@thirdweb-dev/react';
import { CONTRACT_ADDRESS } from '../const/addresses';
import styles from '../styles/IssuedIDs.module.css'; 

interface DigitalID {
  owner: string;
  name: string;
  verified: boolean;
}

const IssuedIDs = () => {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const [issuedIDs, setIssuedIDs] = useState<DigitalID[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (contract) {
      fetchIssuedIDs();
    }
  }, [contract]);

  const fetchIssuedIDs = async () => {
    try {
      const ids: DigitalID[] = [];
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      for (const account of accounts) {
        const id = await contract?.call('digitalIDs', [account]);
        if (id.owner !== '0x0000000000000000000000000000000000000000') {
          ids.push(id);
        }
      }
      setIssuedIDs(ids);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching issued IDs:', error);
      setLoading(false);
    }
  };

  return (
    <div className={styles.issuedIDsContainer}>
      <h2>Issued IDs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.issuedIDsList}>
          {issuedIDs.length === 0 ? (
            <p>No IDs issued yet.</p>
          ) : (
            <ul>
              {issuedIDs.map((id, index) => (
                <li key={index} className={styles.issuedIDItem}>
                  <strong>Owner:</strong> {id.owner} | <strong>Name:</strong> {id.name} | <strong>Verified:</strong>{' '}
                  {id.verified ? 'Yes' : 'No'}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default IssuedIDs;
