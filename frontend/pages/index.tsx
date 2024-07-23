import { useState } from 'react';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css';
import { NextPage } from 'next';
import IssueDigitalID from '../components/IssueDigitalID';
import VerifyDigitalID from '../components/VerifyDigitalID'; 
import IssuedIDs from '../components/IssuedIDs';

const IndexPage: NextPage = () => {
  const [walletConnected, setWalletConnected] = useState<boolean>(false);
  const address = useAddress();

  const walletConnectHandler = () => {
    setWalletConnected(true);
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to Identity Verification DApp</h1>
      <p>This DApp allows you to issue and verify digital IDs for citizens.</p>

      {!walletConnected ? (
        <div>
          <ConnectWallet /><br></br>
          <button id="bb1" onClick={walletConnectHandler}>I have connected my wallet</button>
        </div>
      ) : (
        <div>
          <p>Connected with address: {address}</p>
          <IssueDigitalID/>
          <VerifyDigitalID />
          < IssuedIDs/>
        </div>
      )}
    </div>
  );
};

export default IndexPage;