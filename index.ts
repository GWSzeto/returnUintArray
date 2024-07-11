import { createPublicClient, http } from 'viem'
import { createPublicClient, http } from 'viem' 
import { foundry } from 'viem/chains'
 
const client = createPublicClient({
  chain: foundry,
  mode: 'anvil',
  transport: http(), 
})

import { privateKeyToAccount } from 'viem/accounts'
 
export const account = privateKeyToAccount("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80")

export const counterAbi = [
  {
    inputs: [],
    name: "getUintArray",
    outputs: [{ name: "", type: "uint256[]" }],
    stateMutability: "pure",
    type: "function",
  },
] as const;

async function main() {
	const { result } = await client.simulateContract({
	  address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
	  abi: counterAbi,
	  functionName: 'getUintArray',
	  account,
	})

	console.log("result: ", result)
}

main()

