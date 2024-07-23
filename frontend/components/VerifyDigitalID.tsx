import { useState } from 'react';
import { Web3Button, useContract } from '@thirdweb-dev/react';
import { CONTRACT_ADDRESS } from '../const/addresses';

const VerifyDigitalID = () => {
  const [citizenAddress, setCitizenAddress] = useState('');
  const [transactionPending, setTransactionPending] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('');

  // Use the useContract hook to get the contract instance
  const { contract } = useContract(CONTRACT_ADDRESS);

  const verifyDigitalIDHandler = async () => {
    try {
      // Validate input
      if (!citizenAddress) {
        throw new Error('Citizen address is required');
      }

      // Set transaction pending state
      setTransactionPending(true);

      // Call the smart contract function to verify a digital ID
      await contract?.call('verifyDigitalID', [citizenAddress]);

      // Set verification status after successful verification
      setVerificationStatus('Digital ID verified successfully');
    } catch (error) {
      console.error('Error verifying digital ID:', error);
      setVerificationStatus('Failed to verify digital ID');
    } finally {
      // Reset transaction pending state
      setTransactionPending(false);
    }
  };

  return (
    <div>
      <h2>Verify Digital ID</h2>
      <p>Citizen Address:</p>
      <input type="text" value={citizenAddress} onChange={(e) => setCitizenAddress(e.target.value)} /><br></br><br></br>
      <Web3Button
        contractAddress={CONTRACT_ADDRESS}
        action={(contract) => contract.call('verifyDigitalID', [citizenAddress])}
        onSuccess={() => setVerificationStatus('Digital ID verified successfully')}
        onError={(error) => {
          console.error('Error verifying digital ID:', error);
          setVerificationStatus('Failed to verify digital ID');
        }}
        isDisabled={transactionPending}
      >
        {transactionPending ? 'Verifying...' : 'Verify Digital ID'}
      </Web3Button>
      {verificationStatus && <p>{verificationStatus}</p>}
    </div>
  );
};

export default VerifyDigitalID;
