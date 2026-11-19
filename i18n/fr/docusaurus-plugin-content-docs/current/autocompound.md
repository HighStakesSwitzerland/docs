---
hide:
- toc
---
# Comment fonctionne l'Auto-Compounding REStake

Les délégateurs peuvent tirer parti de la capitalisation automatique (auto-compounding) de leurs récompenses pour maximiser leur rendement de staking. En réinvestissant continuellement les récompenses générées dans votre délégation principale, vous bénéficiez d'intérêts composés (**APY**) au lieu d'un taux simple (**APR**), tout en augmentant progressivement la valeur en USD de votre stake prise en compte pour le calcul quotidien de vos points **IBEX**.

[**Activer REStake pour vos wallets sur restake.highstakes.ch**](https://restake.highstakes.ch)

## Avantages clés

- **Capitalisé 2x par jour** : High Stakes exécute les opérations de réinvestissement automatique deux fois par jour sur l'ensemble des réseaux supportés.
- **Zéro frais de gaz pour l'utilisateur** : L'intégralité des frais de transaction liés à l'auto-compounding est prise en charge par le validateur High Stakes.
- **Non-custodial & Révocable** : Vos fonds restent à tout moment sous le contrôle de votre portefeuille et l'autorisation peut être révoquée en un clic.

## Fonctionnement du module Authz

**Authz** est un module natif du Cosmos SDK qui permet à votre portefeuille d'accorder une permission strictement limitée à une autre adresse (le robot REStake du validateur) afin d'exécuter certains types de transactions spécifiques en votre nom.

Lorsque vous activez REStake pour High Stakes Switzerland, vous autorisez **uniquement** deux opérations vers notre validateur :
1. `MsgWithdrawDelegatorReward` (réclamation de vos récompenses de staking)
2. `MsgDelegate` (redélégation immédiate de ces récompenses sur High Stakes)

Le validateur **ne peut en aucun cas** lancer d'unbonding, transférer vos jetons ou accéder au reste de votre portefeuille.

## Suivi de REStake dans `app.highstakes.ch`

Vous pouvez suivre l'état de vos autorisations REStake en temps réel directement dans l'application High Stakes :

- **Tableau de bord (`/dashboard`)** :
  - Activez le commutateur **REStake activé (réinvestissement automatique des récompenses)** dans la bannière du programme IBEX pour simuler l'impact de l'auto-compounding sur votre rendement annuel et votre bonus IBEX.
  - Consultez la section **Maximisez vos rendements de staking avec REStake** en bas de page pour comparer l'APR standard et l'APY REStake en direct.
- **Portefeuille (`/overview`)** :
  - La carte **APY Net Pondéré** indique le nombre de chaînes sur lesquelles l'auto-compounding est actif (`X/Y Chaînes Activées`).
  - Utilisez l'onglet de filtre **Auto-compound** dans la table **Délégations Actives** pour filtrer vos positions.
  - Chaque ligne vérifie votre autorisation Authz on-chain et affiche son statut en direct :
    - **`ACTIF 2x PAR JOUR`** : L'autorisation Authz est active et vos récompenses sont réinvesties deux fois par jour.
    - **`EXPIRE BIENTÔT`** : Votre autorisation arrive à échéance ; cliquez dessus pour la renouveler sur `restake.highstakes.ch`.
    - **`EXPIRÉ`** ou **`ACTIVER RESTAKE`** : Cliquez sur le bouton dans la colonne **Auto-compound** pour ouvrir `https://restake.highstakes.ch/<chain>` et activer ou renouveler votre autorisation.
- **Récompenses (`/rewards`)** :
  - La carte **Rendement Annuel Projeté Total** affiche votre rendement annuel estimé avec REStake ainsi que le nombre de chaînes actives (`X RESTAKE ACTIF(S)`).

## Crédits

Les scripts et outils open-source REStake ont été initialement conçus par l'[équipe de validation ECO Stake](https://restake.app/).
