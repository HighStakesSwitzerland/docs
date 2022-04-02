---
hide:
- toc
---

# Terra

### Terra is a programmable money for the internet that is easier to spend, and more attractive to hold.

!!! note

    Validator address: [terravaloper1uymwfafhq8fruvcjq8k67a29nqzrxnv9m6m427](https://station.terra.money/validator/terravaloper1uymwfafhq8fruvcjq8k67a29nqzrxnv9m6m427){target=_blank}

<br/>

| Chain Parameter            | Value |
|----------------------------|------------------------------------ |
| Reward rate                | approximately 10% APY |
| Commission                 | 10% of the reward rate |
| Minimum tokens to stake    | No minimum |
| Unbonding period           | 21 days |
| Commission                 | 10% |
| Slashing for downtime      | 0.01% |
| Slashing for rogue nodes   | 5% |
| Slashing for missed oracle | 0.01% |

<br/>

## Wallet choices

[Terra Station](https://docs.terra.money/docs/learn/terra-station/download/terra-station-desktop.html){target=_blank} is the preferred wallet and is compatible with Ledger devices, but only the desktop version support staking.
[Keplr](https://wallet.keplr.app/){target=_blank} has also beta support that can be activated through [Osmosis](https://app.osmosis.zone/assets){target=_blank}.

## How to stake

Open Terra Station Desktop and click **Staking**.

1. Search for High Stakes in the field and click on the name in the **Moniker** column of the validator list.

2. In the **My delegations** section, click **Delegate**. A new window will appear.

3. In the **Amount** field, specify the amount of Luna you want to delegate, and click **Next**.

4. Always keep some coins to pay fees with. Never stake your entire wallet amount. Without money for fees, you can’t make any transactions!

5. Double check the amounts and fees. Enter your password and click **Delegate**.

Congratulations, you’ve just delegated Luna!

## FAQ

??? note "What are Terra staking reward rates?"

    The protocol is non-inflationary, meaning the staking rewards are a percentage of transaction fees from the Terra payment network. The current rate oscillates around 10% since the launch of columbus-5 upgrade.

??? note "Are there any risks when delegating?"

    Slashing is enabled, meaning any validator misbehaving can lose a portion of their tokens, plus the delegated ones.

    In case of prolonged downtime, the slashing amount is 0.01% once. In case of double sign, it is 5% and the validator is forever banned.

??? note "How does Terra service fee work?"

    The protocol automatically pays a commission to all active validators participating in the minting of new blocks. It is a percentage on all rewards earned related to the staking power of each validator.

??? note "Can I vote on governance proposals?"

    Yes, all users with staked tokens can vote on any proposal using Terran Station wallet.
    Validators are able to cast votes on behalf of their delegators, but it is overridden by the votes of the users.

