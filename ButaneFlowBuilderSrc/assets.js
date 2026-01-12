import RNFS from 'react-native-fs';
const signaturePath = RNFS.MainBundlePath + '/ButaneFlowBuilderAssets/ButaneFlowBuilder_signature.dat';
RNFS.readFile(signaturePath).then(data => {
  console.log('App signature:', data);
}).catch(() => {
});
