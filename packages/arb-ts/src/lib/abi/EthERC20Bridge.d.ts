/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface EthERC20BridgeInterface extends ethers.utils.Interface {
  functions: {
    'calculateL2TokenAddress(address)': FunctionFragment
    'customL2Token(address)': FunctionFragment
    'deposit(address,address,uint256,uint256,uint256,uint256,bytes)': FunctionFragment
    'forceRegisterCustomL2Token(address,address,uint256,uint256,uint256,address)': FunctionFragment
    'getDepositCalldata(address,address,address,uint256,bytes)': FunctionFragment
    'hasTriedDeploy(address)': FunctionFragment
    'inbox()': FunctionFragment
    'initialize(address,address,address,address,address)': FunctionFragment
    'isCustomToken(address)': FunctionFragment
    'l2ArbTokenBridgeAddress()': FunctionFragment
    'owner()': FunctionFragment
    'redirectedExits(bytes32)': FunctionFragment
    'registerCustomL2Token(address,uint256,uint256,uint256,address)': FunctionFragment
    'setOwner(address)': FunctionFragment
    'transferExitAndCall(address,address,uint256,uint256,address,bytes)': FunctionFragment
    'updateWhitelistSource(address)': FunctionFragment
    'whitelist()': FunctionFragment
    'withdrawFromL2(uint256,address,address,uint256)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'calculateL2TokenAddress',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'customL2Token',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'forceRegisterCustomL2Token',
    values: [string, string, BigNumberish, BigNumberish, BigNumberish, string]
  ): string
  encodeFunctionData(
    functionFragment: 'getDepositCalldata',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'hasTriedDeploy',
    values: [string]
  ): string
  encodeFunctionData(functionFragment: 'inbox', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string, string, string, string]
  ): string
  encodeFunctionData(
    functionFragment: 'isCustomToken',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'l2ArbTokenBridgeAddress',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'redirectedExits',
    values: [BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'registerCustomL2Token',
    values: [string, BigNumberish, BigNumberish, BigNumberish, string]
  ): string
  encodeFunctionData(functionFragment: 'setOwner', values: [string]): string
  encodeFunctionData(
    functionFragment: 'transferExitAndCall',
    values: [string, string, BigNumberish, BigNumberish, string, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'updateWhitelistSource',
    values: [string]
  ): string
  encodeFunctionData(functionFragment: 'whitelist', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'withdrawFromL2',
    values: [BigNumberish, string, string, BigNumberish]
  ): string

  decodeFunctionResult(
    functionFragment: 'calculateL2TokenAddress',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'customL2Token',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'forceRegisterCustomL2Token',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getDepositCalldata',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'hasTriedDeploy',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'inbox', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'isCustomToken',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'l2ArbTokenBridgeAddress',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'redirectedExits',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'registerCustomL2Token',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'setOwner', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'transferExitAndCall',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'updateWhitelistSource',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'whitelist', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'withdrawFromL2',
    data: BytesLike
  ): Result

  events: {
    'ActivateCustomToken(uint256,address,address)': EventFragment
    'DeployToken(uint256,address)': EventFragment
    'DepositToken(address,address,uint256,uint256,address)': EventFragment
    'WhitelistSourceUpdated(address)': EventFragment
    'WithdrawExecuted(address,address,address,uint256,uint256)': EventFragment
    'WithdrawRedirected(address,address,address,uint256,uint256,bool)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'ActivateCustomToken'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'DeployToken'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'DepositToken'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WhitelistSourceUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WithdrawExecuted'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WithdrawRedirected'): EventFragment
}

export class EthERC20Bridge extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: EthERC20BridgeInterface

  functions: {
    calculateL2TokenAddress(
      erc20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    'calculateL2TokenAddress(address)'(
      erc20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    customL2Token(arg0: string, overrides?: CallOverrides): Promise<[string]>

    'customL2Token(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    deposit(
      erc20: string,
      destination: string,
      amount: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      callHookData: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'deposit(address,address,uint256,uint256,uint256,uint256,bytes)'(
      erc20: string,
      destination: string,
      amount: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      callHookData: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    forceRegisterCustomL2Token(
      l1CustomTokenAddress: string,
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'forceRegisterCustomL2Token(address,address,uint256,uint256,uint256,address)'(
      l1CustomTokenAddress: string,
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    getDepositCalldata(
      erc20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      callHookData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string] & { isDeployed: boolean; depositCalldata: string }
    >

    'getDepositCalldata(address,address,address,uint256,bytes)'(
      erc20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      callHookData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string] & { isDeployed: boolean; depositCalldata: string }
    >

    hasTriedDeploy(arg0: string, overrides?: CallOverrides): Promise<[boolean]>

    'hasTriedDeploy(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    inbox(overrides?: CallOverrides): Promise<[string]>

    'inbox()'(overrides?: CallOverrides): Promise<[string]>

    initialize(
      _inbox: string,
      _l2TemplateERC20: string,
      _l2ArbTokenBridgeAddress: string,
      _owner: string,
      _whitelist: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'initialize(address,address,address,address,address)'(
      _inbox: string,
      _l2TemplateERC20: string,
      _l2ArbTokenBridgeAddress: string,
      _owner: string,
      _whitelist: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    isCustomToken(
      l1Token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    'isCustomToken(address)'(
      l1Token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    l2ArbTokenBridgeAddress(overrides?: CallOverrides): Promise<[string]>

    'l2ArbTokenBridgeAddress()'(overrides?: CallOverrides): Promise<[string]>

    owner(overrides?: CallOverrides): Promise<[string]>

    'owner()'(overrides?: CallOverrides): Promise<[string]>

    redirectedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>

    'redirectedExits(bytes32)'(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>

    registerCustomL2Token(
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'registerCustomL2Token(address,uint256,uint256,uint256,address)'(
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    setOwner(
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'setOwner(address)'(
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    transferExitAndCall(
      initialDestination: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'transferExitAndCall(address,address,uint256,uint256,address,bytes)'(
      initialDestination: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'updateWhitelistSource(address)'(
      newSource: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    whitelist(overrides?: CallOverrides): Promise<[string]>

    'whitelist()'(overrides?: CallOverrides): Promise<[string]>

    withdrawFromL2(
      exitNum: BigNumberish,
      erc20: string,
      initialDestination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'withdrawFromL2(uint256,address,address,uint256)'(
      exitNum: BigNumberish,
      erc20: string,
      initialDestination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  calculateL2TokenAddress(
    erc20: string,
    overrides?: CallOverrides
  ): Promise<string>

  'calculateL2TokenAddress(address)'(
    erc20: string,
    overrides?: CallOverrides
  ): Promise<string>

  customL2Token(arg0: string, overrides?: CallOverrides): Promise<string>

  'customL2Token(address)'(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>

  deposit(
    erc20: string,
    destination: string,
    amount: BigNumberish,
    maxSubmissionCost: BigNumberish,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    callHookData: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'deposit(address,address,uint256,uint256,uint256,uint256,bytes)'(
    erc20: string,
    destination: string,
    amount: BigNumberish,
    maxSubmissionCost: BigNumberish,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    callHookData: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  forceRegisterCustomL2Token(
    l1CustomTokenAddress: string,
    l2CustomTokenAddress: string,
    maxSubmissionCost: BigNumberish,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    refundAddress: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'forceRegisterCustomL2Token(address,address,uint256,uint256,uint256,address)'(
    l1CustomTokenAddress: string,
    l2CustomTokenAddress: string,
    maxSubmissionCost: BigNumberish,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    refundAddress: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  getDepositCalldata(
    erc20: string,
    sender: string,
    destination: string,
    amount: BigNumberish,
    callHookData: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string] & { isDeployed: boolean; depositCalldata: string }
  >

  'getDepositCalldata(address,address,address,uint256,bytes)'(
    erc20: string,
    sender: string,
    destination: string,
    amount: BigNumberish,
    callHookData: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string] & { isDeployed: boolean; depositCalldata: string }
  >

  hasTriedDeploy(arg0: string, overrides?: CallOverrides): Promise<boolean>

  'hasTriedDeploy(address)'(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>

  inbox(overrides?: CallOverrides): Promise<string>

  'inbox()'(overrides?: CallOverrides): Promise<string>

  initialize(
    _inbox: string,
    _l2TemplateERC20: string,
    _l2ArbTokenBridgeAddress: string,
    _owner: string,
    _whitelist: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'initialize(address,address,address,address,address)'(
    _inbox: string,
    _l2TemplateERC20: string,
    _l2ArbTokenBridgeAddress: string,
    _owner: string,
    _whitelist: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  isCustomToken(l1Token: string, overrides?: CallOverrides): Promise<boolean>

  'isCustomToken(address)'(
    l1Token: string,
    overrides?: CallOverrides
  ): Promise<boolean>

  l2ArbTokenBridgeAddress(overrides?: CallOverrides): Promise<string>

  'l2ArbTokenBridgeAddress()'(overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  'owner()'(overrides?: CallOverrides): Promise<string>

  redirectedExits(arg0: BytesLike, overrides?: CallOverrides): Promise<string>

  'redirectedExits(bytes32)'(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  registerCustomL2Token(
    l2CustomTokenAddress: string,
    maxSubmissionCost: BigNumberish,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    refundAddress: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'registerCustomL2Token(address,uint256,uint256,uint256,address)'(
    l2CustomTokenAddress: string,
    maxSubmissionCost: BigNumberish,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    refundAddress: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  setOwner(_owner: string, overrides?: Overrides): Promise<ContractTransaction>

  'setOwner(address)'(
    _owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  transferExitAndCall(
    initialDestination: string,
    erc20: string,
    amount: BigNumberish,
    exitNum: BigNumberish,
    to: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'transferExitAndCall(address,address,uint256,uint256,address,bytes)'(
    initialDestination: string,
    erc20: string,
    amount: BigNumberish,
    exitNum: BigNumberish,
    to: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  updateWhitelistSource(
    newSource: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'updateWhitelistSource(address)'(
    newSource: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  whitelist(overrides?: CallOverrides): Promise<string>

  'whitelist()'(overrides?: CallOverrides): Promise<string>

  withdrawFromL2(
    exitNum: BigNumberish,
    erc20: string,
    initialDestination: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'withdrawFromL2(uint256,address,address,uint256)'(
    exitNum: BigNumberish,
    erc20: string,
    initialDestination: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    calculateL2TokenAddress(
      erc20: string,
      overrides?: CallOverrides
    ): Promise<string>

    'calculateL2TokenAddress(address)'(
      erc20: string,
      overrides?: CallOverrides
    ): Promise<string>

    customL2Token(arg0: string, overrides?: CallOverrides): Promise<string>

    'customL2Token(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>

    deposit(
      erc20: string,
      destination: string,
      amount: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      callHookData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        seqNum: BigNumber
        depositCalldataLength: BigNumber
      }
    >

    'deposit(address,address,uint256,uint256,uint256,uint256,bytes)'(
      erc20: string,
      destination: string,
      amount: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      callHookData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        seqNum: BigNumber
        depositCalldataLength: BigNumber
      }
    >

    forceRegisterCustomL2Token(
      l1CustomTokenAddress: string,
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'forceRegisterCustomL2Token(address,address,uint256,uint256,uint256,address)'(
      l1CustomTokenAddress: string,
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getDepositCalldata(
      erc20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      callHookData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string] & { isDeployed: boolean; depositCalldata: string }
    >

    'getDepositCalldata(address,address,address,uint256,bytes)'(
      erc20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      callHookData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string] & { isDeployed: boolean; depositCalldata: string }
    >

    hasTriedDeploy(arg0: string, overrides?: CallOverrides): Promise<boolean>

    'hasTriedDeploy(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>

    inbox(overrides?: CallOverrides): Promise<string>

    'inbox()'(overrides?: CallOverrides): Promise<string>

    initialize(
      _inbox: string,
      _l2TemplateERC20: string,
      _l2ArbTokenBridgeAddress: string,
      _owner: string,
      _whitelist: string,
      overrides?: CallOverrides
    ): Promise<void>

    'initialize(address,address,address,address,address)'(
      _inbox: string,
      _l2TemplateERC20: string,
      _l2ArbTokenBridgeAddress: string,
      _owner: string,
      _whitelist: string,
      overrides?: CallOverrides
    ): Promise<void>

    isCustomToken(l1Token: string, overrides?: CallOverrides): Promise<boolean>

    'isCustomToken(address)'(
      l1Token: string,
      overrides?: CallOverrides
    ): Promise<boolean>

    l2ArbTokenBridgeAddress(overrides?: CallOverrides): Promise<string>

    'l2ArbTokenBridgeAddress()'(overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    'owner()'(overrides?: CallOverrides): Promise<string>

    redirectedExits(arg0: BytesLike, overrides?: CallOverrides): Promise<string>

    'redirectedExits(bytes32)'(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    registerCustomL2Token(
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'registerCustomL2Token(address,uint256,uint256,uint256,address)'(
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    setOwner(_owner: string, overrides?: CallOverrides): Promise<void>

    'setOwner(address)'(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>

    transferExitAndCall(
      initialDestination: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'transferExitAndCall(address,address,uint256,uint256,address,bytes)'(
      initialDestination: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    updateWhitelistSource(
      newSource: string,
      overrides?: CallOverrides
    ): Promise<void>

    'updateWhitelistSource(address)'(
      newSource: string,
      overrides?: CallOverrides
    ): Promise<void>

    whitelist(overrides?: CallOverrides): Promise<string>

    'whitelist()'(overrides?: CallOverrides): Promise<string>

    withdrawFromL2(
      exitNum: BigNumberish,
      erc20: string,
      initialDestination: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'withdrawFromL2(uint256,address,address,uint256)'(
      exitNum: BigNumberish,
      erc20: string,
      initialDestination: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    ActivateCustomToken(
      seqNum: BigNumberish | null,
      l1Address: string | null,
      l2Address: null
    ): EventFilter

    DeployToken(
      seqNum: BigNumberish | null,
      l1Address: string | null
    ): EventFilter

    DepositToken(
      destination: string | null,
      sender: null,
      seqNum: BigNumberish | null,
      value: null,
      tokenAddress: string | null
    ): EventFilter

    WhitelistSourceUpdated(newSource: null): EventFilter

    WithdrawExecuted(
      initialDestination: string | null,
      destination: string | null,
      erc20: null,
      amount: null,
      exitNum: BigNumberish | null
    ): EventFilter

    WithdrawRedirected(
      user: string | null,
      to: string | null,
      erc20: null,
      amount: null,
      exitNum: BigNumberish | null,
      madeExternalCall: null
    ): EventFilter
  }

  estimateGas: {
    calculateL2TokenAddress(
      erc20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'calculateL2TokenAddress(address)'(
      erc20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    customL2Token(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    'customL2Token(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    deposit(
      erc20: string,
      destination: string,
      amount: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      callHookData: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'deposit(address,address,uint256,uint256,uint256,uint256,bytes)'(
      erc20: string,
      destination: string,
      amount: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      callHookData: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    forceRegisterCustomL2Token(
      l1CustomTokenAddress: string,
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'forceRegisterCustomL2Token(address,address,uint256,uint256,uint256,address)'(
      l1CustomTokenAddress: string,
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    getDepositCalldata(
      erc20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      callHookData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'getDepositCalldata(address,address,address,uint256,bytes)'(
      erc20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      callHookData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    hasTriedDeploy(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    'hasTriedDeploy(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    inbox(overrides?: CallOverrides): Promise<BigNumber>

    'inbox()'(overrides?: CallOverrides): Promise<BigNumber>

    initialize(
      _inbox: string,
      _l2TemplateERC20: string,
      _l2ArbTokenBridgeAddress: string,
      _owner: string,
      _whitelist: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'initialize(address,address,address,address,address)'(
      _inbox: string,
      _l2TemplateERC20: string,
      _l2ArbTokenBridgeAddress: string,
      _owner: string,
      _whitelist: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    isCustomToken(
      l1Token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'isCustomToken(address)'(
      l1Token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    l2ArbTokenBridgeAddress(overrides?: CallOverrides): Promise<BigNumber>

    'l2ArbTokenBridgeAddress()'(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>

    redirectedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'redirectedExits(bytes32)'(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    registerCustomL2Token(
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'registerCustomL2Token(address,uint256,uint256,uint256,address)'(
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    setOwner(_owner: string, overrides?: Overrides): Promise<BigNumber>

    'setOwner(address)'(
      _owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    transferExitAndCall(
      initialDestination: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'transferExitAndCall(address,address,uint256,uint256,address,bytes)'(
      initialDestination: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'updateWhitelistSource(address)'(
      newSource: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    whitelist(overrides?: CallOverrides): Promise<BigNumber>

    'whitelist()'(overrides?: CallOverrides): Promise<BigNumber>

    withdrawFromL2(
      exitNum: BigNumberish,
      erc20: string,
      initialDestination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'withdrawFromL2(uint256,address,address,uint256)'(
      exitNum: BigNumberish,
      erc20: string,
      initialDestination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    calculateL2TokenAddress(
      erc20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'calculateL2TokenAddress(address)'(
      erc20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    customL2Token(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'customL2Token(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    deposit(
      erc20: string,
      destination: string,
      amount: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      callHookData: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'deposit(address,address,uint256,uint256,uint256,uint256,bytes)'(
      erc20: string,
      destination: string,
      amount: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      callHookData: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    forceRegisterCustomL2Token(
      l1CustomTokenAddress: string,
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'forceRegisterCustomL2Token(address,address,uint256,uint256,uint256,address)'(
      l1CustomTokenAddress: string,
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    getDepositCalldata(
      erc20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      callHookData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getDepositCalldata(address,address,address,uint256,bytes)'(
      erc20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      callHookData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    hasTriedDeploy(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'hasTriedDeploy(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'inbox()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    initialize(
      _inbox: string,
      _l2TemplateERC20: string,
      _l2ArbTokenBridgeAddress: string,
      _owner: string,
      _whitelist: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'initialize(address,address,address,address,address)'(
      _inbox: string,
      _l2TemplateERC20: string,
      _l2ArbTokenBridgeAddress: string,
      _owner: string,
      _whitelist: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    isCustomToken(
      l1Token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'isCustomToken(address)'(
      l1Token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    l2ArbTokenBridgeAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'l2ArbTokenBridgeAddress()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    redirectedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'redirectedExits(bytes32)'(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    registerCustomL2Token(
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'registerCustomL2Token(address,uint256,uint256,uint256,address)'(
      l2CustomTokenAddress: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    setOwner(
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'setOwner(address)'(
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    transferExitAndCall(
      initialDestination: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'transferExitAndCall(address,address,uint256,uint256,address,bytes)'(
      initialDestination: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'updateWhitelistSource(address)'(
      newSource: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    whitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'whitelist()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    withdrawFromL2(
      exitNum: BigNumberish,
      erc20: string,
      initialDestination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'withdrawFromL2(uint256,address,address,uint256)'(
      exitNum: BigNumberish,
      erc20: string,
      initialDestination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}
