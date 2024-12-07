export const mtn_contract_address = "0x039d0136ca7534c1ea11dab12c99c4e492fbebbbb843c84b731f326871131bd1"

export const mtn_abi =[
    {
      "name": "IERC20Impl",
      "type": "impl",
      "interface_name": "contracts::erc20::IERC20"
    },
    {
      "name": "contracts::erc20::IERC20",
      "type": "interface",
      "items": [
        {
          "name": "get_name",
          "type": "function",
          "inputs": [],
          "outputs": [
            {
              "type": "core::felt252"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "get_symbol",
          "type": "function",
          "inputs": [],
          "outputs": [
            {
              "type": "core::felt252"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "get_decimals",
          "type": "function",
          "inputs": [],
          "outputs": [
            {
              "type": "core::integer::u8"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "get_total_supply",
          "type": "function",
          "inputs": [],
          "outputs": [
            {
              "type": "core::felt252"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "balance_of",
          "type": "function",
          "inputs": [
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [
            {
              "type": "core::felt252"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "allowance",
          "type": "function",
          "inputs": [
            {
              "name": "owner",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "spender",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [
            {
              "type": "core::felt252"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "transfer",
          "type": "function",
          "inputs": [
            {
              "name": "recipient",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "amount",
              "type": "core::felt252"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "transfer_from",
          "type": "function",
          "inputs": [
            {
              "name": "sender",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "recipient",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "amount",
              "type": "core::felt252"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "approve",
          "type": "function",
          "inputs": [
            {
              "name": "spender",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "amount",
              "type": "core::felt252"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "increase_allowance",
          "type": "function",
          "inputs": [
            {
              "name": "spender",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "added_value",
              "type": "core::felt252"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "decrease_allowance",
          "type": "function",
          "inputs": [
            {
              "name": "spender",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "subtracted_value",
              "type": "core::felt252"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        }
      ]
    },
    {
      "name": "constructor",
      "type": "constructor",
      "inputs": [
        {
          "name": "recipient",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "name",
          "type": "core::felt252"
        },
        {
          "name": "decimals",
          "type": "core::integer::u8"
        },
        {
          "name": "initial_supply",
          "type": "core::felt252"
        },
        {
          "name": "symbol",
          "type": "core::felt252"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "contracts::erc20::erc20::Transfer",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "from",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "to",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "value",
          "type": "core::felt252"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "contracts::erc20::erc20::Approval",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "owner",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "spender",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "value",
          "type": "core::felt252"
        }
      ]
    },
    {
      "kind": "enum",
      "name": "contracts::erc20::erc20::Event",
      "type": "event",
      "variants": [
        {
          "kind": "nested",
          "name": "Transfer",
          "type": "contracts::erc20::erc20::Transfer"
        },
        {
          "kind": "nested",
          "name": "Approval",
          "type": "contracts::erc20::erc20::Approval"
        }
      ]
    }
  ]