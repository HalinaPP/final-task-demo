const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const PROJECT_ID = '133144376702'; //'high-office-331319';

const client = new SecretManagerServiceClient();

async function createAndAccessSecret(secretId) {
/*  const [secret] = await client.createSecret({
    parent: `projects/${PROJECT_ID}`,
    secret: {
      name: secretId,
      replication: {
        automatic: {},
      },
    },
    secretId,
  });
  console.info(`Created secret ${secret.name}`);

  // Add a version with a payload onto the secret.
  const [version] = await client.addSecretVersion({
    parent: secret.name,
    payload: {
      data: Buffer.from(payload, 'utf8'),
    },
  });

  console.info(`Added secret version ${version.name}`);
*/
  const name = `projects/${PROJECT_ID}/secrets/${secretId}/versions/latest`
  // Access the secret.
  const [accessResponse] = await client.accessSecretVersion({
    name: name,
  });

  //const responsePayload = accessResponse.payload.data.toString('utf8');
 // console.info(`Payload: ${responsePayload}`);
 // return responsePayload;
  return name;
}


/*const buildSecretName = keyName =>
  `projects/${PROJECT_ID}/secrets/${keyName}/versions/latest`;
;

const accessSecret = async keyName => {
  
  const name = buildSecretName(keyName);

  const [version] = await client.accessSecretVersion({
    name,
  });

  return version.payload.data.toString('utf8');
  */



module.exports = { createAndAccessSecret }