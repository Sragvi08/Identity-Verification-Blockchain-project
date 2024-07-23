# Identity Verification DApp

This project is a Decentralized Application (DApp) for issuing and verifying digital IDs using Ethereum blockchain. It utilizes React, Next.js, ThirdWeb SDK, and TypeScript for the frontend and integrates with a smart contract deployed on the Ethereum network.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Smart Contract](#smart-contract)
- [Screenshots](#screenshots)
- [License](#license)

## Overview

This DApp follows the following scenario wherein it allows government officials to issue and verify digital IDs for citizens. Citizens can connect their Ethereum wallet to view their issued digital IDs and their verification status.

## Features

- **Issue Digital ID**: Government officials can issue a digital ID to citizens.
- **Verify Digital ID**: Government officials can verify the digital ID of citizens.
- **View Issued IDs**: Users can view a list of all issued digital IDs and their verification status.

## Technologies Used

- **Frontend**: React, Next.js, TypeScript, CSS Modules
- **Blockchain Interaction**: ThirdWeb SDK, Web3.js
- **Ethereum Wallet Integration**: MetaMask

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MetaMask extension in your browser

### Installation Steps

1. **Clone the repository:**

```sh
git clone https://github.com/your-username/identity-verification-dapp.git
cd identity-verification-dapp
```

2. **Install dependencies:**

```sh
npm install
```

or

```sh
yarn install
```

3. **Create a `.env.local` file in the root directory and add your ThirdWeb project URL:**

```env
NEXT_PUBLIC_THIRDWEB_PROJECT_URL=your-thirdweb-project-url
```

4. **Run the development server:**

```sh
npm run dev
```

or

```sh
yarn dev
```

5. **Open the application in your browser:**

```sh
http://localhost:3000
```

## Usage

1. **Connect your Ethereum wallet using MetaMask.**
2. **As a government official, you can issue and verify digital IDs.**
3. **Citizens can view their issued digital IDs and their verification status.**

## Screenshots

![Home Page](./screenshots/home.png)
*Description: Home page of the DApp.*

![Issue Digital ID](./screenshots/issue-digital-id.png)
*Description: Form to issue a digital ID.*

![Verify Digital ID](./screenshots/verify-digital-id.png)
*Description: Form to verify a digital ID.*

![View Issued IDs](./screenshots/view-issued-ids.png)
*Description: List of issued digital IDs and their verification status.*

## License

This project is licensed under the MIT License.

---
