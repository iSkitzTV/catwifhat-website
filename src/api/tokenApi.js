import axios from 'axios';

const CONTRACT_ADDRESS = 'terra1m58hc296srr6xygrrfyu6u0e32pl8d459nfs55pmegke8zlv94rqsjz882';
const LCD_BASE_URL = 'https://lcd.terra.dev';

export async function fetchTokenInfo() {
  try {
    const queryMsg = { token_info: {} };

    const response = await axios.get(
      `${LCD_BASE_URL}/wasm/contracts/${CONTRACT_ADDRESS}/store`,
      {
        params: {
          query_msg: JSON.stringify(queryMsg),
        },
      }
    );

    const tokenInfo = response.data?.data;

    return {
      name: tokenInfo.name,
      symbol: tokenInfo.symbol,
      decimals: tokenInfo.decimals,
      total_supply: tokenInfo.total_supply,
      burned_supply: null,
      circulating_supply: null,
      max_supply: null,
    };
  } catch (error) {
    console.error('Failed to fetch token info:', error);
    throw error;
  }
}