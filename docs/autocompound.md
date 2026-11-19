---
hide:
- toc
---
# How REStake Auto-Compounding Works

Delegators can leverage automatic reward compounding to maximize their staking yield. By continuously restaking accrued rewards into your principal delegation, you earn compound interest (**APY**) instead of simple interest (**APR**)—while also growing your USD stake eligible for daily **IBEX** loyalty points.

[**Enable REStake for Your Wallets on restake.highstakes.ch**](https://restake.highstakes.ch)

## Key Benefits

- **Compounded 2x Daily**: High Stakes runs automated restaking batches twice every day across all supported networks.
- **Zero User Gas Fees**: All transaction and network gas fees for auto-compounding are paid directly by the High Stakes validator.
- **Non-Custodial & Revocable**: Your funds never leave your wallet, and you can revoke or modify the authorization grant at any time.

## How Authz Works

**Authz** is a native Cosmos SDK module that lets your wallet grant strictly scoped permissions to another address (the validator's restake bot) to execute specific transaction types on your behalf.

When you enable REStake for High Stakes Switzerland, you authorize **only** two message types for our validator address:
1. `MsgWithdrawDelegatorReward` (claiming your staking rewards)
2. `MsgDelegate` (restaking those rewards back to High Stakes)

The validator **cannot** unbond, transfer tokens, or perform any other operation on your wallet.

## Monitoring REStake in `app.highstakes.ch`

You can track and manage your REStake status directly across the High Stakes application:

- **Dashboard (`/dashboard`)**:
  - Toggle the **REStake enabled (rewards autocompounding)** switch in the **IBEX Loyalty Program** banner to preview how auto-compounding boosts both your annual token yield and your annual IBEX bonus.
  - Scroll down to the **Maximize Your Staking Yield with REStake** section to compare live Standard APR against REStake APY and open <a href="https://restake.highstakes.ch" target="_blank">restake.highstakes.ch</a>.
- **Portfolio (`/overview`)**:
  - The **Weighted Net APY** KPI card displays how many of your active chains currently have auto-compounding enabled (`X/Y Chains Enabled`).
  - Use the **Compounding** filter tab in the **Active Delegations** table to view compounding positions.
  - Each delegation row inspects your on-chain Authz grant and displays its live status badge:
    - **`ACTIVE 2x DAILY`**: On-chain Authz grant is active and compounding automatically.
    - **`EXPIRING SOON`**: Your grant will expire shortly; click the badge to renew it on `restake.highstakes.ch`.
    - **`EXPIRED`** or **`ENABLE RESTAKE`**: Click the button in the **Auto-compound** column to open `https://restake.highstakes.ch/<chain>` and activate or renew your grant.
- **Rewards (`/rewards`)**:
  - The **Total Projected Annual Yield** card shows your estimated annual yield with REStake auto-compounding and the count of active REStake grants (`X RESTAKE ACTIVE`).

## Credits

REStake validator scripts and open-source tooling were originally pioneered by the [ECO Stake Validator team](https://restake.app/).
