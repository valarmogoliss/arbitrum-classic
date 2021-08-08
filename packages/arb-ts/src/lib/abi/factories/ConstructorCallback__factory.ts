/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  ConstructorCallback,
  ConstructorCallbackInterface,
} from '../ConstructorCallback'

const _abi = [
  {
    inputs: [],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'dataLength',
        type: 'uint256',
      },
    ],
    name: 'TestEvent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'dataLength',
        type: 'address',
      },
    ],
    name: 'TestEvent2',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'data',
        type: 'address',
      },
    ],
    name: 'test',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x60806040527f1440c4dd67b4344ea1905ec0318995133b550f168b4ee959a0da6b503d7d241460003690506040518082815260200191505060405180910390a13373ffffffffffffffffffffffffffffffffffffffff166366e41cb76040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561008757600080fd5b505af115801561009b573d6000803e3d6000fd5b5050505061010a806100ae6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063bb29998e14602d575b600080fd5b606c60048036036020811015604157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050606e565b005b7fba829c4567200650d8324f5576706bb44be221bc498741a8ddaa9a2739407b7d81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15056fea26469706673582212200e19c09460078f8d2f234984090f4fe12191f75a9cd2ceff7ed5afada4d480e964736f6c634300060b0033'

export class ConstructorCallback__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ConstructorCallback> {
    return super.deploy(overrides || {}) as Promise<ConstructorCallback>
  }
  getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): ConstructorCallback {
    return super.attach(address) as ConstructorCallback
  }
  connect(signer: Signer): ConstructorCallback__factory {
    return super.connect(signer) as ConstructorCallback__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ConstructorCallbackInterface {
    return new utils.Interface(_abi) as ConstructorCallbackInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConstructorCallback {
    return new Contract(address, _abi, signerOrProvider) as ConstructorCallback
  }
}
