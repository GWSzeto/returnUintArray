// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Counter {

	function getUintArray() external pure returns (uint256[] memory arr) {
		arr = new uint256[](3);
		for (uint256 i; i < 3; i++) {
			arr[i] = i;
		}
	}
}
