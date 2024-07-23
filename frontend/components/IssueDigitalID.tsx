import { useState } from 'react';
import styles from '../styles/IssueDigitalID.module.css'; // Update with your module.css file
import { Web3Button } from '@thirdweb-dev/react';
import { CONTRACT_ADDRESS } from '../const/addresses';

const IssueDigitalID = () => {
  const [issueDigitalID, setIssueDigitalID] = useState(false);
  const [name, setName] = useState('');
  const [citizenAddress, setCitizenAddress] = useState('');

  function resetForm() {
    setName('');
    setCitizenAddress('');
  }

  return (
    <div>
      {!issueDigitalID ? (
        <button
          className={styles.issueDigitalIDButton}
          onClick={() => setIssueDigitalID(true)}
        >
          Issue Digital ID
        </button>
      ) : (
        <div className={styles.issueDigitalIDContainer}>
          <div className={styles.issueDigitalIDCard}>
            <button
              className={styles.closeButton}
              onClick={() => setIssueDigitalID(false)}
            >
              Close
            </button>
            <div className={styles.issueDigitalIDForm}>
              <h3>Issue Digital ID:</h3>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Citizen Address"
                value={citizenAddress}
                onChange={(e) => setCitizenAddress(e.target.value)}
              />
            </div>
            <Web3Button
              contractAddress={CONTRACT_ADDRESS}
              action={(contract) =>
                contract.call('issueDigitalID', [citizenAddress, name])
              }
              onSuccess={() => {
                resetForm();
                setIssueDigitalID(false);
              }}
            >
              Issue Digital ID
            </Web3Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssueDigitalID;
