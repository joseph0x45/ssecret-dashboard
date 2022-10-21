import type { PageLoad } from './$types';

import type { PageData } from './$types';
export let data: PageData;
import Cryptr from 'cryptr';
import axios from 'axios';
const fetch_secrets_url = 'https://web-production-9c04.up.railway.app/project/fetch/secrets';
const SSEK = 'sup3rs3cr3t4pp';
const decrypter = new Cryptr(SSEK);

async function fetchSecretsToken(USK: string, auth: string, project: string) {
  const response = await axios
    .post(
      fetch_secrets_url,
      {
        USK: USK,
        project: project
      },
      {
        headers: {
          Authorization: `Bearer ${auth}`
        }
      }
    )
    .then((res) => {
      const { data } = res.data;
      try {
        console.log("Decrypting")
        const decryptedSecretsObject = decrypter.decrypt(data);
        return decryptedSecretsObject
      } catch (error) {
        console.log(error)
        return false
      }

    })
    .catch((err) => {
      return false;
    });
    return response
}



export const load: PageLoad = async ({ params }) => {
    const result = await fetchSecretsToken(params.USK, params.auth, params.slug)
    if(result!=false){
      return {
        token: JSON.parse(result as string)
      }
    }
    return {
      token: result
    };  
}