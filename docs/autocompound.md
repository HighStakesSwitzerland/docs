---
hide:
- toc
---
# How REstake works


Delegators can leverage the compounding effect for their rewards. This results in a higher return but because of the continuous staking of rewards, the foregoing of the liquidity of your rewards.

By giving the grant permission of your wallet to a validator, it allows it to compound your rewards thus dramatically increase your APY.


[Enable REstake now!](https://tools.highstakes.ch/restake/)

## How it works / Authz

Authz is a new feature for Tendermint chains which lets you grant permission to another wallet to carry out certain transactions for you. These transactions are sent by the grantee on behalf of the granter, meaning the validator will send and pay for the TX, but actions will affect your wallet (such as claiming rewards).

REStake specifically lets you grant a validator permission to send WithdrawDelegatorReward and Delegate transactions for this validator only. The validator cannot send any other transaction types, and has no other access to your wallet. You authorise this using Keplr as normal.

Transaction fees are fully paid by the validator itself.

## Limitations
- As of writing, Ledger is unable to send the necessary transactions to enable Authz. This is purely due to the way transactions are sent to a Ledger device and a workaround should be possible soon.
- Authz is also not fully supported yet. Many chains are yet to update. The REStake UI will fall back to being a manual staking app with useful manual compounding features.
- Currently REStake needs the browser extension version of Keplr, but WalletConnect and Keplr iOS functionality will be added ASAP


## Credits

REstake validators scripts and tools are provided by [ECO Stake Validator team](https://restake.app/)