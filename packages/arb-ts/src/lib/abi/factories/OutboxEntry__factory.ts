/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { OutboxEntry, OutboxEntryInterface } from '../OutboxEntry'

const _abi = [
  {
    inputs: [],
    name: 'destroy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_root',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_numInBatch',
        type: 'uint256',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isMaster',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'numRemaining',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'root',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_root',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_id',
        type: 'bytes32',
      },
    ],
    name: 'spendOutput',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'spentOutput',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506000805460ff191660011790556104a88061002d6000396000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c80635780e4e71461007257806357d61c0b1461008c5780635b36c66b146100af5780636f791d29146100d457806383197ef0146100f05780639db9af81146100f8578063ebf0c71714610115575b600080fd5b61007a61011d565b60408051918252519081900360200190f35b61007a600480360360408110156100a257600080fd5b5080359060200135610123565b6100d2600480360360408110156100c557600080fd5b508035906020013561023b565b005b6100dc610330565b604080519115158252519081900360200190f35b6100d2610339565b6100dc6004803603602081101561010e57600080fd5b503561039a565b61007a6103af565b60025481565b6000805461010090046001600160a01b0316331461017a576040805162461bcd60e51b815260206004820152600f60248201526e09c9ea8be8ca49e9abe9eaaa8849eb608b1b604482015290519081900360640190fd5b60008281526003602052604090205460ff16156101ce576040805162461bcd60e51b815260206004820152600d60248201526c1053149150511657d4d4115395609a1b604482015290519081900360640190fd5b600154831461020f576040805162461bcd60e51b815260206004820152600860248201526710905117d493d3d560c21b604482015290519081900360640190fd5b506000818152600360205260409020805460ff1916600117905560028054600019019081905592915050565b60005461010090046001600160a01b03161561028d576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600154156102d1576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b8161030e576040805162461bcd60e51b815260206004820152600860248201526710905117d493d3d560c21b604482015290519081900360640190fd5b60008054610100600160a81b0319163361010002179055600191909155600255565b60005460ff1690565b60005461010090046001600160a01b0316331461038f576040805162461bcd60e51b815260206004820152600f60248201526e09c9ea8be8ca49e9abe9eaaa8849eb608b1b604482015290519081900360640190fd5b610398336103b5565b565b60036020526000908152604090205460ff1681565b60015481565b6000546040805180820190915260098152684e4f545f434c4f4e4560b81b60208201529060ff16156104655760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561042a578181015183820152602001610412565b50505050905090810190601f1680156104575780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50806001600160a01b0316fffea264697066735822122060ded5f2eed3062d72d682d9c9161508dc45514a0b9865f849c11a588daae5e864736f6c634300060b0033'

export class OutboxEntry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OutboxEntry> {
    return super.deploy(overrides || {}) as Promise<OutboxEntry>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): OutboxEntry {
    return super.attach(address) as OutboxEntry
  }
  connect(signer: Signer): OutboxEntry__factory {
    return super.connect(signer) as OutboxEntry__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): OutboxEntryInterface {
    return new utils.Interface(_abi) as OutboxEntryInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OutboxEntry {
    return new Contract(address, _abi, signerOrProvider) as OutboxEntry
  }
}
