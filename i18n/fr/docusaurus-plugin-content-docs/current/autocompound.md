---
hide:
- toc
---
# Comment fonctionne REstake

Les stakers peuvent exploiter l'effet de capitalisation de leurs récompenses. Cela entraîne un rendement plus élevé, mais en contrepartie, la liquidité de vos récompenses est sacrifiée en raison du réinvestissement continu.

En donnant l'autorisation à un validateur de restake votre wallet, vous lui permettez de capitaliser vos récompenses et d'augmenter considérablement votre APY.

[Activez REstake maintenant !](https://tools.highstakes.ch/restake/)

## Fonctionnement / Authz

Authz est une nouvelle fonctionnalité pour les chaînes Tendermint qui vous permet de donner la permission à un autre wallet d'effectuer certaines transactions en votre nom. Ces transactions sont envoyées par le bénéficiaire au nom du donateur, ce qui signifie que le validateur enverra et paiera la transaction, mais les actions auront un impact sur votre wallet (comme la réclamation des récompenses).

REStake vous permet spécifiquement d'accorder au validateur l'autorisation d'envoyer des transactions de **retrait de rewards** (WithdrawDelegatorReward) et de **délégation** (Delegate) pour ce validateur uniquement. Le validateur ne peut pas envoyer d'autres types de transactions (envoyer vos cryptos par exemple) et n'a pas d'autres accès à votre wallet. Vous autorisez cela en utilisant Keplr comme d'habitude.

Les frais de transaction sont entièrement pris en charge par le validateur lui-même.

## Limitations
- Authz n'est pas encore entièrement pris en charge. De nombreuses chaînes doivent encore effectuer des mises à jour. L'interface REStake se transformera alors en une application de staking manuelle avec des fonctionnalités de capitalisation manuelle utiles.
- Actuellement, REStake nécessite la version d'extension pour navigateur de Keplr, mais la fonctionnalité sur Keplr Mobile sera ajoutée dès que possible.

## Crédits

Les scripts et outils des validateurs REstake sont fournis par l'équipe [ECO Stake Validator](https://restake.app/)
