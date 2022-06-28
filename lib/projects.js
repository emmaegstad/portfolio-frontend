import { createClient } from 'next-sanity';

export const client = createClient({
    projectId: '7mcc6pbr',
    dataset: 'production',
    apiVersion: '2022-05-17',
    useCdn: false,
    headers: {
        fetchOptions: {
            mode: 'no-cors',
        },
    },
});
